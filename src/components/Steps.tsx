"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Upload your data",
    description:
      "Simply drag and drop your CSV or connect your tools. That's it.",
    image: (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Upload zone */}
            <div className="rounded-xl border-2 border-dashed border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-md">
              <div className="flex flex-col items-center">
                <motion.div
                  className="rounded-full bg-blue-50 p-3"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </motion.div>
                <div className="mt-3 text-sm font-medium text-gray-900">Drop files here</div>
                <div className="mt-1 text-xs text-gray-500">CSV, Excel, JSON</div>
              </div>
            </div>
            {/* Floating cursor */}
            <motion.div
              className="absolute -bottom-4 -right-4"
              animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="h-8 w-8 text-gray-800 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87a.5.5 0 00.35-.85L6.35 2.86a.5.5 0 00-.85.35z" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "2",
    title: "Let AI analyze",
    description:
      "Our algorithms cluster and classify automatically. No config needed.",
    image: (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Processing UI */}
          <div className="rounded-xl bg-slate-800 p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-lg bg-slate-700 px-3 py-2">
                <span className="text-sm text-white">for Sales (Roy)</span>
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center gap-1">
                <button className="rounded bg-slate-700 p-1.5">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <button className="rounded bg-slate-700 p-1.5">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Animated progress indicator */}
            <div className="mt-3 flex items-center gap-2">
              <div className="h-1 flex-1 rounded-full bg-slate-700 overflow-hidden">
                <motion.div
                  className="h-1 rounded-full bg-blue-500"
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <motion.span
                className="text-xs text-gray-400 w-8"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ...
              </motion.span>
            </div>
          </div>
          {/* Floating cursor */}
          <motion.div
            className="absolute bottom-16 right-20"
            animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="h-8 w-8 text-gray-800 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87a.5.5 0 00.35-.85L6.35 2.86a.5.5 0 00-.85.35z" />
            </svg>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    number: "3",
    title: "Get insights",
    description:
      "Graphext uses what it learned to generate actionable insights.",
    image: (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          {/* Report card */}
          <motion.div
            className="rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-100 w-full max-w-[200px]"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-semibold text-gray-900">Customer Analysis</div>
              <motion.div
                className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Complete
              </motion.div>
            </div>
            <div className="text-[10px] text-gray-500 mb-2">Key insights</div>
            <div className="space-y-2">
              <motion.div
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span className="text-[10px] text-gray-600">23% tickets about billing</span>
              </motion.div>
              <motion.div
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-purple-500" />
                <span className="text-[10px] text-gray-600">Sentiment improved 12%</span>
              </motion.div>
              <motion.div
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-green-500" />
                <span className="text-[10px] text-gray-600">5 new topics detected</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },
];

export default function Steps() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
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
            Data insights in 3 steps
          </h2>
          <p className="mt-4 text-base text-gray-500">
            The easiest way to explore text data at scale.
          </p>
        </motion.div>

        {/* Steps - horizontal layout */}
        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="relative" variants={stepVariants}>
              {/* Animated arrow connector */}
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute -right-4 top-1/3 hidden md:block z-10"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                >
                  <motion.svg
                    className="h-6 w-6 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>
              )}

              <div className="text-center group">
                {/* Image with hover effect */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.image}
                </motion.div>

                {/* Step number and title */}
                <div className="mt-6">
                  <motion.span
                    className="text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    {step.number}
                  </motion.span>
                  <h3 className="mt-1 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
