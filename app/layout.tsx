import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Larry Cleaning Service | Jos",
  description: "World-class professional cleaning in Jos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans bg-white text-gray-900">
        
        {/* --- RESPONSIVE NAVIGATION --- */}
        <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            
            {/* LOGO: Smaller on mobile, larger on laptop */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#1f7a1f] rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                <span className="text-white font-bold italic text-lg md:text-xl">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-base md:text-lg tracking-tighter leading-none uppercase">Larry</span>
                <span className="text-[8px] md:text-[10px] font-bold text-[#c9a227] uppercase tracking-[0.2em]">Cleaning</span>
              </div>
            </Link>

            {/* DESKTOP & TABLET LINKS (Hidden on small phones) */}
            <div className="hidden sm:flex items-center gap-4 md:gap-8">
              <Link href="/" className="text-[11px] md:text-xs font-bold hover:text-[#1f7a1f] uppercase tracking-widest transition">Home</Link>
              <Link href="/about" className="text-[11px] md:text-xs font-bold hover:text-[#1f7a1f] uppercase tracking-widest transition">About</Link>
              <Link href="/services" className="text-[11px] md:text-xs font-bold hover:text-[#1f7a1f] uppercase tracking-widest transition">Services</Link>
              <Link href="/booking" className="bg-[#1f7a1f] text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-bold hover:bg-[#c9a227] hover:text-black transition-all shadow-md">
                BOOK NOW
              </Link>
            </div>

            {/* MOBILE ONLY BUTTON (Visible only on phones) */}
            <div className="flex sm:hidden">
              <Link href="/booking" className="bg-[#1f7a1f] text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase shadow-md">
                Book
              </Link>
            </div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="min-h-screen">
          {children}
        </div>

        {/* --- RESPONSIVE FOOTER --- */}
        <footer className="bg-gray-950 text-white py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center sm:text-left">
              <p className="text-[#c9a227] font-black tracking-[0.2em] mb-4">LARRY CLEANING</p>
              <p className="text-gray-500 text-sm">Professional sanitation for the entire Jos plateau.</p>
            </div>
            <div className="flex justify-center sm:justify-start gap-8 text-xs font-bold text-gray-400">
               <Link href="/about">ABOUT</Link>
               <Link href="/services">SERVICES</Link>
               <Link href="/booking">BOOKING</Link>
            </div>
            <div className="text-center sm:text-right text-sm text-gray-500">
              <p>📍 Jos, Plateau State</p>
              <p>📞 0810 041 1907</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}