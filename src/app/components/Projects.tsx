"use client"
import React from "react";
import Image from "next/image";
import { projects } from "../contents/projects";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";
const Projects = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <motion.h2 className="text-3xl font-bold mb-12 text-center" {...fadeInUp}>
        Featured Projects
      </motion.h2>

      {/* cards */}

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.article
            variants={fadeInUp}
            {...cardHoverSmall}
            key={project.title}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33w"
              />
            </div>
            <motion.h3
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-xl font-semibold mb-2"
            >
              {project.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 mb-4"
            >
              {project.description}
            </motion.p>
            <div className="flex flex-wrap gap-2 mb-4 cursor-pointer">
              {project.technologies.map((tech) => (
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 bg-primary/10 "
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 mt-2"
            >
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                <FaGithub className="w-5 h-5" />
                <span>Code</span>
              </Link>
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                <FaExternalLinkAlt className="w-5 h-5" /> <span>Live Demo</span>
              </Link>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
