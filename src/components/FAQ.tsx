"use client";

import { useState } from "react";

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-garamond)] text-3xl font-normal text-gray-900 sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ items */}
        <div className="mt-16 space-y-0 divide-y divide-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                className="flex w-full items-center justify-between text-left group"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </h3>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`mt-3 overflow-hidden transition-all duration-200 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
