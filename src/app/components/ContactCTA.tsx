"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const ContactCTA = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="card overflow-hidden"
        >
          <div className="relative p-10 md:p-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
            />

            <span className="eyebrow">03 — Currently</span>
            <h2 className="display mt-4 text-4xl md:text-7xl">
              Have an idea worth <br />
              <span className="italic text-accent">building well?</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg text-fg-muted">
              I take on a small number of engagements each year. If you&rsquo;re
              shipping something you care about, let&rsquo;s talk.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn btn-accent group">
                Start a conversation
                <HiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="mailto:boluwatifeosineye26@gmail.com"
                className="btn btn-ghost link-underline"
              >
                boluwatifeosineye26@gmail.com
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
