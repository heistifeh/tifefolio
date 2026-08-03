"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--color-border)] font-serif italic text-[color:var(--color-accent)]"
            style={{ fontFamily: "var(--font-serif)" }}>
            b
          </span>
          <span className="text-sm font-medium tracking-tight">
            Boluwatife<span className="text-[color:var(--color-fg-subtle)]">.osineye</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/40 px-1.5 py-1 backdrop-blur">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "text-[color:var(--color-bg)]"
                    : "text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-fg)]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[color:var(--color-fg)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-2 text-xs text-[color:var(--color-fg-muted)]">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to work
          </span>
          <Link href="/contact" className="btn btn-accent text-xs">
            Let&rsquo;s talk
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/60"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-4 bg-current transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)]/95 backdrop-blur-xl"
          >
            <nav className="shell flex flex-col gap-1 py-6">
              {menuItems.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-lg ${
                      isActive
                        ? "border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-fg)]"
                        : "text-[color:var(--color-fg-muted)]"
                    }`}
                  >
                    {item.label}
                    <span className="font-mono text-xs opacity-60">→</span>
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="btn btn-accent mt-4 w-full"
              >
                Let&rsquo;s talk
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
