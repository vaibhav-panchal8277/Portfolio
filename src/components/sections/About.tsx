"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Brain, Rocket, Database } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Completed", value: "15+" },
  { icon: Brain, label: "Research Papers", value: "2" },
  { icon: Rocket, label: "Years Experience", value: "<1" },
  { icon: Database, label: "Tech Stack", value: "20+" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About <span className="text-blue-500">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl p-5 sm:p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed relative z-10">
                AI/ML Developer at TestGrid Labs Inc. building intelligent test automation pipelines using deep learning and LLMs. M.E. in Software Engineering from L.D. College of Engineering (CGPA 8.21/10). Active research in Computer Vision (YOLOv11 + ECA) and Cybersecurity (hybrid IDS architectures). Hands-on across the full ML lifecycle from data engineering and model training to FastAPI deployment and CI/CD integration.
              </p>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-md p-5 sm:p-6 text-center hover:bg-white/10 transition-colors group">
                  <div className="mx-auto w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
