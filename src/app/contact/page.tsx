import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Get a Quote | The Butter Duck",
  description: "Request a quote for your next exhibition stand. Tell us your event, space, and vision — we'll handle the rest.",
};

export default function ContactPage() {
  return <ContactForm />;
}
