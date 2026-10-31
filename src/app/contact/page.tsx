import type { Metadata } from "next";
import ContactForm from "@/components/shared/ContactForm";
import ContactLinks from "@/components/shared/ContactLinks";
import PageHeader from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vaibhav Panchal.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        seed={79}
        label="Contact"
        title="Get in touch."
        lede="A question, a project idea or a role you think I would fit. Send it over."
      />
      <div className="page mt-10 grid grid-cols-1 items-start gap-4 lg:grid-cols-[3fr_2fr]">
        <ContactForm />
        <ContactLinks />
      </div>
    </>
  );
}
