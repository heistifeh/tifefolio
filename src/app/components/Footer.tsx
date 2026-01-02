import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              TifeFolio&trade;
            </Link>
            <p>
              &copy; {new Date().getFullYear()} TifeFolio. All rights reserved.
            </p>
          </div>
          <div className="flex  space-x-6 ">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
