'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Circle, Zap, Rocket, Crown, Moon, Flame, Star } from 'lucide-react';

const roadmapPhases = [
  {
    phase: 'PHASE 1',
    title: 'RATE GETS REKT',
    description: 'Powell drops the hammer! Rate cuts announced, memes flood the timeline, $RATECUTS launches into absolute chaos! The degen army assembles and we establish our chaotic presence in the meme-verse! 🚀',
    status: 'completed',
    icon: Rocket,
    color: 'yellow',
    bgGradient: 'from-yellow-400/20 to-orange-500/20',
    borderColor: 'border-yellow-400',
  },
  {
    phase: 'PHASE 2',
    title: 'MEMES INVADE WALL STREET',
    description: 'Traditional finance surrenders to meme supremacy! Suits start using our chaos emojis in quarterly reports, CNBC covers our mayhem, and Bloomberg adds a "MEME CHAOS" ticker! 📈',
    status: 'active',
    icon: Crown,
    color: 'red',
    bgGradient: 'from-red-400/20 to-pink-500/20',
    borderColor: 'border-red-400',
  },
  {
    phase: 'PHASE 3',
    title: 'GLOBAL CHAOS DOMINATION',
    description: 'Every central bank bows to our meme power! $RATECUTS becomes the global reserve chaos currency. The Fed starts using our mascots in official presentations. Powell himself joins the telegram! 🌍',
    status: 'upcoming',
    icon: Crown,
    color: 'purple',
    bgGradient: 'from-purple-400/20 to-pink-500/20',
    borderColor: 'border-purple-400',
  },
  {
    phase: 'PHASE 4',
    title: 'MOON BASE ARCADE',
    description: 'We literally establish the first meme token arcade on the moon! Rate and Cut become the official mascots of lunar finance. Powell visits our space casino and declares us "too chaotic to regulate"! 🌙',
    status: 'upcoming',
    icon: Moon,
    color: 'cyan',
    bgGradient: 'from-cyan-400/20 to-blue-500/20',
    borderColor: 'border-cyan-400',
  },
];

export default function Roadmap() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Remove chaotic background since it's now global */}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Star className="h-8 w-8 text-yellow-400 animate-spin" />
            <h2 className="text-4xl md:text-6xl font-black chaos-text press-start animate-neon-flicker">
              CHAOS ROADMAP
            </h2>
            <Star className="h-8 w-8 text-red-400 animate-spin" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed orbitron font-bold">
            🎮 OUR JOURNEY FROM RATE CUTS TO GALACTIC MEME DOMINATION! 🎮<br/>
            <span className="text-yellow-400">EACH PHASE BRINGS MORE CHAOS AND MOON MISSIONS!</span>
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'} md:w-3/4`}
              >
                {/* Connecting Line */}
                {index < roadmapPhases.length - 1 && (
                  <div className="hidden md:block absolute top-32 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-yellow-400 via-red-500 to-pink-500 animate-pulse" />
                )}

                <div className={`neon-card p-8 rounded-3xl group hover:chaos-glow transition-all duration-500 relative overflow-hidden bg-gradient-to-br ${phase.bgGradient} border-4 ${phase.borderColor} ${
                  phase.status === 'active' ? 'animate-chaos-pulse' : ''
                }`}>
                  {/* Chaotic Decorations */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-500 rounded-full animate-ping" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-ping" />

                  {/* Phase Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-6">
                      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center relative ${
                        phase.status === 'completed' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                        phase.status === 'active' ? 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500' :
                        'bg-gradient-to-br from-gray-600 to-gray-700'
                      } group-hover:animate-chaos-bounce transition-transform duration-300`}>
                        {phase.status === 'completed' ? (
                          <CheckCircle className="h-10 w-10 text-white" />
                        ) : phase.status === 'active' ? (
                          <Zap className="h-10 w-10 text-white animate-pulse" />
                        ) : (
                          <Circle className="h-10 w-10 text-white" />
                        )}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-bounce" />
                      </div>
                      <div>
                        <h3 className={`text-sm font-black press-start tracking-wider uppercase mb-2 ${
                          phase.status === 'completed' ? 'text-green-400' :
                          phase.status === 'active' ? 'text-yellow-400' : 'text-gray-400'
                        } animate-neon-flicker`}>
                          {phase.phase}
                        </h3>
                        <h4 className="text-2xl md:text-3xl font-black text-white press-start">
                          {phase.title}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <phase.icon className={`h-12 w-12 ${
                        phase.status === 'completed' ? 'text-green-400' :
                        phase.status === 'active' ? 'text-yellow-400' : 'text-gray-400'
                      } animate-pulse`} />
                      {phase.status === 'active' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg orbitron mb-6">
                    {phase.description}
                  </p>

                  {/* Status Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-black press-start uppercase tracking-wider ${
                      phase.status === 'completed' ? 'bg-green-500/20 text-green-400 border-2 border-green-500/50' :
                      phase.status === 'active' ? 'bg-yellow-500/20 text-yellow-400 border-2 border-yellow-500/50 animate-pulse' :
                      'bg-gray-500/20 text-gray-400 border-2 border-gray-500/50'
                    }`}>
                      {phase.status === 'completed' ? '✅ CHAOS COMPLETE' :
                       phase.status === 'active' ? '🔥 MAYHEM MODE' : '⏳ LOADING CHAOS'}
                    </span>
                    
                    {phase.status === 'active' && (
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <Flame key={i} className="w-5 h-5 text-orange-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}