'use client';

import { motion } from 'framer-motion';

export default function CommunitySection() {
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
            THE CUT CLUB
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
            <span className="text-yellow-400 font-bold text-lg animate-pulse">CHAOS LEGION</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
            Welcome to chaos.
          </h3>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="bg-gradient-to-br from-red-500/10 to-yellow-500/10 border-2 border-yellow-400/30 rounded-xl p-8 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              Our RateCuts X account isn't safe, one day <span className="text-red-400 font-bold">CUT ✂️ hijacks</span>, the next day <span className="text-yellow-400 font-bold">RATE % sneaks back in</span>.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Every takeover drops memes, sparks fights, and keeps the Powell Index twitching.
            </p>
            
            <p className="text-xl md:text-2xl font-bold text-white mb-4">
              The Cut Club isn't a chat. It's a battlefield.
            </p>
            
            <div className="flex justify-center items-center gap-4 text-2xl md:text-3xl font-black">
              <span className="text-red-400">Half cult.</span>
              <span className="text-yellow-400">Half chaos.</span>
              <span className="text-green-400">All degen.</span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* Character Takeover Boxes */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-red-500/10 border-2 border-red-400 rounded-xl p-6 text-center"
            style={{
              boxShadow: '0 0 30px rgba(239, 68, 68, 0.2)'
            }}
          >
            <div className="text-6xl mb-4">✂️</div>
            <h4 className="text-xl font-bold text-red-400 mb-3">CUT TAKEOVER</h4>
            <p className="text-gray-300 text-sm">
              When Cut controls the account: Rate slashing memes, Powell punching content, chaos maximized
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-500/10 border-2 border-yellow-400 rounded-xl p-6 text-center"
            style={{
              boxShadow: '0 0 30px rgba(234, 179, 8, 0.2)'
            }}
          >
            <div className="text-6xl mb-4">⚔️</div>
            <h4 className="text-xl font-bold text-yellow-400 mb-3">BATTLE ZONE</h4>
            <p className="text-gray-300 text-sm">
              The battlefield where Cut and Rate duke it out through memes, raids, and community wars
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-500/10 border-2 border-yellow-400 rounded-xl p-6 text-center"
            style={{
              boxShadow: '0 0 30px rgba(234, 179, 8, 0.2)'
            }}
          >
            <div className="text-6xl mb-4">%🟡</div>
            <h4 className="text-xl font-bold text-yellow-400 mb-3">RATE DEFENSE</h4>
            <p className="text-gray-300 text-sm">
              When Rate takes control: High rate propaganda, Cut blocking tactics, defensive chaos
            </p>
          </motion.div>
        </motion.div>

        {/* Epic Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Epic Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255, 215, 0, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 
                       text-black font-bold text-lg rounded-xl border-2 border-yellow-300
                       shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">🏆 JOIN THE CLUB 🏆</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(220, 38, 127, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 
                       text-white font-bold text-lg rounded-xl border-2 border-pink-400
                       shadow-[0_0_30px_rgba(220,38,127,0.3)] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">⚔️ BATTLE NOW ⚔️</span>
            </motion.button>
          </div>

          {/* Epic Social Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 
                     backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30
                     shadow-[0_0_30px_rgba(147,51,234,0.2)] relative overflow-hidden"
          >
            <div className="relative z-10 text-center space-y-4">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 
                           bg-clip-text text-transparent">
                🌟 CONNECT WITH THE LEGION 🌟
              </h4>
              <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                <motion.div whileHover={{ scale: 1.1, color: "#8B5CF6" }} className="flex items-center gap-2 cursor-pointer transition-colors">
                  <span className="text-2xl">🐦</span><span className="font-medium">Twitter</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, color: "#06B6D4" }} className="flex items-center gap-2 cursor-pointer transition-colors">
                  <span className="text-2xl">💬</span><span className="font-medium">Telegram</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, color: "#7C3AED" }} className="flex items-center gap-2 cursor-pointer transition-colors">
                  <span className="text-2xl">👾</span><span className="font-medium">Discord</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}