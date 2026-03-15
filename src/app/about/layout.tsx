import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The Butter Duck | Exhibition Stand Builder in Dubai, UAE",
  description:
    "UAE-based exhibition design and event production company. 80+ projects across 10 countries. Custom booth builds from 25 sqm to 1000+ sqm. Founded 2019, trusted by Microsoft and Vanderlande.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
