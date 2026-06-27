"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect, useRef, useState } from "react";
import { sendEmail } from "@/app/actions";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [messageLength, setMessageLength] = useState(0);
  
  const [state, formAction, isPending] = useActionState(sendEmail, {
    success: false,
    message: "",
  });

  // Reset form upon successful email delivery
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setMessageLength(0);
    }
  }, [state.success]);

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Let&apos;s <span className="text-blue-500">Connect</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-lg mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                <a href="mailto:vaibhavpanchal1808@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors break-all">vaibhavpanchal1808@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Phone</h4>
                <a href="tel:+918866231808" className="text-gray-400 hover:text-emerald-400 transition-colors">+91 8866231808</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                <p className="text-gray-400">Bilimora, Gujarat, India</p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-white font-bold mb-4">Social Profiles</h4>
              <div className="flex gap-4">
                <a href="https://github.com/vaibhav-panchal8277" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/vaibhav-panchal-7a2381221/" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form 
              ref={formRef}
              action={formAction}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 backdrop-blur-md flex flex-col gap-5 sm:gap-6"
            >
              {/* Honeypot field to block automated spambots */}
              <input
                type="text"
                name="botCheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    disabled={isPending}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength={100}
                    disabled={isPending}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  maxLength={150}
                  disabled={isPending}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <span className="text-xs text-gray-500">{messageLength} / 2500</span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={2500}
                  rows={5}
                  disabled={isPending}
                  onChange={(e) => setMessageLength(e.target.value.length)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Status Message Display */}
              {state.message && (
                <div
                  className={`p-4 rounded-xl flex items-start gap-3 border ${
                    state.success
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                  }`}
                >
                  {state.success ? (
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm font-medium">{state.message}</p>
                </div>
              )}

              <Button 
                size="lg" 
                variant="glow" 
                type="submit"
                disabled={isPending}
                className="w-full py-6 text-base sm:text-lg font-bold group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "Sending Message..." : "Send Message"}
                <Send className={`w-5 h-5 ml-2 transition-transform ${isPending ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

