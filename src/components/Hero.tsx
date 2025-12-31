"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, type Variants } from "framer-motion";
import { FloatingElement, MagneticButton } from "./AnimatedSection";

const useCases = [
  {
    text: "Understand",
    highlight: "customer frustrations",
    suffix: "from support tickets",
  },
  {
    text: "Track",
    highlight: "brand sentiment",
    suffix: "across social media",
  },
  {
    text: "Discover",
    highlight: "hidden patterns",
    suffix: "in survey responses",
  },
  {
    text: "Monitor",
    highlight: "trending topics",
    suffix: "from news articles",
  },
  {
    text: "Analyze",
    highlight: "product feedback",
    suffix: "at scale",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true });

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth spring animations for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax transforms
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "15%"]);
  const mockupY = useTransform(smoothProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.95]);

  // Mountain parallax (slower)
  const mountainY = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);
  const mountainOpacity = useTransform(smoothProgress, [0, 0.8], [0.5, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % useCases.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentUseCase = useCases[currentIndex];

  // Stagger animation variants
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden pt-20"
      style={{
        background: `
          radial-gradient(ellipse 120% 80% at 50% 0%, #3C7CCF 0%, #5a9be0 30%, transparent 70%),
          radial-gradient(ellipse 100% 60% at 50% 10%, #7eb8f0 0%, transparent 60%),
          linear-gradient(180deg, #a8d4fa 0%, #d6edfd 40%, #f0f9ff 70%, #ffffff 100%)
        `,
      }}
    >
      {/* Animated background gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 15%, rgba(255,255,255,0.1) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Background decorative elements - Mountains with parallax */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y: mountainY, opacity: mountainOpacity }}
      >
        {/* Left mountain range */}
        <svg
          className="absolute -left-10 bottom-[25%] h-[550px] w-[450px]"
          viewBox="0 0 450 550"
          fill="none"
        >
          <path
            d="M-30 550 L60 180 L120 300 L180 120 L250 250 L320 80 L400 200 L480 550 Z"
            fill="url(#mountain-gradient-left)"
          />
          <defs>
            <linearGradient
              id="mountain-gradient-left"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3C7CCF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#5a9be0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7eb8f0" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Right side subtle glow */}
        <motion.div
          className="absolute -right-20 top-[30%] h-[500px] w-[500px] rounded-full bg-white/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={contentRef}
        className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32"
        style={{ y: contentY, opacity, scale }}
      >
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Main headline */}
          <motion.h1
            className="font-[family-name:var(--font-garamond)]"
            variants={itemVariants}
            style={{
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: "1.025",
              fontWeight: 500,
              color: "#ffffff",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
            }}
          >
            Explore your Messy Complex
            <br />
            Data Visually + AI
          </motion.h1>

          {/* Animated rotating subtitle with highlighted keywords */}
          <motion.div
            className="mx-auto mt-8 max-w-3xl text-center"
            variants={itemVariants}
            style={{
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.95)",
            }}
          >
            <div className="h-[70px] flex items-center justify-center">
              <p
                className={`transition-all duration-500 ease-out ${
                  isAnimating
                    ? "opacity-0 translate-y-3"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <span>{currentUseCase.text} </span>
                <span className="relative inline-block">
                  <span className="font-semibold text-white">
                    {currentUseCase.highlight}
                  </span>
                  {/* Blue underline highlight */}
                  <motion.span
                    className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)",
                      boxShadow: "0 0 12px rgba(59, 130, 246, 0.6)",
                    }}
                    layoutId="underline"
                  />
                </span>
                <span> {currentUseCase.suffix}</span>
              </p>
            </div>
            <motion.p
              className="mt-2 text-base text-white/70"
              variants={itemVariants}
            >
              Bring data from anywhere · Visual insights in minutes
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={itemVariants}
          >
            {/* Outline button */}
            <div className="hidden sm:block">
              <MagneticButton>
                <motion.a
                  href="https://accounts.graphext.com/users/sign_up"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm font-bold text-white transition-all duration-300"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative tracking-wide">START FOR FREE</span>
                </motion.a>
              </MagneticButton>
            </div>

            {/* Glossy primary button */}
            <MagneticButton>
              <motion.a
                href="https://graphext.com/book-a-demo"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)",
                  boxShadow:
                    "0 10px 20px -5px rgba(37, 99, 235, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(37, 99, 235, 0.5)",
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 15px 30px -5px rgba(37, 99, 235, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, transparent 100%)",
                  }}
                />
                <span className="relative tracking-wide">REQUEST A DEMO</span>
              </motion.a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Product Mockup with parallax */}
        <motion.div
          className="relative mx-auto mt-16 max-w-5xl"
          style={{ y: mockupY }}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="relative rounded-2xl bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-900/10"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
              <div className="flex gap-1.5">
                <motion.div
                  className="h-3 w-3 rounded-full bg-red-500"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div
                  className="h-3 w-3 rounded-full bg-yellow-500"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div
                  className="h-3 w-3 rounded-full bg-green-500"
                  whileHover={{ scale: 1.2 }}
                />
              </div>
              <div className="ml-4 flex-1 rounded-md bg-gray-800 px-4 py-1.5 text-xs text-gray-400">
                app.graphext.com/explore
              </div>
            </div>

            {/* Mockup content */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-b-lg bg-gradient-to-br from-slate-50 to-slate-100">
              {/* Simulated dashboard */}
              <div className="absolute inset-0 p-4">
                <div className="grid h-full grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-3 rounded-lg bg-white p-3 shadow-sm">
                    <div className="mb-3 h-4 w-20 rounded bg-gray-200" />
                    <div className="space-y-2">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        >
                          <div className="h-3 w-3 rounded-full bg-blue-400" />
                          <div className="h-3 flex-1 rounded bg-gray-100" />
                        </motion.div>
                      ))}
                    </div>
                    <div className="mb-3 mt-6 h-4 w-16 rounded bg-gray-200" />
                    <div className="space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-3 rounded bg-gray-100" />
                      ))}
                    </div>
                  </div>

                  {/* Main content - Network graph visualization */}
                  <div className="col-span-6 rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="h-4 w-32 rounded bg-gray-200" />
                      <div className="flex gap-2">
                        <div className="h-6 w-16 rounded-full bg-blue-100" />
                        <div className="h-6 w-16 rounded-full bg-gray-100" />
                      </div>
                    </div>
                    {/* Cluster visualization with animated nodes */}
                    <div className="relative h-48">
                      <svg className="h-full w-full" viewBox="0 0 300 200">
                        {/* Connection lines */}
                        <motion.line
                          x1="150"
                          y1="100"
                          x2="80"
                          y2="60"
                          stroke="#E5E7EB"
                          strokeWidth="1"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                        <motion.line
                          x1="150"
                          y1="100"
                          x2="220"
                          y2="50"
                          stroke="#E5E7EB"
                          strokeWidth="1"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.6 }}
                        />
                        <motion.line
                          x1="150"
                          y1="100"
                          x2="60"
                          y2="140"
                          stroke="#E5E7EB"
                          strokeWidth="1"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.7 }}
                        />
                        <motion.line
                          x1="150"
                          y1="100"
                          x2="240"
                          y2="130"
                          stroke="#E5E7EB"
                          strokeWidth="1"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.8 }}
                        />
                        <motion.line
                          x1="150"
                          y1="100"
                          x2="120"
                          y2="170"
                          stroke="#E5E7EB"
                          strokeWidth="1"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.9 }}
                        />
                        <motion.line
                          x1="150"
                          y1="100"
                          x2="200"
                          y2="160"
                          stroke="#E5E7EB"
                          strokeWidth="1"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 1 }}
                        />
                        {/* Animated Nodes */}
                        <motion.circle
                          cx="150"
                          cy="100"
                          r="20"
                          fill="#3B82F6"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.3,
                          }}
                        />
                        <motion.circle
                          cx="80"
                          cy="60"
                          r="14"
                          fill="#8B5CF6"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.4,
                          }}
                        />
                        <motion.circle
                          cx="220"
                          cy="50"
                          r="16"
                          fill="#10B981"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.5,
                          }}
                        />
                        <motion.circle
                          cx="60"
                          cy="140"
                          r="12"
                          fill="#F59E0B"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.6,
                          }}
                        />
                        <motion.circle
                          cx="240"
                          cy="130"
                          r="15"
                          fill="#EF4444"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.7,
                          }}
                        />
                        <motion.circle
                          cx="120"
                          cy="170"
                          r="10"
                          fill="#EC4899"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.8,
                          }}
                        />
                        <motion.circle
                          cx="200"
                          cy="160"
                          r="13"
                          fill="#06B6D4"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.9,
                          }}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Right panel */}
                  <div className="col-span-3 space-y-4">
                    <div className="rounded-lg bg-white p-3 shadow-sm">
                      <div className="mb-2 h-4 w-20 rounded bg-gray-200" />
                      <div className="space-y-1.5">
                        {[
                          "Billing Issues",
                          "Shipping Delay",
                          "Product Quality",
                          "Refund Request",
                        ].map((_, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center justify-between"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + i * 0.1 }}
                          >
                            <div className="h-2.5 w-20 rounded bg-gray-100" />
                            <div className="h-2.5 w-8 rounded bg-blue-200" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-3 shadow-sm">
                      <div className="mb-2 h-4 w-16 rounded bg-gray-200" />
                      <div className="flex items-center gap-2">
                        <div className="h-16 w-16 rounded-full border-4 border-green-400 border-r-red-400" />
                        <div className="space-y-1">
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-green-400" />
                            <div className="h-2.5 w-12 rounded bg-gray-100" />
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-yellow-400" />
                            <div className="h-2.5 w-10 rounded bg-gray-100" />
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-red-400" />
                            <div className="h-2.5 w-8 rounded bg-gray-100" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating elements with enhanced animations */}
          <FloatingElement
            className="absolute -left-4 top-1/4"
            duration={4}
            distance={12}
          >
            <motion.div
              className="rounded-lg bg-white p-3 shadow-lg ring-1 ring-gray-100"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  12 topics found
                </span>
              </div>
            </motion.div>
          </FloatingElement>

          <FloatingElement
            className="absolute -right-4 top-1/3"
            duration={5}
            distance={15}
          >
            <motion.div
              className="rounded-lg bg-white p-3 shadow-lg ring-1 ring-gray-100"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-4 w-4 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  2.3s analysis
                </span>
              </div>
            </motion.div>
          </FloatingElement>
        </motion.div>
      </motion.div>
    </section>
  );
}
