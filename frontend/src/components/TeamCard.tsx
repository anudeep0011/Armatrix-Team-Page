"use client";

import { TeamMember } from "@/lib/api";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";

interface TeamCardProps {
    member: TeamMember;
    index: number;
    alternateLayout?: boolean;
    sectionType?: 'cofounders' | 'engineering' | 'operations' | 'default';
}

export default function TeamCard({ member, index, alternateLayout = false, sectionType = 'default' }: TeamCardProps) {
    const isReverse = index % 2 !== 0;

    // The inner card UI is exactly the same shape and size as the founders card.
    // When alternateLayout is true, we hide the bio from inside the card.
    const cardContent = (
        <div className="group relative flex flex-col bg-[#111] p-6 rounded-lg overflow-hidden border border-white/5 hover:border-white/20 transition-colors h-full w-full">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-md bg-[#1a1a1a]">
                {member.photo_url ? (
                    <Image
                        src={member.photo_url}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col justify-end p-4">
                        <div className="w-full h-1/2 bg-white/5 rounded-sm" />
                    </div>
                )}
            </div>

            <div className="flex flex-col flex-1 relative z-10">
                <h3 className="text-xl font-medium tracking-tight text-white mb-1">
                    {member.name}
                </h3>
                <p className="text-sm bg-gradient-to-r from-[#FFF3B0] via-[#FFD166] to-[#FB8500] bg-clip-text text-transparent inline-block mb-4 font-mono uppercase tracking-wider">
                    {member.role}
                </p>

                {/* Only render bio inside the card if we are NOT in alternateLayout mode */}
                {!alternateLayout && member.bio && (
                    <p className="text-sm leading-relaxed text-white/50 mb-6 flex-1 text-balance">
                        {member.bio}
                    </p>
                )}

                {member.linkedin_url && (
                    <a
                        href={member.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-auto inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors self-start hover:scale-110 active:scale-95 duration-300 ${alternateLayout ? 'pt-4' : ''}`}
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={22} className="stroke-[1.5]" />
                    </a>
                )}
            </div>
        </div>
    );

    let cardInitial: any = { opacity: 0, y: 30 };
    let cardWhileInView: any = { opacity: 1, y: 0 };
    let cardTransition: any = { duration: 0.6, delay: index * 0.1, ease: "easeOut" };

    let bioInitial: any = { opacity: 0, y: 30 };
    let bioWhileInView: any = { opacity: 1, y: 0 };
    let bioTransition: any = { duration: 0.6, delay: index * 0.1, ease: "easeOut" };

    if (sectionType === 'engineering') {
        if (index === 0) {
            // Row 1 (Card left, Bio right)
            cardInitial = { opacity: 0, scale: 0.8 };
            cardWhileInView = { opacity: 1, scale: 1 };
            cardTransition = { duration: 0.8, delay: 0, ease: "easeOut" };

            bioInitial = { opacity: 0, x: 50 };
            bioWhileInView = { opacity: 1, x: 0 };
            bioTransition = { duration: 0.8, delay: 0, ease: "easeOut" };
        } else if (index === 1) {
            // Row 2 (Bio left, Card right)
            cardInitial = { opacity: 0, rotate: -5, y: 20 };
            cardWhileInView = { opacity: 1, rotate: 0, y: 0 };
            cardTransition = { duration: 0.8, delay: 0.25, ease: "easeOut" };

            bioInitial = { opacity: 0, x: -50 };
            bioWhileInView = { opacity: 1, x: 0 };
            bioTransition = { duration: 0.8, delay: 0.25, ease: "easeOut" };
        } else if (index === 2) {
            // Row 3 (Card left, Bio right)
            cardInitial = { opacity: 0, y: 50 };
            cardWhileInView = { opacity: 1, y: 0 };
            cardTransition = { duration: 0.8, delay: 0.5, ease: "easeOut" };

            bioInitial = { opacity: 0 };
            bioWhileInView = { opacity: 1 };
            bioTransition = { duration: 0.8, delay: 0.5, ease: "easeOut" };
        }
    } else if (sectionType === 'operations') {
        if (index === 0) {
            // Row 1 (Card left, Bio right)
            cardInitial = { opacity: 0, scale: 0.92 };
            cardWhileInView = { opacity: 1, scale: 1 };
            cardTransition = { duration: 0.8, delay: 0, ease: "easeOut" };

            bioInitial = { opacity: 0, y: 40 };
            bioWhileInView = { opacity: 1, y: 0 };
            bioTransition = { duration: 0.8, delay: 0, ease: "easeOut" };
        } else if (index === 1) {
            // Row 2 (Bio left, Card right)
            cardInitial = { opacity: 0, x: 50 };
            cardWhileInView = { opacity: 1, x: 0 };
            cardTransition = { duration: 0.8, delay: 0.25, ease: "easeOut" };

            bioInitial = { opacity: 0, y: 40 };
            bioWhileInView = { opacity: 1, y: 0 };
            bioTransition = { duration: 0.8, delay: 0.25, ease: "easeOut" };
        }
    }

    if (alternateLayout) {
        return (
            <div
                className={`flex flex-col md:flex-row items-center gap-12 py-10 border-b border-white/5 last:border-0 ${isReverse ? 'md:flex-row-reverse' : ''}`}
            >
                {/* Card Side - Uses fixed max width so it perfectly matches the co-founder grid sizes */}
                <motion.div
                    initial={cardInitial}
                    whileInView={cardWhileInView}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={cardTransition}
                    className={`w-full md:w-1/2 flex justify-center flex-shrink-0 ${isReverse ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className="w-full max-w-[350px]">
                        {cardContent}
                    </div>
                </motion.div>

                {/* Bio Side - Placed outside the card on the alternating side */}
                <motion.div
                    initial={bioInitial}
                    whileInView={bioWhileInView}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={bioTransition}
                    className={`w-full md:w-1/2 flex flex-col justify-center text-center md:text-left ${isReverse ? 'md:pl-0 md:pr-12' : 'md:pl-12 md:pr-0'}`}>
                    {member.bio && (
                        <div className="relative">
                            <div className={`hidden md:block absolute top-0 w-12 h-[1px] bg-armatrix-accent -mt-6 ${isReverse ? 'right-0' : 'left-0'}`}></div>
                            <p className={`text-xl md:text-2xl font-light leading-relaxed text-white/80 max-w-xl text-balance ${isReverse ? 'md:ml-auto md:text-right' : ''}`}>
                                "{member.bio}"
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>
        );
    }

    // Default Vertical Layout (For the Co-Founders)
    let defaultInitialAnim: any = { opacity: 0, y: 30 };
    let defaultWhileInViewAnim: any = { opacity: 1, y: 0 };
    let defaultTransitionAnim: any = { duration: 0.6, delay: index * 0.1, ease: "easeOut" };
    let defaultViewportAnim: any = { once: true, margin: "-50px" };

    if (sectionType === 'cofounders') {
        // Trigger much later (closer to top) so the animation settles when they hit their final layout position (approx 15% from top).
        defaultViewportAnim = { once: true, margin: "0px 0px -40% 0px" };
        defaultTransitionAnim = { duration: 0.8, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] };

        if (index === 0) {
            defaultInitialAnim = { opacity: 0, x: -80 };
            defaultWhileInViewAnim = { opacity: 1, x: 0 };
        } else if (index === 1) {
            defaultInitialAnim = { opacity: 0, scale: 0.85 };
            defaultWhileInViewAnim = { opacity: 1, scale: 1 };
        } else if (index === 2) {
            defaultInitialAnim = { opacity: 0, x: 80 };
            defaultWhileInViewAnim = { opacity: 1, x: 0 };
        }
    }

    return (
        <motion.div
            initial={defaultInitialAnim}
            whileInView={defaultWhileInViewAnim}
            viewport={defaultViewportAnim}
            transition={defaultTransitionAnim}
            className="h-full"
        >
            {cardContent}
        </motion.div>
    );
}
