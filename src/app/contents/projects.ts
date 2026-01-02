import { Projects } from "@/types";

export const projects: Projects[] = [
  {
    title: "Insta-Delivery Vendors (Mobile App)",
    description:
      "A production-grade vendor mobile application for a multi-sided e-commerce and logistics platform. Vendors track orders in real time, receive push updates, and manage daily operations on the go. Built, shipped, and maintained as part of a live commercial product.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "REST APIs",
      "WebSockets",
      "Firebase",
    ],
    githubLink: "",

    demoLink: "https://apps.apple.com/app/id6755331074", // App Store link
    image: "/projects/insta-delivery-vendor.png",
    category: "Mobile",
  },
  {
    title: "Monero Pay",
    description:
      "A real-time crypto swap platform with live price tracking and an authenticated admin dashboard. I built the data flows, state handling, and UX patterns that translate cleanly to mobile experiences.",
    technologies: [
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Shadcn/ui",
    ],
    githubLink: "https://github.com/heistifeh/monero-pay", // Replace with your actual repo
    demoLink: "https://moneropay.onrender.com/", // Replace with your live link
    image: "/projects/monero.png", // Replace with your actual image
    category: "Web",
  },
  {
    title: "Real Estate Web Application",
    description:
      "A full-stack real estate platform with a mobile-first browsing experience. Built with React, Express.js, Node.js, and MongoDB, with Firebase auth and responsive UX.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/heistifeh/mern-estate.git",
    demoLink: "https://mern-estate-heht.onrender.com/",
    image: "/projects/estate-project.png",
    category: "Web",
  },
  {
    title: "Cartify E-commerce",
    description:
      "A full-stack e-commerce platform with mobile-first UI/UX, real-time CMS integration, secure authentication, and seamless Stripe-powered checkout. Features include product search, category browsing, cart management, sales & coupon functionality, and an admin-friendly Sanity Studio with real-time visual editing.",
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
