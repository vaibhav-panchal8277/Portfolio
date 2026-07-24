"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "AI & ML",
    skills: [
      { name: "Computer Vision", level: 90 },
      { name: "NLP & LLMs", level: 90 },
      { name: "RAG Systems", level: 85 },
      { name: "Object Detection", level: 85 },
      { name: "Prompt Engineering", level: 85 },
      { name: "OpenAI API / Ollama", level: 80 },
      { name: "RAGAS / Langfuse", level: 75 },
    ],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow / Keras", level: 90 },
      { name: "Scikit-learn", level: 85 },
      { name: "HuggingFace Transformers", level: 85 },
      { name: "LangChain / LangGraph", level: 85 },
      { name: "XGBoost", level: 75 },
      { name: "FastAPI / Flask", level: 90 },
      { name: "Streamlit", level: 85 },
    ],
    color: "from-orange-500 to-yellow-400"
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Python (Advanced)", level: 95 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 65 },
      { name: "C / C++", level: 55 },
      { name: "Java", level: 60 },
      { name: "HTML / CSS", level: 80 },
    ],
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS (EC2)", level: 70 },
      { name: "Docker", level: 70 },
    ],
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "Databases",
    skills: [
      { name: "Redis", level: 75 },
      { name: "SQLite", level: 80 },
      { name: "ChromaDB", level: 80 },
      { name: "Pinecone (Vector DB)", level: 75 },
    ],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Tools & Practices",
    skills: [
      { name: "Git / Bitbucket", level: 90 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "MLflow", level: 70 },
      { name: "Postman", level: 75 },
      { name: "Selenium Grid", level: 65 },
      { name: "REST API Design", level: 85 },
      { name: "CI/CD", level: 70 },
    ],
    color: "from-purple-500 to-pink-400"
  }

];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-purple-500">Arsenal</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
            >
              <Card className="p-5 sm:p-8 bg-white/5 border-white/10 backdrop-blur-md h-full">
                <h3 className={`text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={false}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                    >
                      <div className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2 sm:gap-3 group cursor-default shadow-lg shadow-black/20 hover:shadow-black/40 hover:-translate-y-0.5">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:scale-125 transition-transform`}></div>
                        <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{skill.name}</span>
                      </div>
                    </motion.div>
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
