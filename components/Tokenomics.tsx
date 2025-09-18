'use client';

import { motion } from 'framer-motion';

export default function Tokenomics() {
  const tokenomicsData = [
    { label: 'Supply', value: '1B', color: 'text-yellow-400', bg: 'from-yellow-400/20' },
    { label: 'Launch', value: 'Pump.fun fair', color: 'text-green-400', bg: 'from-green-400/20' },
    { label: 'Treasury', value: '2%', color: 'text-blue-400', bg: 'from-blue-400/20' },
    { label: 'Marketing', value: '1%', color: 'text-purple-400', bg: 'from-purple-400/20' },
    { label: 'Community', value: '1%', color: 'text-red-400', bg: 'from-red-400/20' },
  ];

  const lockingDetails = [
    {
      title: "Treasury (2%)",
      details: "100% locked → 6m cliff, then linear unlock",
      icon: "🔒",
      color: "border-blue-400"
    },
    {
      title: "Community (1%)",
      details: "100% locked → 12m linear unlock", 
      icon: "👥",
      color: "border-red-400"
    },
    {
      title: "Marketing (1%)",
      details: "50% locked (6m linear), 50% flexible for partnerships & growth",
      icon: "📈",
      color: "border-purple-400"
    }
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 gradient-text">
            THE WAR BAG
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
            <span className="text-yellow-400 font-bold text-lg animate-pulse">TOKEN SUPPLY</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300">
            Tokenomics for the battle ahead
          </p>
        </motion.div>

        {/* Token Allocation Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="relative max-w-xs w-full">
            <div className="relative bg-black/20 rounded-xl overflow-hidden border-2 border-yellow-400/50">
              <img 
                src="/token-allocation.png"
                alt="Token Allocation Chart"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Tokenomics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
        >
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${item.bg} to-transparent border-2 border-gray-700 hover:border-${item.color.split('-')[1]}-400 rounded-xl p-6 text-center transition-all duration-300`}
            >
              <div className={`text-3xl font-black ${item.color} mb-2`}>
                {item.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-2xl md:text-3xl font-bold gradient-text">
            96% pure chaos for the people.
          </p>
        </motion.div>

        {/* Locking Plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-black/30 border-2 border-yellow-400 rounded-xl p-8"
        >
          <h3 className="text-3xl font-black text-center mb-4">
            <span className="gradient-text">LOCKING PLAN</span>
          </h3>
          <p className="text-center text-xl text-gray-300 mb-8">
            CUT can slash rates ✂️, but he can't slash these locks.
          </p>
          <p className="text-center text-lg text-yellow-400 mb-8 font-bold">
            Treasury & Community fully locked – no hidden dumps, only chaos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lockingDetails.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`bg-black/50 border-2 ${item.color} rounded-lg p-6 text-center`}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.details}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-green-400 font-bold mb-2">
              Full transparency. Fair launch. Chaos only.
            </p>
            {/* <p className="text-yellow-400 italic text-lg">
              "Thank you for your attention to this matter." – Donald J. Trump
            </p> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}