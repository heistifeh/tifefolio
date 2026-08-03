import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import { projects } from "../contents/projects";
import ContactCTA from "../components/ContactCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected mobile apps and platforms by Boluwatife Osineye — Insta-Delivery (customer + vendors), Fitnex PWA, and Cartify e-commerce.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Work · Boluwatife Osineye",
    description:
      "Case studies of shipped mobile apps and web platforms — including two apps live on the App Store.",
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-20 md:pb-24">
        <div className="ambient-glow" />

        <div className="shell relative z-10">
          <span className="eyebrow">Work · 2022 — Present</span>
          <h1 className="display mt-6 text-5xl md:text-8xl">
            Selected <span className="italic text-accent">projects.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-fg-muted">
            A mix of shipped mobile apps and the web platforms around them.
            Every one had users, deadlines, and a bar to clear.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="shell">
          <ul className="divide-y divide-border border-y border-border">
            {projects.map((project, idx) => (
              <li key={project.title} className="group">
                <div className="grid grid-cols-12 items-start gap-6 py-8 md:py-12">
                  <div className="col-span-12 md:col-span-1">
                    <span
                      className="text-sm text-fg-subtle"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="col-span-12 md:col-span-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block overflow-hidden rounded-xl border border-border bg-surface-2"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  </div>

                  <div className="col-span-12 md:col-span-7">
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <Link href={`/projects/${project.slug}`}>
                            <h2 className="text-2xl md:text-3xl font-medium tracking-tight hover:text-accent">
                              {project.title}
                            </h2>
                          </Link>
                          <span className="chip">
                            {project.category === "Mobile" ? "◐ Mobile" : "◍ Web"}
                          </span>
                        </div>
                        <p className="mt-4 max-w-2xl text-base text-fg-muted">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-2.5 py-1 text-[11px] text-fg-muted"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="btn btn-primary group/btn"
                      >
                        Read case study
                        <HiArrowUpRight className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                      </Link>
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        className="btn btn-ghost"
                      >
                        {project.category === "Mobile" ? "App Store" : "Live site"}
                      </Link>
                      {project.githubLink && (
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          className="btn btn-ghost"
                        >
                          <FaGithub /> Source
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
