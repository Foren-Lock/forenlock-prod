import { cn } from "@/lib/utils";

const milestones = [
  { month: "March 2024", activity: "Brainstorming Workshop" },
  { month: "April 2024", activity: "Registration of Group" },
  { month: "May 2024", activity: "Submission of TAF & Project Charter Development" },
  { month: "July 2024", activity: "Proposal Presentation" },
  { month: "August 2024", activity: "Submission of Proposal Reports" },
  { month: "Sept - Nov 2024", activity: "Individual Component Research & Implementation" },
  { month: "Dec 2024", activity: "Progress Presentation 01" },
  { month: "Jan - Feb 2025", activity: "Research Paper Writing & Documentation" },
  { month: "March 2025", activity: "Paper Submission / Progress Presentation 02" },
  { month: "April 2025", activity: "Draft Final Report" },
  { month: "May 2025", activity: "Paper Acceptance & Final Presentation / Viva" },
  { month: "June 2025", activity: "Submission of Final Thesis Reports" },
];

const Milestones = () => {
  return (
    <section id="milestones" className="bg-navy-50 py-20">
      <div className="container-section">
        <h2 className="section-title">Research Timeline</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Mobile view - Table */}
          <div className="md:hidden overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-navy-700 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Month & Year</th>
                  <th className="py-3 px-4 text-left">Activity</th>
                </tr>
              </thead>
              <tbody>
                {milestones.map((milestone, index) => (
                  <tr
                    key={index}
                    className={cn(
                      index % 2 === 0 ? "bg-navy-50" : "bg-white",
                      "hover:bg-navy-200 transition-colors duration-300 cursor-pointer"
                    )}
                  >
                    <td className="py-3 px-4 font-medium text-navy-800">{milestone.month}</td>
                    <td className="py-3 px-4 text-navy-600">{milestone.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Desktop view - Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-navy-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={cn(
                "relative mb-16 last:mb-0",
                index % 2 === 0 ? "text-right" : "text-left"
              )}>
                <div className={cn(
                  "w-5 h-5 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full z-10",
                  index < 4 ? "bg-navy-900" : index < 8 ? "bg-navy-700" : "bg-navy-500"
                )}></div>
                
                <div className={cn(
                  "flex items-center w-full",
                  index % 2 === 0 ? "justify-end" : "justify-start"
                )}>
                  <div className={cn(
                    "w-[45%] p-5 rounded-lg shadow-md bg-white",
                    index % 2 === 0 ? "mr-8" : "ml-8",
                    "hover:bg-navy-100 transition-colors duration-300 cursor-pointer"
                  )}>
                    <div className="font-semibold text-navy-800">{milestone.month}</div>
                    <div className="text-navy-600 mt-1">{milestone.activity}</div>
                    <div className={cn(
                      "absolute top-0 h-5 w-5",
                      index % 2 === 0 ? "right-[45%] -mr-2.5" : "left-[45%] -ml-2.5",
                      "transform rotate-45 bg-white"
                    )}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
