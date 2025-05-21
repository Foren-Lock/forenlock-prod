
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TeamContribution from "@/components/TeamContribution";
import Domain from "@/components/Domain";
import Milestones from "@/components/Milestones";
import Documents from "@/components/Documents";
import Presentations from "@/components/Presentations";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 transition-colors duration-300">
      {/* Dynamic background patterns based on scroll position */}
      <div 
        className="fixed inset-0 bg-pattern opacity-5 dark:opacity-10 pointer-events-none z-0 transition-opacity duration-500"
        style={{ 
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      ></div>

      {/* Floating gradient orbs - subtle background elements */}
      <div className="fixed top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-navy-100/20 to-blue-100/20 dark:from-navy-800/20 dark:to-blue-700/20 blur-3xl pointer-events-none z-0 animate-float-slow"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-teal-100/20 to-navy-100/20 dark:from-teal-800/20 dark:to-navy-700/20 blur-3xl pointer-events-none z-0 animate-float"></div>

      {/* Content */}
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <div className="relative z-20 bg-white dark:bg-navy-950 transition-colors duration-300">
          <About />
          <TeamContribution />
          <Domain />
          <Milestones />
          <Documents />
          <Presentations />
          <AboutUs />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
