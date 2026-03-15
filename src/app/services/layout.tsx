import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibition Stand Design & Build Services | The Butter Duck Dubai",
  description:
    "Custom exhibition stand design, build, project management, and event production services in the UAE. From 25 sqm booths to 1000+ sqm builds. Get a free quote.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
