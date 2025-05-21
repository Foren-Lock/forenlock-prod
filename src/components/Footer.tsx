
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-navy-900 dark:bg-navy-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-playfair font-bold mb-2">ForenLock©</h2>
            <p className="text-navy-200 dark:text-navy-300 max-w-md">
              Blockchain-Based Custody Evidence Management System for Healthcare Forensics <br />
              "Transforming Forensics with Blockchain & AI"
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <button
              onClick={scrollToTop}
              className="bg-navy-800 hover:bg-navy-700 dark:bg-navy-800 dark:hover:bg-navy-700 p-3 rounded-full transition-colors mb-4 group"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
            <p className="text-navy-300 text-sm">
              © {new Date().getFullYear()} ForenLock Research Team. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
