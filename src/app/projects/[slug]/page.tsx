import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectContent from "./ProjectContent";

/* ---------- Static Params ---------- */

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* ---------- Dynamic Metadata ---------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.client} ${project.event} | Case Study | The Butter Duck`,
    description: project.overview.slice(0, 160),
    openGraph: {
      images: [{ url: project.image }],
    },
  };
}

/* ---------- Page ---------- */

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <ProjectContent
      project={project}
      prev={prev}
      next={next}
    />
  );
}
