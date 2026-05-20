import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-blue-500/30 selection:text-white">
      {/* Dynamic ambient background layer */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[150px] mix-blend-screen"></div>
      </div>
      
      <Navbar />
      
      <div className="relative z-10 flex flex-col gap-12 pb-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
