import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import ContactCTA from "../components/ContactCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Boluwatife Osineye — mobile & product engineer based in Lagos. Background, principles, tech stack, and experience.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Boluwatife Osineye",
    description:
      "Mobile & product engineer building React Native, Expo, and Next.js products.",
    url: "/about",
    type: "profile",
  },
};

const stack = {
  Mobile: ["React Native", "Expo", "Reanimated", "TypeScript", "Native modules"],
  Web: ["Next.js", "React 19", "Tailwind CSS", "Framer Motion", "GraphQL"],
  Backend: ["Node.js", "Express", "Supabase", "MongoDB", "Firebase", "REST / WebSockets"],
  Tooling: ["Git", "EAS", "Figma", "Sentry", "Postman"],
};

const experience = [
  {
    company: "Insta-Delivery",
    role: "Mobile Engineer",
    period: "2024 — Jul 2025",
    location: "Remote · Lagos",
    summary:
      "Shipped and maintained the customer and vendor mobile apps that powered the platform's day-to-day. Both apps live on the App Store.",
    tags: ["React Native", "Expo", "TypeScript", "Realtime"],
  },
  {
    company: "Sabi Programmers",
    role: "Frontend Engineer & Mentor",
    period: "2024 — 2025",
    location: "Lagos, NG",
    summary:
      "Shipped the Sabi E-Voting platform used at a public tech event, and privately mentored beginners into their first paid engineering roles.",
    tags: ["React", "Node.js", "Realtime", "Mentorship"],
  },
];

const principles = [
  {
    title: "Ship small, ship often.",
    body: "Momentum compounds. I bias toward tight iterations users can actually feel.",
  },
  {
    title: "Native-feeling always.",
    body: "60fps, correct haptics, considered gestures. Mobile is felt before it is understood.",
  },
  {
    title: "Empty states are UX.",
    body: "The 5% edge cases are where product love lives — and where lazy work shows.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-20 md:pb-24">
        <div className="ambient-glow" />
        <div className="shell relative z-10 grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <span className="eyebrow">About · Boluwatife Osineye</span>
            <h1 className="display mt-6 text-5xl md:text-8xl">
              Engineer, <br />
              <span className="italic text-accent">quietly obsessive.</span>
            </h1>
          </div>
          <div className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/profile.jpg"
                alt="Boluwatife Osineye"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">01 — Background</span>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg md:text-xl leading-relaxed text-fg-muted">
            <p>
              I&rsquo;m a mobile & product engineer based in Lagos. I build
              apps and the platforms around them — mostly with{" "}
              <span className="text-fg">React Native</span>,{" "}
              <span className="text-fg">Expo</span>, and{" "}
              <span className="text-fg">TypeScript</span>.
            </p>
            <p>
              After graduating in Computer Science from the University of
              Ilorin, I got obsessed with UI and never really recovered. Along
              the way I&rsquo;ve shipped two apps to the App Store, launched{" "}
              <span className="text-fg">Fitnex</span> — a workout tracker now
              used by 200+ lifters — and mentored a handful of engineers into
              their first paid roles.
            </p>
            <p>
              Most of my work sits at the intersection of{" "}
              <span className="text-fg">product</span> and{" "}
              <span className="text-fg">engineering</span> — writing the code,
              but also worrying about the empty state, the loading skeleton,
              and whether the button feels good under a thumb.
            </p>
          </div>
        </div>
      </section>

      <div className="shell"><div className="divider" /></div>

      {/* Principles */}
      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">02 — Principles</span>
            <h2 className="display mt-4 text-3xl md:text-4xl">
              How I <span className="italic text-accent">work.</span>
            </h2>
          </div>
          <div className="md:col-span-8 grid gap-6 sm:grid-cols-1">
            {principles.map((p, i) => (
              <div key={p.title} className="grid grid-cols-[auto_1fr] gap-6 border-t border-border pt-6">
                <span
                  className="text-sm text-fg-subtle pt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-fg-muted">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="shell"><div className="divider" /></div>

      {/* Stack */}
      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">03 — Stack</span>
            <h2 className="display mt-4 text-3xl md:text-4xl">
              Tools of the <span className="italic text-accent">trade.</span>
            </h2>
          </div>
          <div className="md:col-span-8 grid gap-8 sm:grid-cols-2">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group} className="card p-6">
                <h3 className="text-sm text-fg-subtle uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
                  {group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-sm text-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="shell"><div className="divider" /></div>

      {/* Experience */}
      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">04 — Experience</span>
            <h2 className="display mt-4 text-3xl md:text-4xl">
              Where I&rsquo;ve <span className="italic text-accent">worked.</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6">
            {experience.map((job) => (
              <article key={job.company} className="card p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium">
                      {job.role}{" "}
                      <span className="text-fg-subtle">/</span>{" "}
                      <span className="text-accent">{job.company}</span>
                    </h3>
                  </div>
                  <div
                    className="text-sm text-fg-muted"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {job.period} · {job.location}
                  </div>
                </div>
                <p className="mt-4 text-fg-muted">{job.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] text-fg-muted"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}

            <article className="card p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="text-xl md:text-2xl font-medium">
                  BSc, Computer Science{" "}
                  <span className="text-fg-subtle">/</span>{" "}
                  <span className="text-accent">University of Ilorin</span>
                </h3>
                <div
                  className="text-sm text-fg-muted"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  2018 — 2023 · Ilorin, NG
                </div>
              </div>
              <p className="mt-4 text-fg-muted">
                Graduated with honors. Focus on software engineering, web and
                app development.
              </p>
            </article>
          </div>
        </div>
      </section>

      <div className="shell"><div className="divider" /></div>

      {/* Elsewhere */}
      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <span className="eyebrow">05 — Elsewhere</span>
            <h2 className="display mt-4 text-3xl md:text-5xl">
              Say <span className="italic text-accent">hello</span> —
            </h2>
          </div>
          <div className="md:col-span-6 flex flex-col divide-y divide-border border-y border-border">
            {[
              { label: "Email", value: "boluwatifeosineye26@gmail.com", href: "mailto:boluwatifeosineye26@gmail.com" },
              { label: "GitHub", value: "@heistifeh", href: "https://github.com/heistifeh" },
              { label: "LinkedIn", value: "Boluwatife Osineye", href: "https://www.linkedin.com/in/boluwatife-osineye-43b628269" },
              { label: "X", value: "@tifethedev", href: "https://x.com/tifethedev" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                className="group flex items-center justify-between py-4"
              >
                <span
                  className="text-sm text-fg-subtle uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.label}
                </span>
                <span className="flex items-center gap-3 text-lg text-fg group-hover:text-accent">
                  {item.value}
                  <HiArrowUpRight className="text-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
