import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 py-10 sm:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
        <div>
          <p className="text-sm sm:text-base text-gray-400 font-medium">
            Designed and Built by <span className="text-white font-bold">Vaibhav Panchal</span>
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/vaibhav-panchal8277" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/vaibhav-panchal-7a2381221/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:vaibhavpanchal1808@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
