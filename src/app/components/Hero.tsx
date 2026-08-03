"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";

const socials = [
  { href: "https://github.com/heistifeh", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/boluwatife-osineye-43b628269",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://x.com/tifethedev", icon: FaXTwitter, label: "X / Twitter" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="ambient-glow" />

      <div className="shell relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="chip">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Open to freelance & full-time — 2026
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="display mt-8 text-6xl md:text-8xl lg:text-[9.5rem]"
        >
          Building
          <br />
          mobile products
          <br />
          <span className="italic text-accent">that feel inevitable.</span>
        </motion.h1>

        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-end"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-border">
              <Image
                src="/profile.jpg"
                alt="Boluwatife Osineye"
                fill
                className="object-cover"
                sizes="56px"
                priority
              />
            </div>
            <div className="text-sm">
              <p className="text-fg">Boluwatife Osineye</p>
              <p className="text-fg-muted">Mobile & Product Engineer · Lagos, NG</p>
            </div>
          </div>

          <p className="max-w-lg text-base text-fg-muted md:justify-self-center md:text-center">
            I design and engineer{" "}
            <span className="text-fg">React Native</span> apps and the platforms
            around them. Two apps live on the App Store; my PWA{" "}
            <span className="text-fg">Fitnex</span> now serves 200+ users.
          </p>

          <div className="flex items-center gap-3 md:justify-self-end">
            <Link href="/projects" className="btn btn-primary group">
              View work
              <HiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Get in touch
            </Link>
          </div>
        </motion.div>

        {/* Socials row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex items-center justify-between border-t border-border pt-6"
        >
          <span className="eyebrow">Elsewhere</span>
          <div className="flex items-center gap-5">
            {socials.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="text-fg-muted hover:text-fg"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
