"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, ArrowRight, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px] pointer-events-none sm:h-[600px] sm:w-[600px] sm:blur-[120px]"></div>
      <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-600/20 blur-[80px] pointer-events-none sm:h-[400px] sm:w-[400px] sm:blur-[100px]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-5 sm:gap-6"
        >
          <Badge variant="glow" className="max-w-full whitespace-normal px-3 py-1 text-xs sm:text-sm leading-relaxed border-blue-500/50 bg-blue-500/10 text-blue-300 backdrop-blur-md flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Junior AI/ML Developer @ TestGrid Labs Inc.
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight break-words">
            Hi, I&apos;m <br />
            <span className="text-gradient">Vaibhav Panchal</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
            AI/ML Enthusiast | Computer Vision | Deep Learning | Automation | Research Enthusiast
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed">
            Building AI-powered tools, intelligent systems, and research-driven products that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            {["Python", "FastAPI", "AI", "Machine Learning", "React", "Research"].map((badge, i) => (
              <motion.div
                key={badge}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  {badge}
                </Badge>
              </motion.div>
            ))}
          </div>

          <div className="flex w-full flex-col gap-3 mt-4 sm:mt-6 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              size="lg"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="w-full bg-white text-black hover:bg-gray-200 group sm:w-auto"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-white/20 hover:bg-white/10 group sm:w-auto"
              onClick={() => window.open("/Vaibhav_Panchal.pdf?v=2", "_blank")}
            >
              <Download className="mr-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Main image container */}
          <div className="relative w-80 h-80 rounded-full border-2 border-white/10 p-2 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 backdrop-blur-3xl animate-float">
            <div className="w-full h-full rounded-full overflow-hidden bg-black/50 border border-white/5 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
              {/* Use an abstract code/tech image instead of hardcoded portrait */}
              <Terminal className="w-32 h-32 text-blue-400 opacity-80" />
            </div>

            {/* Orbiting elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-[-20px] border border-blue-500/20 rounded-full border-dashed pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6] -translate-x-1/2 -translate-y-1/2"></div>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-[-40px] border border-purple-500/20 rounded-full border-dashed pointer-events-none"
            >
              <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7] translate-x-1/2 translate-y-1/2"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <a href="#about" className="flex flex-col items-center gap-2 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}
