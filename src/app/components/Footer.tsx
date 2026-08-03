import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/heistifeh", label: "GitHub", icon: FaGithub },
  { href: "https://www.linkedin.com/in/boluwatife-osineye-43b628269", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://x.com/tifethedev", label: "X", icon: FaXTwitter },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="eyebrow">Let&rsquo;s make something</span>
            <h2
              className="display mt-4 text-5xl md:text-7xl leading-none"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              boluwatife
              <span className="italic text-accent">.osineye</span>
            </h2>
            <p className="mt-6 max-w-md text-fg-muted">
              Currently taking on select projects for 2026. Prefer email? →{" "}
              <Link
                href="mailto:boluwatifeosineye26@gmail.com"
                className="text-fg link-underline"
              >
                boluwatifeosineye26@gmail.com
              </Link>
            </p>
          </div>

          <div className="md:col-span-3">
            <div
              className="text-xs uppercase tracking-widest text-fg-subtle mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Sitemap
            </div>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-fg hover:text-accent"
                  >
                    {item.label}
                    <HiArrowUpRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div
              className="text-xs uppercase tracking-widest text-fg-subtle mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Elsewhere
            </div>
            <ul className="space-y-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    className="group inline-flex items-center gap-3 text-fg hover:text-accent"
                  >
                    <Icon className="text-base" />
                    {label}
                    <HiArrowUpRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-6 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p
            className="text-xs text-fg-subtle"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © {year} Boluwatife Osineye — Designed & built in Lagos.
          </p>
          <p
            className="text-xs text-fg-subtle inline-flex items-center gap-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            All systems nominal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
