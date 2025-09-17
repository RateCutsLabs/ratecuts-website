'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, MessageCircle, Twitter, Send, Zap, Flame, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 relative overflow-hidden border-t-4 border-yellow-400/50">
      {/* Remove chaotic background since it's now global */}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Star className="h-8 w-8 text-yellow-400 animate-spin" />
              <h3 className="text-4xl md:text-5xl font-black chaos-text press-start animate-neon-flicker">
                JOIN THE CHAOS
              </h3>
              <Star className="h-8 w-8 text-red-400 animate-spin" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed orbitron font-bold">
              🚀 DON'T MISS THE MEME TOKEN REVOLUTION! 🚀<br/>
              <span className="text-yellow-400">FOLLOW US FOR CHAOS, MEMES, AND MOON MISSIONS!</span>
            </p>
          </motion.div>

          {/* Chaotic Social Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-400 hover:via-cyan-400 hover:to-blue-500 text-black font-black py-6 rounded-2xl shadow-lg chaos-glow transition-all duration-300 press-start group relative overflow-hidden"
            >
              <div className="absolute -top-1 -left-1 w-4 h-4 bg-white rounded-full animate-ping" />
              <Twitter className="mr-3 h-6 w-6 group-hover:animate-bounce transition-transform" />
              X CHAOS
              <Zap className="ml-2 h-4 w-4 animate-pulse" />
            </Button>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-black font-black py-6 rounded-2xl shadow-lg chaos-glow transition-all duration-300 press-start group relative overflow-hidden"
            >
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping" />
              <Send className="mr-3 h-6 w-6 group-hover:animate-bounce transition-transform" />
              TELEGRAM
              <Flame className="ml-2 h-4 w-4 animate-pulse" />
            </Button>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 text-black font-black py-6 rounded-2xl shadow-lg chaos-glow transition-all duration-300 press-start group relative overflow-hidden"
            >
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white rounded-full animate-ping" />
              <ExternalLink className="mr-3 h-6 w-6 group-hover:animate-bounce transition-transform" />
              BUY CHAOS
              <Star className="ml-2 h-4 w-4 animate-spin" />
            </Button>
          </motion.div>
        </div>

        {/* Chaotic Divider */}
        <div className="border-t-2 border-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-12 relative">
          <div className="absolute -top-1 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
          <div className="absolute -top-1 left-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
          <div className="absolute -top-1 left-3/4 w-2 h-2 bg-pink-500 rounded-full animate-ping" />
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          {/* Chaotic Logo */}
          <div className="mb-8">
            <h4 className="text-4xl font-black chaos-text press-start animate-neon-flicker mb-2">
              $RATECUTS
            </h4>
            <p className="text-yellow-400 mt-2 orbitron font-bold">WHEN POWELL CUTS, WE MOON 🚀</p>
          </div>

          {/* Disclaimer - Chaotic Style */}
          <div className="neon-card p-6 rounded-2xl max-w-5xl mx-auto mb-8 relative overflow-hidden">
            <div className="absolute -top-1 -left-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-500 rounded-full animate-ping" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
            
            <h5 className="text-lg font-black text-yellow-400 press-start mb-4 animate-neon-flicker">
              ⚠️ CHAOS DISCLAIMER ⚠️
            </h5>
            <div className="text-sm text-gray-300 leading-relaxed space-y-2 orbitron">
              <p>
                🎮 $RATECUTS is pure meme chaos created for maximum entertainment! 
                This is NOT financial advice - we're just here for the memes and mayhem!
              </p>
              <p>
                🚀 We are NOT affiliated with the Fed, Powell, or any boring central bank. 
                We just think rate cuts are epic and chaos is even more epic!
              </p>
              <p>
                💥 Remember: Past chaos does not guarantee future mayhem! 
                Meme responsibly and never invest more than you can afford to lose in the chaos!
              </p>
            </div>
          </div>

          {/* Copyright - Chaotic */}
          <div className="text-sm text-gray-400 press-start flex items-center justify-center gap-2">
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
            © 2024 $RATECUTS • BUILT WITH 💜 BY CHAOS DEGENS FOR CHAOS DEGENS
            <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}