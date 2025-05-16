"use client";
import React from "react";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        {...fadeInDown}
        className="text-4xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section {...fadeInDown} className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          explicabo optio corporis numquam facere iusto aperiam quo autem
          officiis delectus.
        </p>
      </motion.section>

      {/* skill section */}
      <motion.section {...fadeIn} transition={{ delay: 0.2 }} className="mb-16">
        <motion.h2 {...fadeInUp} className="section-title">
          Skills
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* frontend card */}
          <motion.div
            variants={fadeInUp}
            {...cardHover}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul>
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          {/* backend card */}
          <motion.div
            variants={fadeInUp}
            {...cardHover}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>
          {/* Others card */}
          <motion.div
            variants={fadeInUp}
            {...cardHover}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>Insomnia </li>
              <li>Postman</li>
              <li>MailTrap</li>
              <li>Figma</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* experience section */}
      <motion.section {...fadeIn} transition={{ delay: 0.4 }} className="mb-16">
        <motion.h2 {...fadeInUp} className="section-title">
          Experience
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            {...cardHoverSmall}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">Frontend Engineer</h3>
            <p className="text-primary mb-2">Sabi Programmers | 2024 - 2025</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, voluptatem!
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* education section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }} className="mb-16">
        <motion.h2 {...fadeInUp} className="section-title">
          Education
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            {...cardHoverSmall}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Science and Education in Computer Science
            </h3>
            <p className="text-primary mb-2">
              University of Ilorin | 2018 - 2023
            </p>

            <p className="text-secondary mb-2">
              Graduated with honors, Focused and software engineering, web and
              app development.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
