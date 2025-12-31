"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";

const faqs = [
  {
    question: "What types of text data can I analyze?",
    answer:
      "Graphext works with any text data — customer support tickets, reviews, survey responses, social media posts, news articles, emails, chat transcripts, and more. If it's text, we can analyze it.",
  },
  {
    question: "Do I need coding or data science skills?",
    answer:
      "Not at all. Graphext is designed for business users. Upload your data, and our AI handles the analysis. You focus on exploring insights and making decisions.",
  },
  {
    question: "How does Graphext find patterns in my data?",
    answer:
      "We use advanced NLP (Natural Language Processing) and machine learning to cluster similar texts, extract topics, and detect sentiment. The algorithms learn from your specific data — no pre-configured rules needed.",
  },
  {
    question: "What languages are supported?",
    answer:
      "Graphext supports 50+ languages including English, Spanish, French, German, Portuguese, Italian, Dutch, and many more. You can even analyze multilingual datasets.",
  },
  {
    question: "Can I connect Graphext to my existing tools?",
    answer:
      "Yes! We integrate with popular CRMs, helpdesks (Zendesk, Intercom, Freshdesk), survey tools (Typeform, SurveyMonkey), and accept CSV uploads from any source.",
  },
  {
    question: "Can I talk to customer support?",
    answer:
      "Absolutely! Our team is available via chat, email, and scheduled calls. Enterprise customers get dedicated support and onboarding assistance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="faq" className="bg-white py-24" ref={sectionRef}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-[family-name:var(--font-garamond)] text-3xl font-normal text-gray-900 sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
        </motion.div>

        {/* FAQ items */}
        <motion.div
          className="mt-16 space-y-0 divide-y divide-gray-100"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="py-5"
              variants={itemVariants}
            >
              <motion.button
                className="flex w-full items-center justify-between text-left group"
                onClick={() => toggleFAQ(index)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {faq.question}
                </h3>
                <span className="ml-6 flex-shrink-0">
                  <motion.svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </span>
              </motion.button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      className="pt-3 text-sm text-gray-500 leading-relaxed"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
