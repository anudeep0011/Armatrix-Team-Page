import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Armatrix | Team",
  description: "Meet the team building robots for inspection and maintenance of complex machineries.",
  icons: {
    icon: '/icon.webp'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-armatrix-dark text-armatrix-light antialiased selection:bg-armatrix-accent/30 selection:text-white`}>
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-32 py-16 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/Images/logos/logo_black.png"
                alt="Armatrix Logo"
                width={120}
                height={35}
                className="mb-6 opacity-80"
              />
              <p className="text-white/50 max-w-sm text-sm leading-relaxed">
                Robots for Inspection and Maintenance of Complex Machineries.
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4 text-sm tracking-widest uppercase">Company</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors text-white">Team</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4 text-sm tracking-widest uppercase">Contact</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li>Bengaluru, Karnataka</li>
                <li><a href="mailto:contact@armatrix.in" className="hover:text-white transition-colors">contact@armatrix.in</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 gap-6 md:gap-0">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p>© {new Date().getFullYear()} Armatrix. All rights reserved.</p>
              <p className="hidden md:block text-white/10">|</p>
              <p className="text-white/40 italic">Products under development, currently not for sale.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="hover:text-white transition-colors">Media Kit</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
