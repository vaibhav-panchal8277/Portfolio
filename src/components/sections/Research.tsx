"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  FlaskConical,
  ChevronRight,
  Satellite,
  BrainCircuit,
  Radar,
  Shield,
  Cpu,
  Activity,
} from "lucide-react";

const researchData = [
  {
    tag: "Remote Sensing & CV",
    title: "Channel Attention for Oriented Object Detection in Remote Sensing Images",
    subtitle: "YOLOv11s-OBB + Efficient Channel Attention",
    description: "Improving oriented object detection in remote sensing imagery by integrating Efficient Channel Attention (ECA) into YOLOv11s-OBB. The architecture enhances feature representation for small and densely distributed objects while preserving computational efficiency.",
    metrics: [
      { value: "+3.8%", label: "mAP50 Improvement", color: "text-indigo-400" },
      { value: "+4.3%", label: "Recall Gain", color: "text-purple-400" }
    ],
    highlights: [
      "Integrated Efficient Channel Attention module",
      "Evaluated using DIOR-R dataset",
      "Improved localization of small objects",
      "Reduced false detections in dense scenes",
      "Maintained lightweight model efficiency"
    ],
    flow: {
      inputIcon: Satellite,
      inputLabel: "Remote Sensing Image",
      modelIcon: BrainCircuit,
      modelLabel: "YOLO + ECA",
      modelSub: "Attention Enhanced",
      outputIcon: Radar,
      outputLabel: "Better Detection",
      flow1Color: "#6366f1",
      flow2Color: "#a855f7"
    }
  },
  {
    tag: "Cybersecurity & DL",
    title: "Hybrid Intrusion Detection System using Machine & Deep Learning",
    subtitle: "Dimensionality Reduction + Feature Compression + MultiHead Attention",
    description: "Designed a hybrid Intrusion Detection System to classify network traffic as benign or attack using machine learning and deep learning models. Implemented dimensionality reduction (PCA), feature compression (AutoEncoder), and advanced architectures including CNN, BiLSTM, and MultiHead Attention. Evaluated models using precision, recall, and F1-score for optimized accuracy and low false positives.",
    metrics: [
      { value: "98.4%+", label: "Detection Accuracy", color: "text-emerald-400" },
      { value: "-85%", label: "Training Time Reduction", color: "text-teal-400" }
    ],
    highlights: [
      "Achieved 98.4%+ accuracy with CNN + BiLSTM + MultiHead Attention",
      "Integrated Random Forest and SVM for comparative benchmarking",
      "Applied PCA and AutoEncoder for high-speed feature compression",
      "Optimized F1-score with ultra-low false positive rate",
      "Designed for real-time network anomaly detection"
    ],
    flow: {
      inputIcon: Shield,
      inputLabel: "Network Traffic (PCAP)",
      modelIcon: Cpu,
      modelLabel: "PCA + AutoEncoder",
      modelSub: "CNN + BiLSTM + Attention",
      outputIcon: Activity,
      outputLabel: "Attack Classified",
      flow1Color: "#10b981",
      flow2Color: "#14b8a6"
    }
  }
];

export default function Research() {
  const [activeTab, setActiveTab] = useState(0);
  const current = researchData[activeTab];

  const FlowInputIcon = current.flow.inputIcon;
  const FlowModelIcon = current.flow.modelIcon;
  const FlowOutputIcon = current.flow.outputIcon;

  return (
    <section id="research" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Research & <span className="text-indigo-400">Experiments</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-5" />
        </motion.div>

        {/* Dynamic Tab Switcher */}
        <div className="flex justify-center mb-10 sm:mb-16">
          <div className="flex w-full max-w-xl flex-col bg-black/40 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md sm:w-auto sm:flex-row sm:rounded-full">
            {researchData.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.tag}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center"
          >
            {/* LEFT SIDE - Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm">
                <FlaskConical className="w-4 h-4 animate-pulse" />
                Research
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
                {current.title}
              </h3>

              <p className="text-base sm:text-lg text-indigo-400 font-medium leading-relaxed">
                {current.subtitle}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {current.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {current.metrics.map((metric, i) => (
                  <Card key={i} className="bg-white/5 border-white/10 p-4 backdrop-blur-xl hover:bg-white/10 transition-colors">
                    <h4 className={`text-xl sm:text-2xl font-bold ${metric.color}`}>
                      {metric.value}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {metric.label}
                    </p>
                  </Card>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-4">
                {current.highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={false}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 text-gray-300 text-sm leading-relaxed"
                  >
                    <ChevronRight className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE - Visual Pipeline Diagram */}
            <div className="lg:col-span-7">
              <Card className="p-5 sm:p-8 lg:p-10 bg-black/40 border-indigo-500/20 backdrop-blur-xl overflow-hidden relative group hover:border-indigo-500/40 transition-all duration-500">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-7 md:gap-4">
                  {/* INPUT */}
                  <div className="flex flex-col items-center gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.05)]"
                    >
                      <FlowInputIcon className="w-9 h-9 sm:w-10 sm:h-10 text-indigo-400" />
                    </motion.div>
                    <span className="text-xs text-gray-500 text-center font-mono">
                      {current.flow.inputLabel}
                    </span>
                  </div>

                  {/* Flow Line 1 */}
                  <div className="hidden md:block h-[2px] flex-1 mx-6 bg-gray-800 relative">
                    <motion.div
                      className="absolute h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: current.flow.flow1Color, top: "-4px" }}
                      animate={{ left: ["0%", "100%"] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>

                  {/* MODEL / CORE LOGIC */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-5 sm:p-6 rounded-2xl bg-indigo-900/20 border border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,.15)] text-center max-w-[180px] relative z-20"
                  >
                    <FlowModelIcon className="w-9 h-9 sm:w-10 sm:h-10 text-indigo-400 mx-auto mb-2 animate-pulse" />
                    <h4 className="font-bold text-white text-sm">
                      {current.flow.modelLabel}
                    </h4>
                    <p className="text-[10px] text-indigo-300 uppercase tracking-widest mt-1">
                      {current.flow.modelSub}
                    </p>
                  </motion.div>

                  {/* Flow Line 2 */}
                  <div className="hidden md:block h-[2px] flex-1 mx-6 bg-gray-800 relative">
                    <motion.div
                      className="absolute h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: current.flow.flow2Color, top: "-4px" }}
                      animate={{ left: ["0%", "100%"] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.25
                      }}
                    />
                  </div>

                  {/* OUTPUT */}
                  <div className="flex flex-col items-center gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.05)]"
                    >
                      <FlowOutputIcon className="w-9 h-9 sm:w-10 sm:h-10 text-purple-400" />
                    </motion.div>
                    <span className="text-xs text-gray-500 text-center font-mono">
                      {current.flow.outputLabel}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
