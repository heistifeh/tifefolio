"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";

type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (errors[e.target.id as keyof FieldErrors]) {
      setErrors({ ...errors, [e.target.id]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 422 && body.errors) {
          setErrors(body.errors);
          setStatus("idle");
          return;
        }
        throw new Error(body.error ?? "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-20 md:pb-24">
        <div className="ambient-glow" />
        <div className="shell relative z-10">
          <span className="eyebrow">Contact</span>
          <h1 className="display mt-6 text-5xl md:text-8xl">
            Let&rsquo;s build <br />
            <span className="italic text-accent">something.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-fg-muted">
            Freelance, full-time roles, or an interesting project — I read
            every message. Expect a reply within a couple of days.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          {/* Contact info */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-10"
          >
            <div className="flex flex-col divide-y divide-border border-y border-border">
              {[
                { label: "Email", value: "boluwatifeosineye26@gmail.com", href: "mailto:boluwatifeosineye26@gmail.com" },
                { label: "Phone", value: "+234 805 066 8634", href: "tel:+2348050668634" },
                { label: "Location", value: "Lagos, Nigeria (GMT+1)", href: null },
              ].map((item) => (
                <div key={item.label} className="py-4">
                  <div
                    className="text-xs uppercase tracking-widest text-fg-subtle"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {item.label}
                  </div>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="mt-1 inline-flex items-center gap-2 text-lg text-fg hover:text-accent"
                    >
                      {item.value}
                      <HiArrowUpRight className="text-sm" />
                    </Link>
                  ) : (
                    <div className="mt-1 text-lg text-fg">{item.value}</div>
                  )}
                </div>
              ))}
            </div>

            <div>
              <div
                className="text-xs uppercase tracking-widest text-fg-subtle mb-3"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Elsewhere
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/heistifeh"
                  target="_blank"
                  aria-label="GitHub"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-fg-muted hover:text-fg hover:border-border-strong"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/boluwatife-osineye-43b628269"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-fg-muted hover:text-fg hover:border-border-strong"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://x.com/tifethedev"
                  target="_blank"
                  aria-label="X"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-fg-muted hover:text-fg hover:border-border-strong"
                >
                  <FaXTwitter />
                </Link>
              </div>
            </div>
          </motion.aside>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-7 card p-8 md:p-10 space-y-6"
          >
            <Field
              id="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ada Lovelace"
              error={errors.name}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              error={errors.email}
            />
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-fg-subtle mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                placeholder="Tell me a bit about what you're building…"
                className="w-full resize-none rounded-xl border border-border bg-surface/40 px-4 py-3 text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none"
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="submit"
                className="btn btn-accent group"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending…" : "Send message"}
                <HiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-emerald-400"
                >
                  Thanks — I&rsquo;ll be in touch soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-400"
                >
                  Something went wrong. Try again or email me directly.
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
};

const Field = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}) => (
  <div>
    <label htmlFor={id} className="block text-xs uppercase tracking-widest text-fg-subtle mb-2" style={{ fontFamily: "var(--font-mono)" }}>
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full rounded-xl border border-border bg-surface/40 px-4 py-3 text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none"
    />
    {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
  </div>
);

export default ContactPage;
