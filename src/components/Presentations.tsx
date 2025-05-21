
import { Button } from "@/components/ui/button";

const presentations = [
  {
    title: "Proposal Presentation",
    date: "July 2024",
    thumbnail: "./presentation_thumb/PP.png",
    description: "Initial research proposal and project outline presentation.",
    url: "https://drive.google.com/file/d/1R1wFMsO7GA7bGqfXDHTOX1NKos4CGMo8/view?usp=sharing",
  },
  {
    title: "Progress Presentation 1",
    date: "December 2024",
    thumbnail: "./presentation_thumb/PP1.png",
    description: "Completion of 50% of the project.Presentation on initial implementation and research findings.",
    url: "https://drive.google.com/file/d/1PBYxsikw9KwJNaipZshk46-pgQuTFyN3/view?usp=sharing",
  },
  {
    title: "Progress Presentation 2",
    date: "March 2025",
    thumbnail: "./presentation_thumb/PP2.png",
    description: "Completion of 90% of the project.Update on research progress and component integration.",
    url: "https://drive.google.com/file/d/1_a_gytzG7yebkihJpE3Bdg5wJxDL1FN3/view?usp=sharing",
  },
  {
    title: "Final Presentation",
    date: "May 2025",
    thumbnail: "./presentation_thumb/final.png",
    description: "Fully completed.Final defense of the research findings and complete project demonstration.",
    url: "https://drive.google.com/drive/folders/1hcWDjpB0oiLf7JkA3j44SGjAIFAxEytK?usp=sharing",
  },
];

const Presentations = () => {
  return (
    <section id="presentations" className="bg-navy-50 py-20">
      <div className="container-section">
        <h2 className="section-title">Research Presentations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {presentations.map((presentation, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={presentation.thumbnail} 
                  alt={presentation.title}
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-white text-sm font-medium">{presentation.date}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-navy-800 mb-2">{presentation.title}</h3>
                <p className="text-navy-600 text-sm mb-4 line-clamp-2">{presentation.description}</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(presentation.url, "_blank")}
                    disabled={presentation.url === "#"}
                  >
                    View
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(presentation.url, "_blank")}
                    disabled={presentation.url === "#"}
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentations;
