"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ScaleOnHover } from "./AnimatedSection";

const features = [
  {
    title: "AI that finds patterns for you, automatically",
    description:
      "Graphext uses advanced NLP to cluster similar messages, reviews, or responses. Instantly understand what topics dominate your data.",
    mockup: (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-4">
        {/* Terminal-like UI */}
        <div className="absolute left-4 top-4 flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-blue-500/20 flex items-center justify-center">
              <svg className="h-3.5 w-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-xs text-white/90">Analyzing 12,847 messages...</div>
          </div>
          <div className="rounded-lg bg-white/5 p-3 backdrop-blur">
            <div className="text-[11px] text-gray-400 mb-2">Topics discovered</div>
            <div className="space-y-2">
              {[
                { topic: "Billing Issues", pct: "23%", color: "bg-blue-500" },
                { topic: "Shipping Delays", pct: "18%", color: "bg-blue-400" },
                { topic: "Product Quality", pct: "15%", color: "bg-blue-300" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${item.color}`} />
                  <span className="text-xs text-white/80">{item.topic}</span>
                  <span className="ml-auto text-xs text-white/60">{item.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Instant follow-up reports",
    description:
      "Generate beautiful, shareable reports with key insights extracted automatically from your data.",
    mockup: (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        {/* Report preview */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm font-semibold text-gray-900">Customer Feedback Analysis</div>
            <div className="text-xs text-gray-500">Q4 2024 Report</div>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-blue-500 px-3 py-1 text-[10px] font-medium text-white flex items-center gap-1">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
            <div className="h-8 w-8 rounded-full bg-gray-200" />
            <div className="flex-1">
              <div className="h-2 w-24 rounded bg-gray-200" />
              <div className="mt-1 h-2 w-32 rounded bg-gray-100" />
            </div>
            <div className="flex gap-1">
              <div className="h-4 w-4 rounded bg-gray-100" />
              <div className="h-4 w-4 rounded bg-gray-100" />
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
            <div className="h-8 w-8 rounded-full bg-gray-200" />
            <div className="flex-1">
              <div className="h-2 w-20 rounded bg-gray-200" />
              <div className="mt-1 h-2 w-28 rounded bg-gray-100" />
            </div>
            <div className="flex gap-1">
              <div className="h-4 w-4 rounded bg-gray-100" />
              <div className="h-4 w-4 rounded bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Who is really complaining?",
    description:
      "Learn everything about your data segments before diving in — which topics are driving sentiment, who's affected, and more.",
    mockup: (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-xs font-medium text-gray-600">Graphext &lt;&gt; Support Analysis</div>
          </div>
          <div className="rounded-lg border border-gray-100 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded bg-gray-100 px-2 py-1">
                <span className="text-xs font-medium text-gray-700">Enterprise Users</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="h-3 w-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                US & Europe
              </span>
              <span className="flex items-center gap-1">
                <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                B2B SaaS
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-600">
              High-value customers with billing concerns
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Beautiful visual insights",
    description:
      "Instant shareable visualizations generated by AI. See your data in ways spreadsheets never could.",
    mockup: (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
            <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="text-[10px] text-gray-400 mb-2">Cluster visualization</div>
              <svg className="h-24 w-24 mx-auto" viewBox="0 0 100 100">
                <circle cx="30" cy="35" r="18" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
                <circle cx="70" cy="30" r="14" fill="#E0E7FF" stroke="#6366F1" strokeWidth="1.5" />
                <circle cx="50" cy="70" r="16" fill="#D1FAE5" stroke="#10B981" strokeWidth="1.5" />
                <line x1="42" y1="42" x2="58" y2="58" stroke="#E5E7EB" strokeWidth="1" />
                <line x1="45" y1="32" x2="58" y2="32" stroke="#E5E7EB" strokeWidth="1" />
                <line x1="65" y1="42" x2="55" y2="58" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="30" cy="35" r="5" fill="#3B82F6" />
                <circle cx="70" cy="30" r="4" fill="#6366F1" />
                <circle cx="50" cy="70" r="5" fill="#10B981" />
              </svg>
              <div className="mt-2 text-[10px] text-gray-500">
                Opening and Introductions
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Features() {
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
    <section id="features" className="bg-white py-24" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-[family-name:var(--font-garamond)] text-3xl font-normal text-gray-900 sm:text-4xl md:text-5xl">
            Four ways we transform
            <br />
            your data analysis
          </h2>
        </motion.div>

        {/* Features grid - 2x2 like Cluely */}
        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ScaleOnHover scale={1.02}>
                <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-1 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none rounded-3xl" />
                  
                  {/* Mockup */}
                  <motion.div
                    className="overflow-hidden rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {feature.mockup}
                  </motion.div>

                  {/* Content */}
                  <div className="p-6 relative">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScaleOnHover>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
