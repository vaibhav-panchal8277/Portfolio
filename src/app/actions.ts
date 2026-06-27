"use server";

import { cookies } from "next/headers";

export async function sendEmail(prevState: any, formData: FormData) {
  const cookieStore = await cookies();
  
  // 1. Honeypot check for bots
  const botCheck = formData.get("botCheck");
  if (botCheck) {
    // Silent discard: return success to trick bots, but don't send anything.
    return { success: true, message: "Message sent successfully!" };
  }

  // 2. Cooldown check (Rate Limiting)
  const cooldownCookie = cookieStore.get("email_sent_cooldown");
  if (cooldownCookie) {
    return {
      success: false,
      message: "Please wait 60 seconds before sending another message.",
    };
  }

  // 3. Extract inputs
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // 4. Input validation
  if (!name || !email || !subject || !message) {
    return { success: false, message: "All fields are required." };
  }

  if (name.length > 100) {
    return { success: false, message: "Name must be under 100 characters." };
  }

  if (subject.length > 150) {
    return { success: false, message: "Subject must be under 150 characters." };
  }

  if (message.length > 2500) {
    return { success: false, message: "Message must be under 2500 characters." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // 5. Check environment variables
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || "vaibhavpanchal1808@gmail.com";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return {
      success: false,
      message: "Server configuration error. Please add RESEND_API_KEY to your environment variables.",
    };
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
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      }),
    });

    const data = await response.json();

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
    } else {
      console.error("Resend API error:", data);
      return { success: false, message: data.message || "Failed to send email." };
    }
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
