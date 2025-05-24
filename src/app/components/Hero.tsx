"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/utils/animations";
const Hero = () => {
  return (
    <section className="py-28 container mx-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          {...scaleIn}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center mb-4"
        >
          <Image
            src="/profile.jpg"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </motion.div>

        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl dark:text-white mb-6"
        >
          Hi, I&apos;m <span className="text-primary">Boluwatife Osineye</span>
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
        >
          Full Stack Developer | React Native Enthusiast
        </motion.p>
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.9 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <Link
            href={"https://github.com/heistifeh"}
            target="_blank"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/boluwatife-osineye-43b628269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            }
            target="_blank"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaLinkedin />
          </Link>
          <Link
            href={"https://x.com/tifethedev?s=21"}
            target="_blank"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaTwitter />
          </Link>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href={"/projects"}
            className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href={"/contact"}
            className="bg-gray-500 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:text-gray-800 hover:bg-gray-300 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
