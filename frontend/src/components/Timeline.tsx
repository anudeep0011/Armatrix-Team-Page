"use client";

import { motion } from "framer-motion";

interface TimelineItem {
    year: string;
    description: string;
}

const milestones: TimelineItem[] = [
    { year: "2023", description: "Technical validation and initial ideation for the complex machinery inspection system." },
    { year: "2024", description: "Company incorporation and assembly of core engineering team." },
    { year: "2024", description: "First successful prototype of the hyper-redundant robotic manipulator." },
    { year: "2025", description: "Pre-seed funding round completed to accelerate R&D." },
    { year: "2026", description: "Deployment of primary units in actual industrial environments." },
];

export default function Timeline() {
    return (
        <div className="relative pl-8 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-[31px] md:left-1/2 md:-ml-px top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-16">
                {milestones.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Center Node */}
                        <div className="absolute left-[29px] md:left-1/2 md:-translate-x-1/2 w-[7px] h-[7px] rounded-full bg-armatrix-accent z-10 outline outline-4 outline-[#050505]" />

                        {/* Content Container */}
                        <div className="w-full md:w-1/2 pl-12 md:pl-0">
                            <div className={`${index % 2 === 0 ? "md:pl-16 md:text-left text-left" : "md:pr-16 md:text-right text-left"}`}>
                                <span className="text-xl md:text-3xl font-light tracking-tight text-white/50 mb-2 block font-mono">
                                    {item.year}
                                </span>
                                <p className="text-lg text-white leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        {/* Empty space for the other half */}
                        <div className="hidden md:block w-1/2" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
