import { File, FileText, FileSpreadsheet, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const documents = [
  { 
    title: "Project Charter", 
    icon: File,
    description: "Defines the project scope, objectives, and key stakeholders.",
    url: "https://drive.google.com/drive/folders/1aZ7r31gs7tHwmL0ZHUFfbTGk8_2IWviJ?usp=sharing" 
  },
  { 
    title: "Topic Assessment Form (TAF)",
    icon: FileText,
    description: "Topic Assessment Form documenting the 4 members arround the topic.",
    url: "https://drive.google.com/file/d/1Hev2ak9JZtjWAtNUEiuxwxM4x-1KHsfm/view?usp=sharing"
  },
  { 
    title: "Proposal Report | Individual", 
    icon: FileSpreadsheet,
    description: "Comprehensive individual research proposal report with literature review.",
    url: "https://drive.google.com/drive/folders/1_YX-zyM8-hKQF3NkJQbkirmIm6flUhv5?usp=sharing" 
  },
  { 
    title: "Component Reports | Individual", 
    icon: FileText,
    description: "Individual technical reports on each research component.",
    url: "https://drive.google.com/drive/folders/17wKmkFR27SOrvScKqj9z4Wh1TckSarCq?usp=sharing" 
  },
  { 
    title: "Final Thesis", 
    icon: File,
    description: "Complete documentation of research methodology and findings.",
    url: "https://drive.google.com/file/d/190YhRqPxs3Zr_sCJYvTLd1NXyNIRNRLJ/view?usp=sharing" 
  },
  { 
    title: "Checklists", 
    icon: FileCheck,
    description: "Project milestones and requirements verification documents.",
    url: "https://drive.google.com/drive/folders/1dLqZNc28ejU4ziACEWQ2LuEG8i-THOiw?usp=sharing" 
  },
  { 
    title: "Research Paper", 
    icon: FileText,
    description: "Academic paper submitted for publication (when available).",
    url: "https://drive.google.com/file/d/1_L3pgXDhYfLLfGkoWMXB7SegYriqeoux/view?usp=sharing" 
  },
];

const Documents = () => {
  return (
    <section id="documents" className="bg-white py-20">
      <div className="container-section">
        <h2 className="section-title">Research Documents</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {documents.map((document, index) => {
            const Icon = document.icon;
            const isLast = index === documents.length - 1;
            return (
              <div 
                key={index} 
                className={cn(
                  isLast ? "lg:col-span-3 lg:flex lg:justify-center" : ""
                )}
              >
                <div
                  className={cn(
                    "bg-navy-50 rounded-lg p-6 border border-navy-100 shadow-sm hover:shadow-md transition-shadow",
                    // Keep width same as other cards (1/3 width minus gap on lg)
                    isLast ? "w-full sm:w-auto lg:w-[calc((100%/3)-1.5rem)]" : "w-full"
                  )}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center text-navy-700 mr-3">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-navy-800">{document.title}</h3>
                  </div>
                  <p className="text-navy-600 text-sm mb-4">
                    {document.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2 mt-2"
                    disabled={document.url === "#"}
                    onClick={() => window.open(document.url, "_blank")}
                  >
                    <span>Download</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Documents;
