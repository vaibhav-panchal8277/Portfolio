"use server";

import { cookies } from "next/headers";

type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactState = {
  success: boolean;
  message: string;
  // Sent back on failure, because React clears the form after an action runs.
  values?: ContactValues;
};

export async function sendEmail(_prevState: ContactState, formData: FormData): Promise<ContactState> {
  const cookieStore = await cookies();

  // 1. Honeypot check for bots
  const botCheck = formData.get("botCheck");
  if (botCheck) {
    // Silent discard: return success to trick bots, but don't send anything.
    return { success: true, message: "Message sent successfully!" };
  }

  // 2. Extract inputs
  const values: ContactValues = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };
  const { name, email, subject, message } = values;

  const fail = (text: string): ContactState => ({ success: false, message: text, values });

  // 3. Cooldown check (Rate Limiting)
  const cooldownCookie = cookieStore.get("email_sent_cooldown");
  if (cooldownCookie) {
    return fail("Please wait 60 seconds before sending another message.");
  }

  // 4. Input validation
  if (!name || !email || !subject || !message) {
    return fail("All fields are required.");
  }

  if (name.length > 100) {
    return fail("Name must be under 100 characters.");
  }

  if (subject.length > 150) {
    return fail("Subject must be under 150 characters.");
  }

  if (message.length > 2500) {
    return fail("Message must be under 2500 characters.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return fail("Please enter a valid email address.");
  }

  // 5. Check environment variables
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || "vaibhavpanchal1808@gmail.com";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return fail("The contact form isn't available right now. Please email me directly.");
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: toEmail,
        reply_to: email,
        subject: `[Portfolio Contact] ${subject}`,
        // Plain text, so nothing a visitor types can be read as HTML.
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      }),
    });

    if (response.ok) {
      // Set cooldown cookie for 60 seconds (HTTPOnly, secure, sameSite)
      cookieStore.set("email_sent_cooldown", "true", {
        maxAge: 60, // 60 seconds
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      return { success: true, message: "Message sent successfully!" };
    }

    console.error("Resend API error:", await response.text());
    return fail("The message couldn't be sent. Please try again later.");
  } catch (error) {
    console.error("Email sending error:", error);
    return fail("An unexpected error occurred. Please try again later.");
  }
}
