"use client";

import Image from "next/image";

interface MarqueeProps {
    investors: string[]; // paths or names
}

export default function Marquee({ investors }: MarqueeProps) {
    // Duplicate for seamless loop
    const displayLogos = [...investors, ...investors];

    return (
        <div className="w-full overflow-hidden bg-[#0A0A0A] py-16 border-y border-white/5 relative flex">
            {/* Left/Right Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

            <div className="animate-marquee gap-24 items-center pl-24">
                {displayLogos.map((investor, idx) => (
                    <div key={`${investor}-${idx}`} className="flex items-center shrink-0">
                        <span className="text-3xl font-bold tracking-tighter text-white/20 uppercase whitespace-nowrap px-4 hover:text-white transition-colors duration-500 cursor-default">
                            {investor}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
