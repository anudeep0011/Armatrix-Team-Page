"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image
                        src="/Images/logos/logo_black.png"
                        alt="Armatrix Logo"
                        width={140}
                        height={40}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                    <a href="https://armatrix.in/careers/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors uppercase">CAREERS</a>
                    <a href="https://armatrix.in/blog/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors uppercase">BLOG</a>
                    <Link href="/" className="text-white/70 hover:text-white transition-colors uppercase">COMPANY</Link>
                    <Link href="/contact" className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition-colors ml-4 uppercase">
                        CONTACT
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#050505] border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-6 gap-6 text-sm font-medium tracking-wide">
                            <a href="https://armatrix.in/careers/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors uppercase">CAREERS</a>
                            <a href="https://armatrix.in/blog/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors uppercase">BLOG</a>
                            <Link href="/" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors uppercase">COMPANY</Link>
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-white text-black px-5 py-3 rounded-full hover:bg-gray-200 transition-colors uppercase text-center mt-2">
                                CONTACT
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
