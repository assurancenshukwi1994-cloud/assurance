import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Larry Cleaning Service | Jos",
  description: "World-class professional cleaning in Jos, Plateau State.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans bg-white text-gray-900">
        
        {/* --- MOBILE & DESKTOP NAV BAR --- */}
        <nav className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
            
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-[#1f7a1f] rounded-full flex items-center justify-center border-2 border-white shadow-md group-hover:rotate-12 transition-transform">
                <span className="text-white font-bold italic text-xl">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-tighter leading-none">LARRY</span>
                <span className="text-[10px] font-bold text-[#c9a227] uppercase tracking-[0.2em]">Cleaning</span>
              </div>
            </Link>

            {/* Navigation Links - Hidden on very small screens, shown on tablets up */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-xs font-black hover:text-[#1f7a1f] uppercase tracking-widest transition">Home</Link>
              <Link href="/about" className="text-xs font-black hover:text-[#1f7a1f] uppercase tracking-widest transition">About</Link>
              <Link href="/services" className="text-xs font-black hover:text-[#1f7a1f] uppercase tracking-widest transition">Services</Link>
            </div>

            {/* Action Button */}
            <Link href="/booking" className="bg-[#1f7a1f] text-white px-6 py-3 rounded-full text-[10px] font-black hover:bg-black transition-all shadow-lg uppercase tracking-widest active:scale-95">
              Book Now
            </Link>
          </div>
        </nav>

        {/* Content with padding-top so the nav doesn't cover it */}
        <div className="min-h-screen pt-20">
          {children}
        </div>

        {/* Global Footer */}
        <footer className="bg-gray-950 text-white py-12 px-6 text-center border-t-4 border-[#c9a227]">
           <p className="text-[#c9a227] font-bold mb-2 tracking-widest uppercase">Larry Cleaning Service</p>
           <p className="text-gray-500 text-xs mb-6">Premium Sanitation for the Plateau.</p>
           <div className="flex justify-center gap-8 text-[10px] text-gray-400 uppercase tracking-[0.3em]">
             <Link href="/about">About</Link>
             <Link href="/services">Services</Link>
             <Link href="/booking">Payment</Link>
           </div>
        </footer>
      </body>
    </html>
  );
}