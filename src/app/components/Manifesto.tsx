"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const stats = [
  { value: "2", label: "apps live on the App Store" },
  { value: "200+", label: "active users on Fitnex, my PWA" },
  { value: "4", label: "shipped, production-grade products" },
];

const Manifesto = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">02 — Approach</span>
          </div>

          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="display text-3xl md:text-5xl"
            >
              I care about the{" "}
              <span className="italic text-accent">last 10%</span> — the frame
              that doesn&rsquo;t drop, the empty state that reassures, the tap
              target that lands. Craft is a feature.
            </motion.p>

            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="border-t border-border pt-4">
                  <div
                    className="text-4xl md:text-5xl"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-fg-muted">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link href="/about" className="btn btn-ghost group">
                Read the long version
                <HiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
