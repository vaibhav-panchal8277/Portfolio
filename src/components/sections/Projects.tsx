"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Multi-Agent Customer Support System",
    description: "Built a multi-agent customer support platform with a Supervisor Agent that classifies query intent and routes to specialized Billing, Technical Support, and Refund sub-agents implemented as LangGraph state-graph nodes. Preserved context across agent hand-offs via summarized state transfer and persisted conversation memory (Redis + SQLite). Instrumented every agent call, tool call, and hand-off with Langfuse tracing for full observability.",
    problem: "Customer support queries require intelligent routing and context preservation across multiple specialized agents.",
    tech: ["Python", "LangGraph", "LangChain", "FastAPI", "Redis", "Langfuse"],
    github: "#",
    live: "#",
    image: "/multi_agent_support.png"
  },
  {
    title: "Production RAG System with Evaluation",
    description: "Built a RAG pipeline with hybrid retrieval (dense vector similarity + BM25 keyword search) and a citation-enforced grounding prompt to reduce hallucination risk. Includes a first-class evaluation suite using RAGAS metrics Faithfulness, Context Precision, Answer Relevancy benchmarking every change against a held-out Q&A test set. Tracked evaluation results over time with Langfuse to catch quality regressions, surfaced via a live Streamlit metrics dashboard.",
    problem: "RAG systems need rigorous evaluation pipelines to prevent hallucinations and quality regressions in production.",
    tech: ["Python", "LangChain", "ChromaDB/Pinecone", "RAGAS", "Streamlit"],
    github: "#",
    live: "#",
    image: "/rag_system_eval.png"
  },
  {
    title: "Intrusion Detection System — CNN + BiLSTM + Attention",
    description: "Designed a hybrid CNN–BiLSTM–Attention architecture for multi-class network traffic classification; reached 98.4%+ accuracy on NSL-KDD and CICIDS benchmarks, outperforming Random Forest and SVM baselines. Applied PCA and a stacked AutoEncoder for feature compression, reducing input dimensionality by ~60% without accuracy loss. Structured the codebase as a modular pipeline (ingest → preprocess → train → evaluate) for easy retraining on new datasets.",
    problem: "Traditional intrusion detection models lack the accuracy and real-time performance needed for modern network security.",
    tech: ["Python", "TensorFlow/Keras", "Scikit-learn", "PCA", "AutoEncoder"],
    github: "#",
    live: "#",
    image: "/intrusion_detection.png"
  },
  {
    title: "ExamForge — LLM-Powered Exam Question Generator",
    description: "Built an end-to-end RAG pipeline: ingests syllabus PDFs, chunks and embeds content, then prompts an LLM to generate structured question papers with configurable difficulty and Bloom's taxonomy tagging. Supports both local inference (Ollama) and cloud (OpenAI API), making it deployable in air-gapped environments; cut manual question-drafting time by ~80%. Engineered structured JSON output parsing with validation to ensure generated questions conform to a strict schema before rendering to PDF.",
    problem: "Educators spend hours manually drafting test questions that align with specific curriculum and difficulty constraints.",
    tech: ["Python", "LangChain", "Ollama", "OpenAI GPT", "Streamlit"],
    github: "#",
    live: "#",
    image: "/examforge_generator.png"
  },
  {
    title: "Content-Based Movie Recommendation Engine",
    description: "Implemented TF-IDF vectorisation and cosine similarity on the TMDB 5000 dataset; deployed as a real-time Streamlit app with sub-second recommendation latency. Pipeline is architected for extensibility collaborative filtering and hybrid approaches can be plugged in without restructuring the serving layer.",
    problem: "Users need personalized movie recommendations based on content similarity rather than generic popularity lists.",
    tech: ["Python", "Scikit-learn", "TF-IDF", "Cosine Similarity", "Streamlit"],
    github: "#",
    live: "#",
    image: "/movie_recommendation.png"
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
