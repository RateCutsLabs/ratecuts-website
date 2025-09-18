'use client';

import { motion } from 'framer-motion';

export default function LoreSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
            <div className="absolute top-10 right-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-0 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 relative z-10 gradient-text">
            ⚡ The Narrative ⚡
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
            <span className="text-yellow-400 font-bold text-lg animate-pulse">BATTLE ORIGINS</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Main Lore Content - Box Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch mb-20">
          {/* Left Side - Narrative Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex"
          >
            {/* All Narrative Content in Rounded Box */}
            <div className="bg-gradient-to-br from-black/80 to-gray-900/80 border-4 border-yellow-400 rounded-xl p-6 shadow-2xl backdrop-blur-sm max-w-md mx-auto flex flex-col justify-center flex-1" style={{
              boxShadow: '0 0 30px rgba(234, 179, 8, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.5)'
            }}>
              {/* Main Story */}
              <div className="text-center space-y-6">
                <p className="text-xl md:text-2xl text-yellow-400 font-bold" style={{
                  textShadow: '0 0 10px rgba(234, 179, 8, 0.8)'
                }}>
                  2025: Rates dominate headlines.
                </p>
                
                <p className="text-lg md:text-xl text-blue-300 font-semibold">
                  Traders sweating. Polymarket degens betting.
                </p>
                
                <p className="text-lg md:text-xl text-gray-300">
                  No meme coin dared to claim it...
                </p>
                
                <p className="text-xl md:text-2xl text-green-400 font-bold">
                  until now.
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
                <div className="mx-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
              </div>

              {/* Epic finale */}
              <div className="text-center">
                <p className="text-lg md:text-xl font-black text-white" style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
                }}>
                  🔥 THE LEGEND BEGINS 🔥
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Lore Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex"
          >
            {/* Main Lore Image Display */}
            <div className="relative w-full rounded-xl overflow-hidden bg-black border-4 border-yellow-400 flex flex-col flex-1">
              {/* Lore Image */}
              <div className="relative">
                <img 
                  src="/lore-image.png"
                  alt="The Narrative Battlefield"
                  className="w-full h-auto object-contain"
                />
                
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none"></div>
                
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 text-yellow-400 text-2xl animate-pulse">⚡</div>
                <div className="absolute top-2 right-2 text-red-400 text-2xl animate-bounce">🔥</div>
                <div className="absolute bottom-2 left-2 text-blue-400 text-2xl animate-ping">💎</div>
                <div className="absolute bottom-2 right-2 text-green-400 text-2xl animate-pulse">⚔️</div>
              </div>

              {/* Image Caption */}
              <div className="flex justify-center py-3 gap-2 bg-black/20">
                <span className="text-yellow-400 font-bold text-sm bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">
                  THE BATTLEFIELD AWAITS
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Fighters Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 relative"
        >
          {/* Epic background effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500/5 via-yellow-500/5 to-blue-500/5 animate-pulse"></div> */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-red-400 rounded-full animate-ping"></div>
            <div className="absolute top-20 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-10 left-20 w-3.5 h-3.5 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-purple-400 rounded-full animate-bounce opacity-30"></div>
          </div>
          
          {/* Epic Title */}
          <div className="text-center mb-20 relative z-10">
            <motion.h3 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-5xl md:text-7xl font-black mb-8 relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 blur-2xl opacity-50 animate-pulse"></div>
              <span className="relative gradient-text">
                ⚔️ THE FIGHTERS ⚔️
              </span>
            </motion.h3>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1 max-w-32 animate-pulse"></div>
              <span className="text-yellow-400 text-xl font-bold animate-pulse">VS</span>
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-32 animate-pulse"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 font-bold">
              🔥 CHOOSE YOUR CHAMPION 🔥
            </p>
          </div>

          {/* Fighter Arena */}
          <div className="relative max-w-7xl mx-auto">
            {/* Battle Arena Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-yellow-900/20 to-blue-900/20 rounded-3xl blur-sm"></div>
            
            <div className="relative bg-black/40 backdrop-blur-sm border-4 border-yellow-400 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                
                {/* CUT Character - Left Fighter */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -15 }}
                  className="relative group cursor-pointer"
                >
                  {/* Fighter Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                  
                  <div className="relative bg-gradient-to-br from-red-500/30 to-red-700/30 border-4 border-red-400 rounded-2xl p-6 text-center backdrop-blur-md group-hover:border-red-300 transition-all duration-300">
                    
                    {/* Character Image */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-red-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                      <img 
                        src="/fight-cut.png"
                        alt="Cut Fighter"
                        className="relative w-32 h-32 md:w-40 md:h-40 mx-auto object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Fighter Name */}
                    <h4 className="text-4xl md:text-5xl font-black text-red-400 mb-4 group-hover:text-red-300 transition-colors">
                      ✂️ CUT
                    </h4>
                    
                    {/* Fighter Stats */}
                    <div className="bg-black/50 rounded-lg p-4 mb-4 border border-red-400/30">
                      <p className="text-red-300 font-bold text-lg mb-2">THE SLASHER</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        💪 Power: Rate Cutting<br/>
                        🎯 Mission: Push Green<br/>
                        ⚡ Special: Slash Attack
                      </p>
                    </div>
                    
                    {/* Battle Cry */}
                    <div className="bg-red-500/20 rounded-lg p-3 border border-red-400/50">
                      <p className="text-red-200 font-bold text-sm italic">
                        "Rates must fall! ✂️💥"
                      </p>
                    </div>
                    
                    {/* Corner Effects */}
                    <div className="absolute top-2 left-2 text-red-400 text-2xl animate-bounce">🔥</div>
                    <div className="absolute top-2 right-2 text-yellow-400 text-xl animate-ping">⚡</div>
                    <div className="absolute bottom-2 left-2 text-red-300 text-lg animate-pulse">💥</div>
                  </div>
                </motion.div>

                {/* VS Separator & Powell Index */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col items-center justify-center relative"
                >
                  {/* Epic VS */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative text-6xl md:text-8xl font-black gradient-text">
                      VS
                    </div>
                  </div>
                  
                  {/* Powell Index Arena */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 border-3 border-yellow-400 rounded-xl p-6 text-center backdrop-blur-sm">
                      <img 
                        src="/Powell-Index.png"
                        alt="Powell Index"
                        className="w-48 h-48 md:w-60 md:h-60 mx-auto object-contain mb-4 drop-shadow-2xl"
                      />
                      <h4 className="text-2xl md:text-3xl font-black text-yellow-400 mb-2">
                        POWELL INDEX
                      </h4>
                      <p className="text-yellow-200 text-sm font-bold">
                        THE ARENA
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* RATE Character - Right Fighter */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
                  whileHover={{ scale: 1.05, y: -15 }}
                  className="relative group cursor-pointer"
                >
                  {/* Fighter Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                  
                  <div className="relative bg-gradient-to-br from-orange-500/30 to-yellow-500/30 border-4 border-orange-400 rounded-2xl p-6 text-center backdrop-blur-md group-hover:border-orange-300 transition-all duration-300">
                    
                    {/* Character Image */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-orange-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                      <img 
                        src="/fight-rate.png"
                        alt="Rate Fighter"
                        className="relative w-32 h-32 md:w-40 md:h-40 mx-auto object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Fighter Name */}
                    <h4 className="text-4xl md:text-5xl font-black text-orange-400 mb-4 group-hover:text-orange-300 transition-colors">
                      % RATE
                    </h4>
                    
                    {/* Fighter Stats */}
                    <div className="bg-black/50 rounded-lg p-4 mb-4 border border-orange-400/30">
                      <p className="text-orange-300 font-bold text-lg mb-2">THE DEFENDER</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        🛡️ Power: Rate Defense<br/>
                        🎯 Mission: Hold Red<br/>
                        🔥 Special: Fire Shield
                      </p>
                    </div>
                    
                    {/* Battle Cry */}
                    <div className="bg-orange-500/20 rounded-lg p-3 border border-orange-400/50">
                      <p className="text-orange-200 font-bold text-sm italic">
                        "High rates forever! 🔥💪"
                      </p>
                    </div>
                    
                    {/* Corner Effects */}
                    <div className="absolute top-2 left-2 text-orange-400 text-2xl animate-pulse">🔥</div>
                    <div className="absolute top-2 right-2 text-yellow-400 text-xl animate-bounce">⚡</div>
                    <div className="absolute bottom-2 right-2 text-orange-300 text-lg animate-ping">💥</div>
                  </div>
                </motion.div>
              </div>
              
              {/* Battle Arena Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center mt-12 pt-8 border-t border-yellow-400/30"
              >
                <p className="text-2xl md:text-3xl font-black text-yellow-400 mb-4">
                  ⚔️ LET THE BATTLE BEGIN! ⚔️
                </p>
                <p className="text-lg text-gray-300">
                  The Powell Index awaits... Who will claim victory?
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}