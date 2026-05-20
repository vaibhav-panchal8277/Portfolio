"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, GitFork, Activity } from "lucide-react";
import { FaGithub as GithubIcon } from "react-icons/fa";

export default function Github() {
  // Placeholder data for GitHub stats
  const stats = [
    { label: "Total Stars", value: "128", icon: Star, color: "text-yellow-400" },
    { label: "Forks", value: "35", icon: GitFork, color: "text-blue-400" },
    { label: "Contributions (Year)", value: "842", icon: Activity, color: "text-emerald-400" },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6">
            <GithubIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Open Source <span className="text-gray-400">Activity</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
                <stat.icon className={`w-8 h-8 mb-4 ${stat.color}`} />
                <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Graph Mockup */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full overflow-hidden rounded-xl bg-[#0d1117] border border-white/10 p-6 flex flex-col items-center"
        >
          <div className="w-full flex justify-between items-center mb-6">
            <h3 className="text-white font-medium">842 contributions in the last year</h3>
            <span className="text-sm text-gray-500">github.com/Vaibhav-14</span>
          </div>
          
          <div className="flex gap-1 overflow-x-auto w-full pb-4">
            {/* Generate a mock contribution graph */}
            {Array.from({ length: 52 }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1 shrink-0">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  // Deterministic intensity for the mockup to prevent hydration errors
                  const seed = weekIndex * 7 + dayIndex;
                  const intensity = Math.abs(Math.sin(seed * 12345)) * 1.2; // Scale slightly for better distribution
                  let colorClass = "bg-[#161b22]";
                  if (intensity > 0.8) colorClass = "bg-[#39d353]";
                  else if (intensity > 0.6) colorClass = "bg-[#26a641]";
                  else if (intensity > 0.4) colorClass = "bg-[#006d32]";
                  else if (intensity > 0.2) colorClass = "bg-[#0e4429]";

                  return (
                    <div 
                      key={dayIndex} 
                      className={`w-3 h-3 rounded-sm ${colorClass}`}
                      title={`${Math.floor(intensity * 10)} contributions`}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
