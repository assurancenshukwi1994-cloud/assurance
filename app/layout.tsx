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
        
        {/* --- FIXED NAVIGATION BAR --- */}
        <nav className="fixed top-0 w-full z-[100] bg-white border-b border-gray-100 shadow-md">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
            
            {/* Logo Area - Now Solid Green */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1f7a1f] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-black italic text-xl">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tighter leading-none text-[#1f7a1f]">LARRY</span>
                <span className="text-[10px] font-bold text-[#c9a227] uppercase tracking-[0.2em]">Cleaning</span>
              </div>
            </Link>

            {/* Desktop Menu - Visible on Laptops */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-xs font-black text-gray-900 hover:text-[#1f7a1f] uppercase tracking-widest transition">Home</Link>
              <Link href="/services" className="text-xs font-black text-gray-900 hover:text-[#1f7a1f] uppercase tracking-widest transition">Services</Link>
              <Link href="/about" className="text-xs font-black text-gray-900 hover:text-[#1f7a1f] uppercase tracking-widest transition">About Us</Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Link href="/booking" className="bg-[#1f7a1f] text-white px-5 py-3 rounded-xl text-[10px] font-black hover:bg-black transition-all shadow-lg uppercase tracking-widest">
                Book Now
              </Link>
            </div>
          </div>
        </nav>

        {/* Content with proper padding for the fixed Nav */}
        <div className="min-h-screen pt-24">
          {children}
        </div>

        <footer className="bg-gray-950 text-white py-12 px-6 text-center">
           <p className="text-[#1f7a1f] font-black mb-2 tracking-widest uppercase text-xl">Larry Cleaning</p>
           <div className="flex justify-center gap-6 text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-4">
             <Link href="/">Home</Link>
             <Link href="/services">Services</Link>
             <Link href="/booking">Book Now</Link>
           </div>
           <p className="text-gray-600 text-[10px] mt-8">© 2025 Larry Cleaning Service Jos. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}