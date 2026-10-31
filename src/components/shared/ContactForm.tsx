"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { sendEmail, type ContactState } from "@/app/actions";

const initialState: ContactState = { success: false, message: "" };

const fieldClass =
  "w-full rounded-card border border-line bg-bg/60 px-4 py-3 text-fg placeholder:text-muted hover:border-muted focus:border-muted-strong";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);

  return (
    <form action={formAction} className="glass rise grid grid-cols-1 gap-5 p-6 md:p-8">
      {/* Honeypot: hidden from people, filled in by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Leave this empty
          <input type="text" name="botCheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="mono-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            defaultValue={state.values?.name}
            className={fieldClass}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="mono-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={state.values?.email}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="subject" className="mono-label">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          maxLength={150}
          defaultValue={state.values?.subject}
          className={fieldClass}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="mono-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={2500}
          defaultValue={state.values?.message}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={isPending} className="pill cursor-pointer disabled:opacity-50">
          <Send aria-hidden="true" className="size-3" />
          {isPending ? "Sending" : "Send message"}
        </button>
        <p role="status" className={state.success ? "text-accent-alt" : "text-accent"}>
          {state.message}
        </p>
      </div>
    </form>
  );
}
