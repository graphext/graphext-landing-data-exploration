"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const stats = [
  {
    number: 50,
    suffix: "+",
    label: "Languages",
    description: "We support over 50 different languages, including English, Spanish, French, and more.",
  },
  {
    number: 2.3,
    suffix: "s",
    label: "Analysis time",
    description: "We have the fastest text analysis available. Test us against any competitor.",
  },
  {
    number: 99,
    suffix: "%",
    label: "Pattern accuracy",
    description: "Trusted by many teams for reliable insights. Industry-leading accuracy.",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();
      const isDecimal = value % 1 !== 0;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out cubic)
        const eased = 1 - Math.pow(1 - progress, 3);
        
        const currentValue = eased * value;
        setDisplayValue(isDecimal ? parseFloat(currentValue.toFixed(1)) : Math.round(currentValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-5xl font-light text-blue-500 sm:text-6xl">
      {displayValue}
      {suffix}
    </div>
  );
}

export default function Stats() {
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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section className="bg-white py-24" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Real-time indicator */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Real-time analysis
          </span>
        </motion.div>

        {/* Section header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <h2 className="font-[family-name:var(--font-garamond)] text-3xl font-normal text-gray-900 sm:text-4xl md:text-5xl">
            Real-time insights
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl border border-gray-100 bg-white p-8 text-center group cursor-default"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                borderColor: "rgba(59, 130, 246, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none" />
              
              {/* Large animated number */}
              <AnimatedNumber value={stat.number} suffix={stat.suffix} />
              
              {/* Label */}
              <h3 className="mt-2 text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="mt-3 text-sm text-gray-500 leading-relaxed relative">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
