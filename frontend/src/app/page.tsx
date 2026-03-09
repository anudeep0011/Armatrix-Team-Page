"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { getTeamMembers, TeamMember } from "@/lib/api";
import TeamCard from "@/components/TeamCard";

export default function TeamPage() {
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    const { scrollYProgress } = useScroll();

    // Hero Parallax and Opacity transforms
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

    // Robot Frame Swap based on scroll
    const robotFrame1Opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const robotFrame2Opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    useEffect(() => {
        let isMounted = true;
        async function fetchTeam() {
            try {
                const data = await getTeamMembers();
                if (isMounted) {
                    setTeam(data);
                }
            } catch (error) {
                console.error("Failed to load team data", error);
            } finally {
                if (isMounted) setLoading(false);
            }
        }
        fetchTeam();

        return () => { isMounted = false; };
    }, []);

    // Categorize
    const coFounders = team.filter((m) => m.category === "co-founders");
    const foundingEngineers = team.filter((m) => m.category === "founding-engineers");
    const operations = team.filter((m) => m.category === "operations");
    const engineering = team.filter((m) => m.category === "engineering");

    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* Hero Section */}
            <motion.section
                style={{ opacity: heroOpacity, y: heroY }}
                className="relative h-[80vh] w-full flex items-center justify-center p-6 border-b border-white/10"
            >
                <div className="absolute inset-0 z-0">
                    {/* Simulated Robot Frame Sequence */}
                    <motion.div style={{ opacity: robotFrame1Opacity }} className="absolute inset-0">
                        <Image
                            src="/Images/hero-section-images/Screenshot 2026-03-09 192056.png"
                            alt="Robotic Arm Sequence 1"
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                    </motion.div>
                    <motion.div style={{ opacity: robotFrame2Opacity }} className="absolute inset-0">
                        <Image
                            src="/Images/hero-section-images/Screenshot 2026-03-09 192447.png"
                            alt="Robotic Arm Sequence 2"
                            fill
                            className="object-cover opacity-30"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-armatrix-dark to-transparent" />
                </div>

                <motion.div
                    style={{ scale: heroScale }}
                    className="relative z-10 flex flex-col items-center text-center max-w-4xl"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white uppercase mb-6"
                    >
                        The Minds<br />Behind <span className="bg-gradient-to-r from-[#FFF3B0] via-[#FFD166] to-[#FB8500] bg-clip-text text-transparent">Motion</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-white/50 max-w-2xl text-balance font-light"
                    >
                        A collective of robotics engineers, control systems architects, and operators building the future of industrial inspection.
                        <br /><br />
                        <span className="text-white/30 text-sm tracking-wide">Based in Bengaluru, India.</span>
                    </motion.p>
                </motion.div>
            </motion.section>

            <div className="max-w-7xl mx-auto w-full px-6 py-16 md:py-32 flex flex-col gap-24 md:gap-40">

                {loading ? (
                    <div className="h-64 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-armatrix-accent border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : (
                    <>
                        {/* Co-Founders Team Category */}
                        {coFounders.length > 0 && (
                            <section>
                                <div className="mb-16 border-b border-white/10 pb-6 flex items-end justify-between">
                                    <h2 className="text-sm font-mono tracking-widest bg-gradient-to-r from-[#FFF3B0] via-[#FFD166] to-[#FB8500] bg-clip-text text-transparent inline-block">/001 CO-FOUNDERS</h2>
                                    <h3 className="text-3xl font-medium tracking-tighter text-white uppercase hidden md:block">Founding Leadership</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {coFounders.map((member, i) => (
                                        <TeamCard key={member.id} member={member} index={i} sectionType="cofounders" />
                                    ))}
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    className="pt-24 flex justify-center w-full"
                                >
                                    <blockquote className="max-w-4xl text-center flex flex-col items-center">
                                        <div className="mb-8 w-12 h-[1px] bg-gradient-to-r from-transparent via-[#FFD166] to-transparent"></div>
                                        <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/90 italic tracking-wide text-balance">
                                            "We believe robotics should extend human capability in the most complex industrial environments."
                                        </p>
                                        <footer className="mt-8 text-sm font-mono tracking-widest bg-gradient-to-r from-[#FFF3B0] via-[#FFD166] to-[#FB8500] bg-clip-text text-transparent inline-block uppercase">
                                            — Founding Team
                                        </footer>
                                    </blockquote>
                                </motion.div>
                            </section>
                        )}

                        {/* Founding Engineers */}
                        {(foundingEngineers.length > 0 || engineering.length > 0) && (
                            <section>
                                <div className="mb-16 border-b border-white/10 pb-6 flex items-end justify-between">
                                    <h2 className="text-sm font-mono tracking-widest bg-gradient-to-r from-[#FFF3B0] via-[#FFD166] to-[#FB8500] bg-clip-text text-transparent inline-block">/002 ENGINEERING</h2>
                                    <h3 className="text-3xl font-medium tracking-tighter text-white uppercase hidden md:block">Core Systems Engineering</h3>
                                </div>
                                <div className="grid grid-cols-1 gap-4 lg:px-12">
                                    {[...foundingEngineers, ...engineering].map((member, i) => (
                                        <TeamCard key={member.id} member={member} index={i} alternateLayout={true} sectionType="engineering" />
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Operations */}
                        {operations.length > 0 && (
                            <section>
                                <div className="mb-16 border-b border-white/10 pb-6 flex items-end justify-between">
                                    <h2 className="text-sm font-mono tracking-widest bg-gradient-to-r from-[#FFF3B0] via-[#FFD166] to-[#FB8500] bg-clip-text text-transparent inline-block">/003 OPERATIONS</h2>
                                    <h3 className="text-3xl font-medium tracking-tighter text-white uppercase hidden md:block">Operations & Execution</h3>
                                </div>
                                <div className="grid grid-cols-1 gap-4 lg:px-12">
                                    {operations.map((member, i) => (
                                        <TeamCard key={member.id} member={member} index={i} alternateLayout={true} sectionType="operations" />
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Team Principles */}
                        <section className="pt-8">
                            <div className="mb-16 border-b border-white/10 pb-6 flex items-end justify-between">
                                <h2 className="text-sm font-mono tracking-widest bg-gradient-to-r from-[#FFF3B0] via-[#FFD166] to-[#FB8500] bg-clip-text text-transparent inline-block">/004 PRINCIPLES</h2>
                                <h3 className="text-3xl font-medium tracking-tighter text-white uppercase hidden md:block">How We Build</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:px-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                    className="flex flex-col gap-4 border-l border-white/5 pl-6"
                                >
                                    <h4 className="text-xl font-medium text-white tracking-tight">Engineering First</h4>
                                    <p className="text-sm leading-relaxed text-white/50 text-balance">
                                        We design robotics systems that work reliably in real-world environments.
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                    className="flex flex-col gap-4 border-l border-white/5 pl-6"
                                >
                                    <h4 className="text-xl font-medium text-white tracking-tight">Precision at Scale</h4>
                                    <p className="text-sm leading-relaxed text-white/50 text-balance">
                                        From control systems to deployment, accuracy is non-negotiable.
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                    className="flex flex-col gap-4 border-l border-white/5 pl-6"
                                >
                                    <h4 className="text-xl font-medium text-white tracking-tight">Field Driven</h4>
                                    <p className="text-sm leading-relaxed text-white/50 text-balance">
                                        Our robots are built for the environments they operate in.
                                    </p>
                                </motion.div>
                            </div>
                        </section>
                        {/* Minimal CTA Section - Split Layout */}
                        <section className="pt-24 pb-12 w-full">
                            <div className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[400px]">
                                {/* Left Side: Content Square */}
                                <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-full bg-[#111] border border-white/5 rounded-lg flex flex-col items-center justify-center p-8 text-center sm:p-12 relative overflow-hidden group">
                                    {/* Subtle Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <h3 className="text-xl md:text-2xl font-light text-white/80 tracking-tight mb-8 text-balance max-w-sm relative z-10">
                                        Interested in building robotics systems with us?
                                    </h3>
                                    <a
                                        href="https://armatrix.in/careers/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative z-10 inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium tracking-wide text-white transition-all duration-300"
                                    >
                                        <span className="bg-gradient-to-r from-[#FFF3B0] via-[#FFD166] to-[#FB8500] bg-clip-text text-transparent inline-block">View Careers</span>
                                        <span className="transform transition-transform duration-300 group-hover:translate-x-1 text-[#FFD166]">→</span>
                                    </a>
                                </div>

                                {/* Right Side: Image Square */}
                                <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-full relative border border-white/5 rounded-lg overflow-hidden group">
                                    <Image
                                        src="/Images/Screenshot 2026-03-10 022511.png"
                                        alt="Careers at Armatrix"
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </div>

        </div>
    );
}
