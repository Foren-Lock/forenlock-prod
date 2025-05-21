import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/theme-provider";
const Hero = () => {
  const {
    theme
  } = useTheme();
  const parallaxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        // Create parallax effect on scroll
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
        parallaxRef.current.style.opacity = `${1 - scrollY / 700}`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <section id="home" className="min-h-[100vh] pt-20 relative flex items-center overflow-hidden">
      {/* Background with dynamic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-50 to-white dark:from-navy-950 dark:to-navy-900 transition-colors duration-500 ease-in-out"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/5 dark:bg-blue-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/5 dark:bg-teal-300/10 rounded-full filter blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left" ref={parallaxRef}>
            {/* Logo */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <img src={theme === "dark" ? "/bg-uploads/2ca713b7-50da-4fb6-a136-fef41f5753fe.png" : "/bg-uploads/ec511a56-2208-4121-9167-87e2e512a9c4.png"} alt="ForenLock Logo" className="h-28 transition-all duration-300" />
            </div>
            
            <h2 className="text-xl sm:text-2xl font-medium text-navy-700 dark:text-navy-200 font-playfair mb-6 transition-colors duration-300">
              Blockchain-Based Custody Evidence Management System for Healthcare Forensics
            </h2>
            
            <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 transition-colors duration-300">
              ForenLock is a blockchain-based digital evidence management system designed for healthcare forensics. 
              It ensures integrity, secure access, and privacy in managing forensic evidence using advanced 
              cryptographic and privacy-preserving technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#about" className="px-6 py-3 bg-gradient-to-r from-navy-600 to-navy-800 hover:from-navy-700 hover:to-navy-900 text-white dark:from-navy-500 dark:to-navy-700 dark:hover:from-navy-400 dark:hover:to-navy-600 rounded-md transition-all duration-300">
                Learn More
              </a>
              <a href="#team" className="px-6 py-3 border border-navy-300 text-navy-700 dark:text-navy-200 dark:border-navy-600 rounded-md hover:bg-navy-50 dark:hover:bg-navy-800 transition-all duration-300">
                Meet Our Team
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Animated glow effect */}
              <div className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-r from-navy-100 to-blue-100 dark:from-navy-800 dark:to-blue-900 rounded-full absolute blur-3xl opacity-30 animate-pulse transition-colors duration-300"></div>
              
              <img alt="ForenLock Research Concept" src="/bg-uploads/a62a5bc3-30ba-4c34-b08a-1bc436e6f518.png" className="relative z-10 w-full max-w-md rounded-xl shadow-xl dark:shadow-navy-900/50 transition-all duration-300 hover:scale-105 object-fill" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;