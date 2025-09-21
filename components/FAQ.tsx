'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is $RATECUTS?",
    answer: "$RATECUTS is the meme coin born from Powell's eternal fight between cutting rates and holding the line. It is finance turned into a fight club and powered by community memes."
  },
  {
    question: "How do I buy $RATECUTS?",
    answer: "Create a wallet like Phantom or Metamask, add SOL, then swap directly on Raydium.You can also track live charts and liquidity on Dexscreener.No presale, no taxes, no tricks."
  },
  {
    question: "Is $RATECUTS safe?",
    answer: "The launch was fair and the liquidity pool is locked. But remember, $RATECUTS is a meme coin. Do your own research before joining the army."
  },
  {
    question: "What is the Powell Index?",
    answer: "It is the live battle meter that tracks which side is winning, Cut or Rate. Every meme, every trade, and every holder pushes the needle."
  },
  {
    question: "Why is there no team allocation?",
    answer: "Because the fight belongs to the people. $RATECUTS is driven by the community, not insiders."
  },
  {
    question: "What comes next?",
    answer: "The roadmap is simple. Launch, tools, and then global takeover through memes, NFTs, and gaming features."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 gradient-text">
            FAQ
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
            <span className="text-yellow-400 font-bold text-lg animate-pulse">FREQUENTLY ASKED CHAOS</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
          </div>
        </motion.div>

        {/* FAQ Content and Image */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side - FAQ Items */}
          <div className="w-full lg:w-1/2 space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 border-2 border-yellow-400/50 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {item.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-yellow-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-300">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - FAQ Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:items-start mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative max-w-lg"
            >
              <Image 
                src="/faq.webp" 
                alt="FAQ Illustration" 
                width={500}
                height={500}
                className="w-full h-auto object-cover max-h-[500px]"
                loading="lazy"
                quality={75}
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-pink-500/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}