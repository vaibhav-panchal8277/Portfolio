"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code } from "lucide-react";

const experiences = [
  {
    title: "Junior AI/ML Developer",
    company: "TestGrid Labs Inc.",
    date: "May 2026 - Present",
    description: "Working on AI-driven solutions and contributing to innovative testing technologies and automation.",
    icon: Code,
    type: "work"
  },
  {
    title: "Master's in Computer Software Engineering",
    company: "L.D. College of Engineering",
    date: "2024 - 2026",
    description: "Building a strong foundation in Machine Learning, Artificial Intelligence, Data Science, and Advanced Data Structures.",
    icon: GraduationCap,
    type: "education"
  },
  {
    title: "Trainee Associate Software Developer",
    company: "Techreale PVT.LTD",
    date: "Jan 2024 - Apr 2024",
    description: "Assisted in developing, testing, and debugging software applications. Collaborated to integrate APIs and create responsive interfaces.",
    icon: Briefcase,
    type: "work"
  },
  {
    title: "Bachelor of Engineering (Computer Engineering)",
    company: "GIDC Degree Engineering College",
    date: "2020 - 2024",
    description: "Graduated with 8.11 CGPA. Participated in SSIP Hackathon 2022 and developed a smart e-Hajiri-Master solution.",
    icon: GraduationCap,
    type: "education"
  },
  {
    title: "React Developer Intern",
    company: "INFOLABZ IT SERVICES PVT. LTD",
    date: "Jul 2023 - Aug 2023",
    description: "Gained hands-on experience in building responsive UI and handling state management in React applications.",
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
