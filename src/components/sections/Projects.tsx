"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "ExamForge",
    description: "AI-powered exam question generation platform from syllabus PDFs. Converts raw syllabus text into structured question papers with configurable difficulty.",
    problem: "Educators spend hours manually drafting test questions that align with specific curriculum constraints.",
    tech: ["Python", "Streamlit", "Ollama", "LLMs"],
    github: "https://github.com/Rathi-patel/examforge",
    live: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Cross-browser Testing Tool",
    description: "Cloud-based parallel execution environment to run web application tests across multiple browsers and OS combinations simultaneously.",
    problem: "Local cross-browser testing is slow and prone to environment inconsistencies.",
    tech: ["Docker", "Selenium Grid", "FastAPI", "React"],
    github: "https://github.com/vaibhav-panchal8277/cross-browser-tool",
    live: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "NeighborShare Hub",
    description: "A peer-to-peer neighborhood rental marketplace where users can list, borrow, and lend local items with secure auth, storage, messaging, and payments.",
    problem: "Neighbors often buy rarely used items instead of safely borrowing from trusted people nearby.",
    tech: ["Next.js", "Supabase", "Razorpay", "Tailwind CSS"],
    github: "https://github.com/vaibhav-panchal8277/neighborshare-hub",
    live: "https://neighborshare-hub.vercel.app/",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "MathScribe",
    description: "Web-based math handwriting recognition application that converts drawn equations into LaTeX code using Gemini AI.",
    problem: "Digitizing handwritten complex mathematical formulas into LaTeX is tedious.",
    tech: ["HTML5 Canvas", "Gemini API", "JavaScript", "LaTeX"],
    github: "https://github.com/vaibhav-panchal8277/math-draw-tool",
    live: "#",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-blue-500">Work</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 sm:gap-10 lg:gap-12 items-center group`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative perspective-1000">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 glass-card transition-all duration-500 group-hover:rotate-y-2 group-hover:rotate-x-2 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                  <div className="relative h-56 w-full sm:h-72 lg:h-[350px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col gap-5 sm:gap-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white break-words">{project.title}</h3>
                  {project.problem && (
                    <p className="text-sm sm:text-base text-blue-400 font-medium leading-relaxed">Problem: {project.problem}</p>
                  )}
                </div>

                <div className="p-5 sm:p-6 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-white/5 text-gray-300 border-white/10">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col gap-3 mt-2 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Button variant="glow" className="w-full sm:w-auto" asChild>
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 sm:w-auto" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" /> Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
