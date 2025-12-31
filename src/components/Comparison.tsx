"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

export default function Comparison() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const checkItemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section className="bg-white py-24" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-[family-name:var(--font-garamond)] text-3xl font-normal text-gray-900 sm:text-4xl md:text-5xl">
            No manual tagging.
            <br />
            100% automated.
          </h2>
          <p className="mt-4 text-base text-gray-500">
            How does Graphext compare to traditional tools?
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="mt-16 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
        >
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Traditional Tools */}
            <div className="p-8 md:p-10">
              <motion.h3
                className="text-lg font-semibold text-gray-400"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                Other Analysis Tools
              </motion.h3>
              <motion.div
                className="mt-3 flex items-center gap-2 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span>Manual categorization required</span>
              </motion.div>

              <motion.ul
                className="mt-8 space-y-4"
                variants={listVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {[
                  "Requires predefined categories",
                  "Only finds what you search for",
                  "Days of manual tagging",
                  "Flat lists and tables",
                  "Needs data science expertise",
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                      <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Graphext */}
            <div className="p-8 md:p-10 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
              {/* Subtle animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0"
                animate={isInView ? { opacity: [0, 0.5, 0.3] } : { opacity: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              
              <div className="relative">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <svg className="h-5 w-5 text-blue-500" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                    <circle cx="10" cy="12" r="3" fill="currentColor" />
                    <circle cx="22" cy="12" r="3" fill="currentColor" />
                    <circle cx="16" cy="22" r="3" fill="currentColor" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">Graphext</h3>
                </motion.div>
                <motion.div
                  className="mt-3 flex items-center gap-2 text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center"
                    animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  <span>Automatic insights in seconds</span>
                </motion.div>

                <motion.ul
                  className="mt-8 space-y-4"
                  variants={listVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {[
                    "Discovers categories automatically",
                    "Surfaces unexpected patterns",
                    "Results in minutes",
                    "Visual, interactive exploration",
                    "Built for business teams",
                  ].map((point, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3 group"
                      variants={checkItemVariants}
                    >
                      <motion.div
                        className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
