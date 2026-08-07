"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Trophy, Medal, BadgeCheck } from "lucide-react";

const achievements = [
  {
    title: "Evaluate Generative AI Applications",
    issuer: "Microsoft Learn",
    description: "Covered evaluation frameworks and metrics for Azure, Foundry Tools, and Content Safety.",
    icon: BadgeCheck,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Microsoft Learn Challenge | Ignite Edition",
    issuer: "Microsoft",
    description: "Build Trustworthy AI Solutions on Microsoft Azure.",
    icon: Award,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20"
  },
  {
    title: "SSIP Hackathon 2022",
    issuer: "SSIP Gujarat",
    description: "Developed an automated smart attendance management system; selected among top teams from Gujarat.",
    icon: Trophy,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },
  {
    title: "Dev-o-lution Hackathon",
    issuer: "Hackathon",
    description: "Certificate of Participation for building a competitive solution under a 24-hour constraint.",
    icon: Medal,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Achievements & <span className="text-amber-500">Certifications</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-6 sm:p-8 bg-white/5 border-white/10 backdrop-blur-md h-full hover:bg-white/10 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg} ${item.color} border ${item.border} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-snug">{item.title}</h3>
                    <p className={`text-sm font-semibold mb-3 ${item.color}`}>{item.issuer}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
