"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import { projects } from "../contents/projects";

const FeaturedProjects = () => {
  const featured = projects.slice(0, 4);

  return (
    <section className="relative py-24 md:py-32">
      <div className="shell">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <span className="eyebrow">01 — Selected work</span>
            <h2 className="display mt-4 text-4xl md:text-6xl">
              Shipped, not <span className="italic text-accent">shelved.</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex btn btn-ghost group"
          >
            All projects
            <HiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {featured.map((project, idx) => {
            // First card spans wider, creating editorial rhythm
            const isFeature = idx === 0;
            const span = isFeature
              ? "md:col-span-6"
              : idx === 1
              ? "md:col-span-3"
              : idx === 2
              ? "md:col-span-3"
              : "md:col-span-6";

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.05, ease: [0.19, 1, 0.22, 1] }}
                className={`card group ${span}`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block"
                >
                  <div className={`relative overflow-hidden ${isFeature ? "aspect-[16/9]" : "aspect-[4/3]"} bg-surface-2`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bg/70 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 chip">
                      {project.category === "Mobile" ? "◐ Mobile" : "◍ Web"}
                    </span>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0">
                        <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm md:text-base text-fg-muted line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                      <span className="mt-1 grid h-10 w-10 flex-none place-items-center rounded-full border border-border text-fg-muted transition-all group-hover:border-accent group-hover:text-accent group-hover:rotate-45">
                        <HiArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-2.5 py-1 text-[11px] text-fg-muted"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-[11px] text-fg-subtle">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="absolute right-6 top-6 z-10 grid h-10 w-10 place-items-center rounded-full border border-border bg-bg/60 text-fg-muted backdrop-blur hover:text-fg hover:border-border-strong"
                    aria-label="View source"
                  >
                    <FaGithub className="h-4 w-4" />
                  </Link>
                )}
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 flex md:hidden justify-center">
          <Link href="/projects" className="btn btn-ghost">
            All projects <HiArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
