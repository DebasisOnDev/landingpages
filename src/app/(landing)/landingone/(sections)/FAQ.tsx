"use client";

import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useInView, motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Can I customize the design of a Heaven home?",
    answer:
      "Absolutely. Each Heaven home is tailored to reflect your unique vision. From layouts to finishes, we work with you to create a space that perfectly suits your style and needs.",
  },
  {
    question: "Where are Heaven homes located?",
    answer:
      "Our Heaven homes are strategically placed in prime locations across select metropolitan areas, combining accessibility with desirable neighborhoods.",
  },
  {
    question: "What is the process for purchasing a Heaven home?",
    answer:
      "The process involves an initial consultation, design planning, financial approval, and construction phases. Our team guides you through each step to ensure a smooth experience.",
  },
  {
    question: "Do you offer fully custom-built homes?",
    answer:
      "Yes, we offer fully custom-built homes that are designed and constructed to your exact specifications and requirements.",
  },
  {
    question: "How long does it take to complete a home?",
    answer:
      "The timeline varies based on the complexity and size of the project, typically ranging from 8-12 months from groundbreaking to completion.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="max-w-6xl mx-auto flex flex-col gap-6 px-4 my-12">
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(120px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <h2 className="text-3xl md:text-5xl font-[400] text-black tracking-tight">
          Frequently
          <br />
          asked questions.
        </h2>
        <p className="text-muted-foreground mt-4 md:mt-0 md:text-right max-w-[300px]">
          Answers to your questions,
          <br />
          every step of the way.
        </p>
      </motion.div>
      <AnimatePresence>
        {" "}
        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(120px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className=" sm:p-0 p-1 space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                  x: 0,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                },
              }}
              key={index}
              className="border-b border-gray-200 sm:pb-4 pb-2"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex justify-between items-center py-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="sm:text-xl text-lg font-[400] text-black">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="sm:mt-2 mt-1 text-sm sm:text-base text-muted-foreground"
                >
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
