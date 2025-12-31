"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ScaleOnHover } from "./AnimatedSection";

const useCases = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Customer Support",
    description:
      "Identify recurring issues, track emerging problems, and understand what frustrates your customers.",
    quote:
      "Discovered that 23% of tickets were about a single billing issue.",
    color: "blue",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Social Media & News",
    description:
      "Monitor brand mentions, track campaigns, and understand public perception in real-time.",
    quote:
      "Detected a PR crisis 6 hours before it went viral.",
    color: "purple",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Surveys & Research",
    description:
      "Turn open-ended responses into quantifiable insights. Analyze thousands of responses in minutes.",
    quote:
      "Processed 5,000 NPS comments and found 12 improvement themes.",
    color: "green",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-500",
    quoteBg: "bg-blue-50/50",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-500",
    quoteBg: "bg-purple-50/50",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-500",
    quoteBg: "bg-green-50/50",
  },
};

export default function UseCases() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="use-cases" className="bg-gray-50 py-24" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-[family-name:var(--font-garamond)] text-3xl font-normal text-gray-900 sm:text-4xl md:text-5xl">
            Built for your data challenges
          </h2>
          <p className="mt-4 text-base text-gray-500">
            See how teams use Graphext to unlock insights
          </p>
        </motion.div>

        {/* Use cases grid */}
        <motion.div
          className="mt-16 grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {useCases.map((useCase, index) => {
            const colors = colorClasses[useCase.color as keyof typeof colorClasses];
            
            return (
              <motion.div key={index} variants={itemVariants}>
                <ScaleOnHover scale={1.02}>
                  <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 h-full">
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${colors.quoteBg} to-transparent pointer-events-none rounded-3xl`} />
                    
                    {/* Icon with animation */}
                    <motion.div
                      className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl ${colors.bg} ${colors.text}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {useCase.icon}
                    </motion.div>

                    {/* Content */}
                    <h3 className="relative mt-5 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="relative mt-2 text-sm text-gray-500 leading-relaxed">
                      {useCase.description}
                    </p>

                    {/* Quote */}
                    <motion.div
                      className="relative mt-6 rounded-xl bg-gray-50 p-4 group-hover:bg-blue-50/50 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start gap-2">
                        <motion.svg
                          className={`h-4 w-4 flex-shrink-0 ${colors.text} mt-0.5`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </motion.svg>
                        <p className="text-sm italic text-gray-600">{useCase.quote}</p>
                      </div>
                    </motion.div>
                  </div>
                </ScaleOnHover>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
