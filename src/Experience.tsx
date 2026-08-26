import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    location?: string;
    period: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: 1,
        role: "Intern - Cybersecurity",
        company: "Pinnacle Labs",
        period: "Dec 2025",
        description: [
            "Attended a 1-month virtual internship gaining hands-on experience in networking, threats, and vulnerabilities.",
            "Worked with practical mini-projects focused on network security analysis."
        ]
    },
    {
        id: 2,
        role: "Intern - UI-UX Design",
        company: "Yangoos Technologies",
        location: "Chennai",
        period: "Nov 2024",
        description: [
            "Designed user interfaces for web and mobile applications.",
            "Created wireframes, prototypes, and user flows.",
            "Collaborated with developers to ensure accurate implementation of UI designs."
        ]
    },
    {
        id: 3,
        role: "Bootcamp On Drone Technology Workshop",
        company: "Saveetha Engineering College With IIT Kurnool",
        location: "Chennai",
        period: "Nov 2024",
        description: [
            "Attended a five day bootcamp organized by IIITDM Kurnool and Saveetha Engineering College.",
            "Learned to design, develop, and operate a drone efficiently."
        ]
    }
];

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-16 bg-black text-white">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
                    Work Experience
                </h2>

                <div className="relative border-l-2 border-blue-500/30 ml-4 md:ml-32 space-y-12">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative pl-8 md:pl-10">
                            {/* Timeline Marker */}
                            <div className="absolute -left-[17px] top-1 bg-black border-2 border-blue-500 rounded-full p-1.5 text-blue-400">
                                <Briefcase size={16} />
                            </div>

                            {/* Card Content */}
                            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 shadow-lg hover:border-blue-500/50 transition-all">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-blue-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-zinc-400 mt-2 md:mt-0">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} /> {exp.period}
                                        </span>
                                        {exp.location && (
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} /> {exp.location}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1.5">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};