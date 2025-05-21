
import { Brain, Lock, FileCheck, Shield } from "lucide-react";

const teamMembers = [
  {
    name: "Shalini Athukorala",
    photo: "/assets/shalini.jpg",
    contribution: "Data acquisition using ML for extracting text from medical images",
    icon: Brain,
  },
  {
    name: "Dilshara Munasinghe",
    photo: "/assets/dilsha.jpg",
    contribution: "Secure access control using FHE and AES",
    icon: Lock,
  },
  {
    name: "Lakshan Sasanka",
    photo: "/assets/lakshan.jpg",
    contribution: "Privacy layer for PII detection and masking",
    icon: FileCheck,
  },
  {
    name: "Dhanuka Lakshan",
    photo: "/assets/dhanuka.jpg",
    contribution: "Authentication module using blockchain and ZKP",
    icon: Shield,
  },
];

const TeamContribution = () => {
  return (
    <section id="team" className="bg-navy-50 py-20">
      <div className="container-section">
        <h2 className="section-title">Research Contributions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center text-navy-700">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">{member.name}</h3>
                <p className="text-navy-600 flex-grow">{member.contribution}</p>
                <div className="mt-4 pt-4 border-t border-navy-100">
                  <a href="#about-us" className="text-navy-600 hover:text-navy-800 text-sm font-medium">
                    More Details →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamContribution;
