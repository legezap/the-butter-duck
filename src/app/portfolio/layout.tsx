import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibition Stand Portfolio | Custom Booth Projects | The Butter Duck",
  description:
    "Browse 80+ completed exhibition stand and event production projects across LEAP, Gulfood, Intersec, Airport Show, and more. See renders vs reality and full case studies.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
