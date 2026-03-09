"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full min-h-[calc(100vh-80px)] overflow-hidden">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full flex flex-col items-center justify-center pt-32 pb-16 px-6 text-center"
            >
                <h2 className="text-sm font-mono tracking-widest bg-gradient-to-r from-[#FFF3B0] via-[#FFD166] to-[#FB8500] bg-clip-text text-transparent inline-block mb-6 uppercase">
                    CONTACT
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white uppercase mb-6">
                    Get in touch
                </h1>
                <p className="text-xl md:text-2xl font-light text-white/50 tracking-tight text-balance">
                    Start a conversation
                </p>
            </motion.section>

            {/* Contact Details Section */}
            <section className="max-w-4xl mx-auto w-full px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">

                {/* Email Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="flex flex-col items-start bg-[#111] border border-white/5 rounded-2xl p-10 relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                        <Mail className="text-[#FFD166] w-5 h-5" />
                    </div>
                    <h3 className="text-xs font-mono tracking-widest text-[#FFD166] mb-3 uppercase opacity-70">
                        Email
                    </h3>
                    <a
                        href="mailto:contact@armatrix.in"
                        className="text-xl md:text-2xl font-light text-white hover:text-[#FFD166] transition-colors"
                    >
                        contact@armatrix.in
                    </a>
                </motion.div>

                {/* Office Address Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col items-start bg-[#111] border border-white/5 rounded-2xl p-10 relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                        <MapPin className="text-[#FFD166] w-5 h-5" />
                    </div>
                    <h3 className="text-xs font-mono tracking-widest text-[#FFD166] mb-3 uppercase opacity-70">
                        Our Office
                    </h3>
                    <address className="not-italic text-base text-white/70 leading-relaxed font-light mb-8">
                        4th Floor, 444 Jai Tower<br />
                        Sri Balaji Krupa Layout<br />
                        RK Hegde Nagar<br />
                        Bengaluru - 560077
                    </address>

                    <a
                        href="https://maps.app.goo.gl/8pm3S95Mz9S6cws99"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-medium tracking-wide text-white transition-all duration-300 mt-auto"
                    >
                        <span className="bg-gradient-to-r from-[#FFF3B0] via-[#FFD166] to-[#FB8500] bg-clip-text text-transparent inline-block">View on Map</span>
                        <ArrowRight className="w-4 h-4 text-[#FFD166] transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                </motion.div>

            </section>
        </div>
    );
}
