"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "AI / ML",
    skills: [
      { name: "Machine Learning", level: 95 },
      { name: "Deep Learning", level: 90 },
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 90 },
      { name: "Transformers", level: 85 },
      { name: "AI Model Development & Optimization", level: 80 },

    ],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Programming languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 80 },
      { name: "Java", level: 70 },
      { name: "C", level: 50 },
      { name: "C++", level: 30 },
    ],
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", level: 95 },
      { name: "Python", level: 95 },
      { name: "MongoDB", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Flask frameworks", level: 70 },
    ],
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 90 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Postman", level: 70 },
      { name: "Firebase", level: 50 },
    ],
    color: "from-orange-500 to-yellow-400"
  },
  {
    title: "Web Programming",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 50 },
      { name: "React", level: 30 },
    ],
    color: "from-purple-500 to-pink-400"
  }

];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-purple-500">Arsenal</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
            >
              <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-md h-full">
                <h3 className={`text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}>
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px]"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
