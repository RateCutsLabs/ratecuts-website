'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Circle, Target, Zap, Users, Trophy, Globe } from 'lucide-react';

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  icon: any;
  color: string;
  date: string;
}

const roadmapData: RoadmapItem[] = [
  {
    phase: 'Q3 2025',
    title: 'Round 1 – KOL Chaos Push',
    description: 'Top KOLs will shill $RATECUTS.All paid in USDT 💵, no token handouts, no insider bags.  Powell Index goes live',
    status: 'active',
    icon: Zap,
    color: 'text-yellow-400',
    date: 'Q3 2025'
  },
  {
    phase: 'Q4 2025',
    title: 'Round 2 – Community on steroids',
    description: 'TikTok raids, meme floods, Cut Club expansion.',
    status: 'upcoming',
    icon: Users,
    color: 'text-green-400',
    date: 'Q4 2025'
  },
  {
    phase: 'Q1 2026',
    title: 'Round 3 – Enter the meme arena',
    description: 'Gamified battles, Powell Index tools, chaos utility.',
    status: 'upcoming',
    icon: Target,
    color: 'text-pink-400',
    date: 'Q1 2026'
  },
  {
    phase: 'Beyond',
    title: 'Final Boss, Global takeover',
    description: 'Listings, partnerships, cultural dominance.',
    status: 'upcoming',
    icon: Globe,
    color: 'text-purple-400',
    date: 'Beyond'
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 gradient-text">
            WAR MAP
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
            <span className="text-yellow-400 font-bold text-lg animate-pulse">BATTLE PLAN</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            The battle plan for total chaos domination
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 via-green-400 via-pink-400 to-purple-400 h-full opacity-30" />

          {roadmapData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'
              }`}
            >
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-8 md:pt-0 pt-12' : 'md:pl-8 md:pt-0 pt-12'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-black/50 border-2 ${
                    item.status === 'active' 
                      ? 'border-yellow-400' 
                      : item.status === 'completed'
                      ? 'border-green-400'
                      : 'border-gray-600'
                  } rounded-xl p-6 transition-all duration-300`}
                  style={{
                    boxShadow: item.status === 'active' 
                      ? '0 0 30px rgba(234, 179, 8, 0.3)' 
                      : '0 0 20px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full border-2 ${
                      item.status === 'active' ? 'border-yellow-400 bg-yellow-400/20' :
                      item.status === 'completed' ? 'border-green-400 bg-green-400/20' :
                      'border-gray-600 bg-gray-600/20'
                    } flex items-center justify-center`}>
                      <item.icon className={`w-6 h-6 ${
                        item.status === 'active' ? 'text-yellow-400' :
                        item.status === 'completed' ? 'text-green-400' :
                        'text-gray-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${item.color}`}>
                        {item.phase}
                      </h3>
                      <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                        item.status === 'active' ? 'bg-yellow-400/20 text-yellow-400' :
                        item.status === 'completed' ? 'bg-green-400/20 text-green-400' :
                        'bg-gray-600/20 text-gray-400'
                      }`}>
                        {item.status.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="flex md:absolute absolute left-1/2 transform -translate-x-1/2 md:translate-y-0 -translate-y-6 w-6 h-6 rounded-full border-4 border-black z-10">
                <div className={`w-full h-full rounded-full ${
                  item.status === 'active' ? 'bg-yellow-400' :
                  item.status === 'completed' ? 'bg-green-400' :
                  'bg-gray-600'
                }`} />
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}