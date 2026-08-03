import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import { HiArrowUpRight, HiArrowLeft } from "react-icons/hi2";
import { getProjectBySlug, projects } from "../../contents/projects";
import ContactCTA from "../../components/ContactCTA";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not found" };
  const url = `/projects/${project.slug}`;
  return {
    title: project.title,
    description: `${project.tagline} — case study by Boluwatife Osineye.`,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.tagline,
      url,
      type: "article",
      images: [{ url: project.image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.tagline,
      images: [project.image],
    },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIdx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIdx + 1) % projects.length];

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.tagline,
    creator: { "@type": "Person", name: "Boluwatife Osineye" },
    dateCreated: project.period,
    url: `/projects/${project.slug}`,
    image: project.image,
    keywords: project.technologies.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      {/* Header */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="ambient-glow" />
        <div className="shell relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg"
          >
            <HiArrowLeft className="text-base" /> All work
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span className="chip">
              {project.category === "Mobile" ? "◐ Mobile" : "◍ Web"}
            </span>
            <span
              className="text-xs uppercase tracking-widest text-fg-subtle"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {project.period}
            </span>
          </div>

          <h1 className="display mt-4 text-5xl md:text-7xl">
            {project.title}
          </h1>
          <p
            className="mt-6 max-w-2xl text-xl text-fg-muted italic"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {project.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={project.demoLink}
              target="_blank"
              className="btn btn-accent group"
            >
              {project.category === "Mobile" ? "App Store" : "Live site"}
              <HiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
      </section>

      {/* Hero image */}
      <section className="pb-16 md:pb-24">
        <div className="shell">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-2">
            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meta grid */}
      <section className="pb-16 md:pb-24">
        <div className="shell">
          <div className="grid gap-8 border-y border-border py-8 md:grid-cols-4">
            <MetaBlock label="Role" value={project.role} />
            <MetaBlock label="Timeline" value={project.period} />
            <MetaBlock label="Category" value={project.category} />
            <MetaBlock label="Type" value={project.githubLink ? "Personal" : "Commercial"} />
          </div>
        </div>
      </section>

      {/* Context */}
      <Chapter number="01" label="Context">
        <p className="text-lg md:text-xl leading-relaxed text-fg-muted">
          {project.context}
        </p>
      </Chapter>

      {/* Responsibilities */}
      <Chapter number="02" label="What I owned">
        <ul className="space-y-4">
          {project.responsibilities.map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-6 border-t border-border pt-4"
            >
              <span
                className="text-sm text-fg-subtle"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg text-fg leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Chapter>

      {/* Highlights */}
      <Chapter number="03" label="Interesting bits">
        <div className="grid gap-6 sm:grid-cols-2">
          {project.highlights.map((item, i) => (
            <div key={i} className="card p-6">
              <div
                className="text-xs uppercase tracking-widest text-accent mb-3"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                — {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-fg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </Chapter>

      {/* Stack */}
      <Chapter number="04" label="Stack">
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1.5 text-sm text-fg"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {tech}
            </li>
          ))}
        </ul>
      </Chapter>

      {/* Outcomes */}
      <Chapter number="05" label="Outcomes">
        <ul className="space-y-4">
          {project.outcomes.map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-6 border-t border-border pt-4"
            >
              <span
                className="text-sm text-accent"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ✓
              </span>
              <span className="text-lg text-fg leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Chapter>

      {/* Next project */}
      <section className="py-16 md:py-24">
        <div className="shell">
          <Link
            href={`/projects/${next.slug}`}
            className="group card block p-8 md:p-12"
          >
            <span
              className="text-xs uppercase tracking-widest text-fg-subtle"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Next project
            </span>
            <div className="mt-3 flex items-center justify-between gap-6">
              <h3 className="display text-3xl md:text-5xl">
                {next.title}
              </h3>
              <span className="grid h-12 w-12 flex-none place-items-center rounded-full border border-border text-fg-muted transition-all group-hover:border-accent group-hover:text-accent group-hover:rotate-45">
                <HiArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

const MetaBlock = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div
      className="text-xs uppercase tracking-widest text-fg-subtle mb-2"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {label}
    </div>
    <div className="text-lg text-fg">{value}</div>
  </div>
);

const Chapter = ({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children: React.ReactNode;
}) => (
  <section className="py-12 md:py-16">
    <div className="shell grid gap-8 md:grid-cols-12">
      <div className="md:col-span-4">
        <div
          className="text-xs uppercase tracking-widest text-fg-subtle"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {number} — {label}
        </div>
      </div>
      <div className="md:col-span-8">{children}</div>
    </div>
  </section>
);
