"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "./AnimatedSection";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <section id="cta" className="bg-white py-24 overflow-hidden" ref={sectionRef}>
      <motion.div
        className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
        style={{ scale, opacity }}
      >
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-100/30 rounded-full blur-3xl" />
        </motion.div>

        <motion.h2
          className="relative font-[family-name:var(--font-garamond)] text-3xl font-normal text-gray-900 sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Data analysis that helps during exploration, not after.
        </motion.h2>
        
        <motion.p
          className="relative mt-4 text-base text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Try Graphext on your next data project today.
        </motion.p>

        {/* CTA button - Glossy style with enhanced animations */}
        <motion.div
          className="relative mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <MagneticButton>
            <motion.a
              href="https://accounts.graphext.com/users/sign_up"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-base font-medium text-white"
              style={{
                background: 'linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)',
                boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(37, 99, 235, 0.5)'
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 30px -5px rgba(37, 99, 235, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glossy overlay */}
              <span 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, transparent 100%)',
                }}
              />
              
              {/* Shimmer effect on hover */}
              <motion.span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              
              <span className="relative flex items-center gap-2">
                Try Graphext Free
                <motion.svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
            </motion.a>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
