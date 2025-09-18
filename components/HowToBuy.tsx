'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Wallet, Coins, Link, ArrowLeftRight } from 'lucide-react';

export default function HowToBuy() {
  const steps = [
    {
      number: "01",
      title: "Create Your Wallet",
      description: "Download and set up a wallet like Phantom or Metamask",
      detail: "This will be your key to the fight",
      icon: <Wallet size={32} className="text-white" />,
      color: "from-red-500 to-red-600",
      glowColor: "rgba(239, 68, 68, 0.5)",
      bgParticles: ["🔥", "⚡", "💥"]
    },
    {
      number: "02", 
      title: "Add Funds",
      description: "Load your wallet with SOL or ETH",
      detail: "So you are ready to swap",
      icon: <Coins size={32} className="text-white" />,
      color: "from-yellow-500 to-yellow-600",
      glowColor: "rgba(234, 179, 8, 0.5)",
      bgParticles: ["⚡", "💎", "🌟"]
    },
    {
      number: "03",
      title: "Connect to Pump.fun",
      description: "Head over to Pump.fun, the fair launch platform",
      detail: "Connect your wallet in one click",
      icon: <Link size={32} className="text-white" />,
      color: "from-green-500 to-blue-500",
      glowColor: "rgba(34, 197, 94, 0.5)",
      bgParticles: ["🚀", "💫", "⭐"]
    },
    {
      number: "04",
      title: "Swap for $RATECUTS",
      description: "Trade instantly and join the community",
      detail: "No taxes, no hidden traps, only pure chaos",
      icon: <ArrowLeftRight size={32} className="text-white" />,
      color: "from-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.5)",
      bgParticles: ["🔥", "💥", "🌟"]
    }
  ];

  return (
    <section id="how-to-buy" className="relative py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16 relative"
        >
          {/* Background chaos effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-5 left-1/4 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            <div className="absolute top-10 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-5 left-1/3 w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></div>
          </div>
          
          <motion.h2 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 relative z-10"
          >
            <span className="inline-block gradient-text">
              HOW TO BUY
            </span>
          </motion.h2>
          
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1 max-w-16 sm:max-w-24 animate-pulse"></div>
            <span className="text-yellow-400 font-bold text-sm sm:text-base animate-pulse">JOIN THE BATTLE</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-16 sm:max-w-24 animate-pulse"></div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Joining the battle is simple. Anyone can step into the arena and claim their side. Follow these steps and you are in.
          </motion.p>
        </motion.div>

        {/* Steps Grid - Similar to HowToPlay section */}
        <div className="relative">
          {/* Arena Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-yellow-900/10 to-blue-900/10 rounded-3xl blur-sm"></div>
          
          <div className="relative bg-black/30 backdrop-blur-sm border-2 border-yellow-400/50 rounded-3xl p-4 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  {/* Step Card - Fixed height for consistency */}
                  <div className="relative overflow-hidden h-full">
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/80 rounded-2xl"></div>
                    <div 
                      className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"
                      style={{ backgroundColor: step.glowColor }}
                    ></div>
                    
                    <div className={`relative bg-gradient-to-br ${step.color} p-1 rounded-2xl h-full`}>
                      <div className="bg-black/90 rounded-xl p-6 text-center relative overflow-hidden h-full flex flex-col">
                        
                        {/* Background particles */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          {step.bgParticles.map((particle, i) => (
                            <div 
                              key={i}
                              className={`absolute text-lg opacity-20`}
                              style={{
                                top: `${20 + i * 25}%`,
                                left: `${10 + i * 30}%`,
                                animationDelay: `${i * 0.5}s`
                              }}
                            >
                              {particle}
                            </div>
                          ))}
                        </div>
                        
                        {/* Step Number Badge */}
                        <div className="absolute -top-2 -right-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center border-4 border-black shadow-2xl`}>
                            <span className="text-black font-black text-sm">
                              {step.number}
                            </span>
                          </div>
                        </div>

                        {/* Icon - Consistent style and color */}
                        <div className="mb-4 relative z-10 flex justify-center">
                          <div className={`p-3 rounded-full bg-gradient-to-br ${step.color}`}>
                            {step.icon}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 mt-auto">
                          <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-300 font-bold leading-relaxed mb-3">
                            {step.description}
                          </p>
                          <div className={`h-1 bg-gradient-to-r ${step.color} mx-auto w-12 rounded-full opacity-60 mb-3`}></div>
                          <p className="text-xs text-gray-400 italic">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Simplified CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12 sm:mt-16"
        >
          <a 
            href="https://pump.fun/coin/JbW2LnWdSmWR2APPcaN5tN5NiDHAzUzX73mtwMRpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            BUY $RATECUTS NOW
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}