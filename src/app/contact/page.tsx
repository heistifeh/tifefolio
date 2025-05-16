"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";
interface formData {
  name: string;
  email: string;
  message: string;
}
const ContactPage = () => {
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };
  return (
    <div className="container max-w-5xl mx-auto py-20">
      <motion.h1
        {...fadeInUp}
        className="text-4xl font-bold mb-20 text-center "
      >
        Contact Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* contact info */}
        <motion.div {...slideInLeft} className="space-y-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. If you have any questions
              or just want to say hi, feel free to reach out!
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4"
            >
              <FaEnvelope className="w-6 h-6  text-primary" />

              <div>
                <h3 className="font-semibold">Email </h3>
                <Link
                  href={"mailto:boluwatifeosineye26@gmail.com"}
                  className="text-secondary hover:text-primary"
                >
                  boluwatifeosineye26@gmail.com
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4"
            >
              <FaPhone className="w-6 h-6  text-primary" />

              <div>
                <h3 className="font-semibold">Phone </h3>
                <Link
                  href={"tel:+2348050668634"}
                  className="text-secondary hover:text-primary"
                >
                  +2348050668634
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4"
            >
              <FaMapMarkerAlt className="w-6 h-6  text-primary" />

              <div>
                <h3 className="font-semibold">Location </h3>
                <p className="text-secondary hover:text-primary">
                  Lagos, Nigeria.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* contact form */}
        <motion.div
          {...slideInRight}
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                onChange={handleChange}
                value={formData.name}
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md border border-gray-300  dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none focus:outline-none"
                required
                placeholder="Enter your name"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                onChange={handleChange}
                value={formData.email}
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border border-gray-300  dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none focus:outline-none"
                required
                placeholder="Enter your email"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                id="message"
                className="w-full px-4 py-2 rounded-md border border-gray-300  dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none focus:outline-none"
                required
                placeholder="Enter your message"
                rows={4}
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="btn btn-primary w-full "
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Change button text based on status */}
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-center"
              >
                Message sent successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-center"
              >
                Error sending message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};
export default ContactPage;
