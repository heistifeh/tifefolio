import { Projects } from "@/types";

export const projects: Projects[] = [
  {
    title: "Monero Pay",
    description:
      "A full-stack crypto swap platform that allows users to exchange cryptocurrencies in real time. Includes live crypto price tracking for instant insights and an admin dashboard with full authentication to manage transactions securely. Built with Next.js and Supabase for a fast, scalable experience.",
    technologies: [
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Shadcn/ui",
    ],
    githubLink: "https://github.com/heistifeh/monero-pay", // Replace with your actual repo
    demoLink: "https://monero-pay.net/", // Replace with your live link
    image: "/projects/monero.png", // Replace with your actual image
  },
  {
    title: "Real Estate Web Application",
    description:
      "A full-stack real estate platform for listing, searching, and managing properties. Built with React, Express.js, Node.js, and MongoDB, with Firebase for authentication and Tailwind CSS for responsive design.",
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
  },
  {
    title: "Cartify E-commerce",
    description:
      "A full-stack e-commerce platform with modern UI/UX, real-time CMS integration, secure authentication, live product updates, and seamless Stripe-powered checkout. Features include product search, category browsing, cart management, sales & coupon functionality, and an admin-friendly Sanity Studio with real-time visual editing.",
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
  }
  
];
