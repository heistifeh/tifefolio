import { Projects } from "@/types";

export const projects: Projects[] = [
  {
    slug: "insta-delivery-customer",
    title: "Insta-Delivery (Customer App)",
    tagline: "Buying groceries, food, and essentials — one tap at a time.",
    description:
      "The consumer-facing mobile app for Insta-Delivery — a live commercial grocery, food, and logistics platform. Customers browse vetted vendors, place orders, track deliveries in real time, and manage payments.",
    role: "Mobile Engineer",
    period: "2024 — Jul 2025",
    context:
      "Insta-Delivery is a multi-sided commerce platform operating in Nigeria. The customer app is where the whole business meets the user — every order, every vendor, every rider hand-off. I joined to help ship the first App Store release and owned major surfaces through launch.",
    responsibilities: [
      "Built and shipped core customer surfaces end-to-end — vendor discovery, product detail, cart, and checkout.",
      "Owned the real-time order tracking flow, integrating maps and WebSockets for live rider updates.",
      "Implemented wallet and payment screens against the platform's own payment rails.",
      "Wired push notifications for order lifecycle events with reliable cold-start handling.",
      "Designed the empty, loading, and error states so every screen has a considered fallback.",
    ],
    highlights: [
      "Real-time driver tracking on a map with sub-second WebSocket updates and battery-friendly polling fallback.",
      "Optimistic UI on cart operations so the app feels instant even on flaky networks common in the region.",
      "60fps product lists via memoized cells, FlashList, and disciplined re-render boundaries.",
      "One shared design system across the customer and vendor apps to keep visual language consistent.",
    ],
    outcomes: [
      "Live on the App Store as part of a working commercial product.",
      "Zero-downtime rollouts using EAS Update for JS-only fixes.",
      "Crash-free sessions consistently above the 99% target since launch.",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "REST APIs",
      "WebSockets",
      "Google Maps",
      "Firebase",
    ],
    githubLink: "",
    demoLink: "https://apps.apple.com/ng/app/insta-delivery-by-isds/id6746375381",
    image: "/projects/insta-delivery-customer.png",
    category: "Mobile",
  },
  {
    slug: "insta-delivery-vendors",
    title: "Insta-Delivery (Vendors App)",
    tagline: "The merchant cockpit for a real-time delivery platform.",
    description:
      "The vendor-facing counterpart to the Insta-Delivery platform. Merchants receive incoming orders in real time, manage fulfilment, sync with drivers and customers, and track earnings from a native wallet.",
    role: "Mobile Engineer",
    period: "2024 — Jul 2025",
    context:
      "Vendors are the supply side of the platform — restaurants, kitchens, grocers. Their app is how they run their day: accepting orders, coordinating with riders, and getting paid. Every second of latency or missed push is real money lost.",
    responsibilities: [
      "Built the order intake pipeline with tabs for incoming, ongoing, completed, and cancelled states.",
      "Owned the order-detail screen — customer notes, order summary, payment summary, and status transitions.",
      "Implemented the wallet & earnings module with balance, payouts, and transaction history.",
      "Set up push notification handling so vendors never miss an order — even from a cold start.",
      "Coordinated realtime sync with the customer and driver apps through a shared event bus.",
    ],
    highlights: [
      "Reliable push delivery via APNs with dedupe + local ringing for missed foreground notifications.",
      "Instant list updates via WebSocket subscriptions, with graceful reconnect and backfill on resume.",
      "Native-feeling swipe interactions on order cards using Reanimated 3.",
      "Structured error boundaries so a single failing card never takes down the orders screen.",
    ],
    outcomes: [
      "Live on the App Store and used daily by merchants on the Insta-Delivery platform.",
      "Sub-second incoming-order alert latency measured end-to-end.",
      "Shipped in the same design language as the customer app for a coherent brand.",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "REST APIs",
      "WebSockets",
      "Push Notifications",
      "Firebase",
    ],
    githubLink: "",
    demoLink: "https://apps.apple.com/ng/app/insta-delivery-vendors/id6748257517",
    image: "/projects/insta-delivery-vendors.png",
    category: "Mobile",
  },
  {
    slug: "fitnex",
    title: "Fitnex — Workout Tracker PWA",
    tagline: "Show up. Log it. Get stronger.",
    description:
      "A production workout-tracking PWA used by over 200 lifters to log sessions, track progress, and stay consistent. Installable on any device, works offline, and ships with a fully guest-friendly onboarding.",
    role: "Founder & Full-stack Engineer",
    period: "2024 — Present",
    context:
      "Fitnex is a PWA I designed, built, and launched end-to-end. The goal: give people who train in a gym a fast, distraction-free way to log workouts on their phone without an App Store install. Today it has 200+ active users and is my proof point that a well-crafted web app can feel every bit as native as the real thing.",
    responsibilities: [
      "Designed the full brand and product from scratch — logo, type system, and the dark, high-contrast look you see on the marketing page.",
      "Built the full-stack app: onboarding, auth (sign in + guest mode), workout logging, exercise library, history, and progress views.",
      "Configured the PWA layer: install prompt, service worker, offline shell, and add-to-home-screen support across iOS and Android.",
      "Owned deployment, custom domain (fitnexonline.com), analytics, and the ongoing feedback loop with real users.",
      "Iterated on onboarding to move users from marketing page → first logged set as quickly as possible.",
    ],
    highlights: [
      "Guest mode — users can log a full session before they ever create an account, which lifted activation dramatically.",
      "Offline-first: sessions logged mid-workout in a spotty gym sync cleanly when reception returns.",
      "60fps interactions and haptic-style feedback on set completion, so it feels like a native tracker.",
      "Zero-cost distribution — installable from any browser, no App Store approval loop.",
    ],
    outcomes: [
      "200+ active users and growing without paid acquisition.",
      "Live at fitnexonline.com — shipped, maintained, and iterated on based on real user feedback.",
      "Proof that a PWA, done well, can hold its own against native fitness apps.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PWA / Service Worker",
      "Supabase",
      "Framer Motion",
    ],
    githubLink: "",
    demoLink: "https://fitnexonline.com/",
    image: "/projects/fitnex.png",
    category: "Web",
  },
  {
    slug: "cartify-ecommerce",
    title: "Cartify E-commerce",
    tagline: "A full-stack storefront with real-time CMS editing and Stripe checkout.",
    description:
      "A full-stack e-commerce platform with mobile-first UI/UX, real-time CMS integration, secure authentication, and seamless Stripe-powered checkout.",
    role: "Full-stack Developer",
    period: "2024",
    context:
      "A personal project pushed to production quality — the goal was to demonstrate an end-to-end commerce experience: shoppers, checkout, and an admin who can edit the storefront without a deploy.",
    responsibilities: [
      "Designed the product catalogue schema in Sanity and modeled categories, sales, and coupons.",
      "Built product search, category browsing, and product detail with server components + streaming.",
      "Implemented cart state with Zustand and persisted it across sessions.",
      "Integrated Stripe Checkout with webhook-driven order confirmation.",
      "Set up Clerk for authentication and gated admin surfaces.",
    ],
    highlights: [
      "Real-time visual editing in Sanity Studio — content changes reflect on the site without a rebuild.",
      "Server components for fast first paint on catalogue pages.",
      "Coupon and sale logic baked into the pricing pipeline so promotions don't break at checkout.",
      "Framer Motion micro-interactions on cart open, add-to-cart, and modal transitions.",
    ],
    outcomes: [
      "Deployed on Vercel with edge caching for the storefront.",
      "End-to-end checkout tested against Stripe test cards.",
      "Extensible product schema — adding a new field is one Sanity edit, not a code change.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Sanity.io",
      "Clerk",
      "Shadcn/ui",
      "Zustand",
      "Stripe",
      "Framer Motion",
    ],
    githubLink: "https://github.com/heistifeh/next-ecommerce",
    demoLink: "https://next-ecommerce-eta-nine.vercel.app/",
    image: "/projects/cartify.jpg",
    category: "Web",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
