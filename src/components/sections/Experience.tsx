"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code } from "lucide-react";

const experiences = [
  {
    title: "Junior AI/ML Developer",
    company: "TestGrid Labs Inc.",
    date: "May 2026 - Present",
    description: "Built deep learning inference pipelines for automated UI regression detection. Designed and deployed FastAPI-based model-serving endpoints integrated into CI/CD pipelines for real-time ML inference at scale. Prototyped an LLM-assisted test case generation module using LangChain and Ollama.",
    icon: Code,
    type: "work"
  },
  {
    title: "Master's in Software Engineering",
    company: "L.D. College of Engineering, GTU",
    date: "2024 - 2026",
    description: "CGPA: 8.21/10. Specialized in Machine Learning, AI, and Deep Learning. Research in Computer Vision (YOLOv11 + ECA, +3.8% mAP50, under review) and Cybersecurity (hybrid IDS, 98.4% accuracy).",
    icon: GraduationCap,
    type: "education"
  },
  {
    title: "Trainee Associate Software Developer",
    company: "Techreale Pvt. Ltd.",
    date: "Jan 2024 - Apr 2024",
    description: "Delivered production features for the Famyll healthcare platform (React.js, Node.js, MongoDB) across claim management, auth flows, and real-time communication modules. Reduced API response handling bugs by refactoring async integration patterns across 3 sprint cycles.",
    icon: Briefcase,
    type: "work"
  },
  {
    title: "Bachelor of Engineering (Computer Engineering)",
    company: "GIDC Degree Engineering College, GTU",
    date: "2020 - 2024",
    description: "CGPA: 8.11/10. SSIP Hackathon 2022 — developed an automated smart attendance management system; selected among top teams from Gujarat.",
    icon: GraduationCap,
    type: "education"
  },
  {
    title: "React Developer Intern",
    company: "INFOLABZ IT Services Pvt. Ltd.",
    date: "Jul 2023 - Aug 2023",
    description: "Built and optimized React.js dashboard components with async API integration. Improved rendering performance through targeted component-level refactoring.",
    icon: Code,
    type: "work"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Journey & <span className="text-emerald-500">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical glowing line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 via-teal-500/20 to-transparent -translate-x-1/2"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-emerald-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  <exp.icon className="w-4 h-4 text-emerald-400" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 text-emerald-400 text-xs font-bold tracking-wider mb-3">
                      {exp.date}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-snug">{exp.title}</h3>
                    <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
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
