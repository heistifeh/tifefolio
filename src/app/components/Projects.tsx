"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projects } from "../contents/projects";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const project = projects[current];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 container max-w-6xl mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        {...fadeInUp}
      >
        Featured Projects
      </motion.h2>

      {/* Showcase container */}
      <div className="relative flex flex-col md:flex-row items-center gap-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 w-full items-center"
          >
            {/* Image */}
<div className="relative w-full md:w-1/2 flex justify-center items-center rounded-xl overflow-hidden shadow-lg bg-black/5">
  <Image
    src={project.image}
    alt={project.title}
    width={900}
    height={600}
    className="rounded-xl object-contain"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
  />
</div>


            {/* Details */}
            <div className="w-full md:w-1/2 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {project.title}
                </h3>
                <span className="text-xs uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-secondary">
                  {project.category}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-primary/10 rounded-md text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-6 mt-6">
                {project.githubLink ? (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Code</span>
                  </Link>
                ) : null}
                <Link
                  href={project.demoLink}
                  target="_blank"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                >
                  <FaExternalLinkAlt className="w-5 h-5" /> <span>Live Demo</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 pointer-events-none">
          <button
            onClick={handlePrev}
            className="pointer-events-auto bg-white/80 dark:bg-dark/80 hover:bg-white transition-colors rounded-full p-3 shadow-md"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-auto bg-white/80 dark:bg-dark/80 hover:bg-white transition-colors rounded-full p-3 shadow-md"
          >
            ›
          </button>
        </div>
      </div>

      {/* Project indicator dots */}
      <div className="flex justify-center mt-8 gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === current ? "bg-primary w-6" : "bg-gray-400/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
