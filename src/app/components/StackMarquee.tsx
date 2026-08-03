"use client";

const stack = [
  "React Native",
  "Expo",
  "TypeScript",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "Tailwind",
  "GraphQL",
  "Reanimated",
  "MongoDB",
];

const StackMarquee = () => {
  return (
    <section className="relative border-y border-border py-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-bg to-transparent" />

      <div className="marquee-track flex items-center gap-12">
        {[...stack, ...stack].map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="flex items-center gap-12 text-xl md:text-2xl text-fg-muted"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <span className="hover:text-fg transition-colors">{s}</span>
            <span className="text-accent">*</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default StackMarquee;
