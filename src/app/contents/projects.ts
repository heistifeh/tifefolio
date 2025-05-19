import { Projects } from "@/types";

export const projects: Projects[] = [
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
    image: "/projects/estate-project.jpg",
  },
  {
    title: "Live Voting App",
    description:
      "A real-time voting system that allows users to create polls, cast votes, and see live results with an intuitive interface and responsive design.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/Techtees/blogx.git",
    demoLink: "https://sabi-evote.vercel.app/",
    image: "/projects/voting-app-project.jpg",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/heistifeh/portfolio2024.git",
    demoLink: "https://portfolio2024-gamma-eight.vercel.app/",
    image: "/projects/portfolio-project.jpg",
  },

  {
    title: "Banking Website",
    description:
      "A responsive informational website for a digital bank, featuring sections for services, FAQs, customer onboarding, and contact. Designed to guide new users and support existing customers with a clean, user-friendly layout.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubLink: "https://github.com/heistifeh/Bankist-Website.git", // replace with actual repo
    demoLink: "https://bankist-website-theta-five.vercel.app/", // replace with actual demo
    image: "/projects/bank-website-project.jpg",
  },
  {
    title: "Expense Tracker",
    description: "A personal finance tracker to manage expenses and income.",
    technologies: ["React", "Firebase"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/expense-tracker.webp",
  },

  {
    title: "Banking Web Application",
    description:
      "An interactive banking interface with features like fund transfers, withdrawals, loan applications, savings tracking, and user authentication. Designed for simplicity and clarity in managing personal finances.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubLink: "https://github.com/heistifeh/Bankist-App.git",
    demoLink: "https://bankist-app-sage.vercel.app/",
    image: "/projects/bank-app-project.jpg",
  },
];
