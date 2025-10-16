"use client";
import React from "react";
import { blogs } from "../contents/blogs";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";
const Blogs = () => {
  return  null;
  
  // (
  //   <section className="py-20 container max-w-7xl">
  //     <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center mb-8">
  //       Latest Blog Posts
  //     </motion.h2>

  //     <motion.div
  //       variants={staggerContainer}
  //       initial="initial"
  //       animate="animate"
  //       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  //     >
  //       {blogs.map((blog) => (
  //         <motion.article
  //           key={blog.slug}
  //           className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 mb-8"
  //           variants={fadeInUp}
  //           {...cardHoverSmall}
  //         >
  //           <Link href={`/blog/${blog.slug}`}>
  //             <motion.h3
  //               className="text-xl font-semibold mb-2 hover:text-primary"
  //               whileHover={{ x: 5 }}
  //               transition={{ type: "spring", stiffness: 300 }}
  //             >
  //               {blog.title}
  //             </motion.h3>
  //           </Link>
  //           <motion.p
  //             className="text-gray-600 dark:text-gray-300 mb-4"
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             transition={{ delay: 0.2 }}
  //           >
  //             {blog.excerpt}
  //           </motion.p>
  //           <motion.div
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             transition={{ delay: 0.3 }}
  //             className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4"
  //           >
  //             <motion.span
  //               whileHover={{ scale: 1.05 }}
  //               className="flex items-center"
  //             >
  //               <FaCalendarAlt className="mr-2" />
  //               {new Date(blog.date).toLocaleDateString()}
  //             </motion.span>
  //             <span className="flex items-center">
  //               <FaClock className="mr-2" />
  //               {blog.readTime}
  //             </span>
  //           </motion.div>
  //         </motion.article>
  //       ))}
  //     </motion.div>

  //     {/* button */}

  //     <motion.div
  //       initial={{ opacity: 0, y: 20 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ delay: 0.4 }}
  //       className="text-center mt-12"
  //     >
  //       <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  //         <Link
  //           href="/blogs"
  //           className="inline-block bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors px-6"
  //         >
  //           View All Blogs
  //         </Link>
  //       </motion.div>
  //     </motion.div>
  //   </section>
  // );
};

export default Blogs;
