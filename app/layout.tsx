'use client';
import "./globals.css";
import Link from 'next/link';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans bg-white text-gray-900 flex flex-col min-h-screen">
        
        {/* --- UNIVERSAL NAVIGATION BAR --- */}
        <nav className="fixed top-0 w-full z-[100] bg-white border-b border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
            
            {/* BRAND LOGO */}
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-[#1f7a1f] rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <span className="text-white font-black italic text-xl">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tighter leading-none text-[#1f7a1f]">LARRY</span>
                <span className="text-[10px] font-bold text-[#c9a227] uppercase tracking-[0.2em]">Cleaning</span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION (Includes About Us) */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/" className="text-[11px] font-black text-gray-600 hover:text-[#1f7a1f] uppercase tracking-widest transition">Home</Link>
              <Link href="/services" className="text-[11px] font-black text-gray-600 hover:text-[#1f7a1f] uppercase tracking-widest transition">Services</Link>
              <Link href="/janitorial" className="text-[11px] font-black text-gray-600 hover:text-[#1f7a1f] uppercase tracking-widest transition">Janitorial Agency</Link>
              <Link href="/about" className="text-[11px] font-black text-gray-600 hover:text-[#1f7a1f] uppercase tracking-widest transition">About Us</Link>
              <Link href="/booking" className="bg-[#1f7a1f] text-white px-6 py-3 rounded-xl text-[10px] font-black hover:bg-black transition-all shadow-lg uppercase tracking-widest ml-4">
                Book Now
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#1f7a1f] focus:outline-none"
            >
              {isMenuOpen ? (
                <span className="text-2xl font-bold">✕</span>
              ) : (
                <div className="space-y-1.5">
                  <div className="w-6 h-0.5 bg-[#1f7a1f]"></div>
                  <div className="w-6 h-0.5 bg-[#1f7a1f]"></div>
                  <div className="w-4 h-0.5 bg-[#1f7a1f]"></div>
                </div>
              )}
            </button>
          </div>

          {/* MOBILE DROP-DOWN MENU (Includes About Us) */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-b border-gray-100 absolute w-full left-0 shadow-2xl animate-in slide-in-from-top duration-300">
              <div className="flex flex-col p-6 gap-6">
                <Link href="/" onClick={closeMenu} className="text-sm font-black text-gray-900 uppercase tracking-widest border-b border-gray-50 pb-2">Home</Link>
                <Link href="/services" onClick={closeMenu} className="text-sm font-black text-gray-900 uppercase tracking-widest border-b border-gray-50 pb-2">Our Services</Link>
                <Link href="/janitorial" onClick={closeMenu} className="text-sm font-black text-gray-900 uppercase tracking-widest border-b border-gray-50 pb-2">Janitorial Agency</Link>
                <Link href="/about" onClick={closeMenu} className="text-sm font-black text-gray-900 uppercase tracking-widest border-b border-gray-50 pb-2">About Us</Link>
                <Link href="/booking" onClick={closeMenu} className="bg-[#1f7a1f] text-white text-center py-4 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">
                  Book A Session Now
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* MAIN CONTENT */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-950 text-white pt-16 pb-8 border-t-8 border-[#1f7a1f]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-xl font-black text-[#1f7a1f] mb-4 uppercase">Larry Cleaning</h3>
              <p className="text-gray-400 text-xs leading-relaxed uppercase tracking-tighter">Premium Sanitation & Staffing <br/> Jos, Plateau State</p>
            </div>
            <div>
              <h4 className="text-[#c9a227] font-black text-[10px] uppercase tracking-widest mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2 text-xs text-gray-400 uppercase tracking-widest">
                <Link href="/" className="hover:text-white transition">Home</Link>
                <Link href="/services" className="hover:text-white transition">Services</Link>
                <Link href="/janitorial" className="hover:text-white transition">Janitorial Agency</Link>
                <Link href="/about" className="hover:text-white transition font-bold text-white">About Us</Link>
              </div>
            </div>
            <div>
              <h4 className="text-[#c9a227] font-black text-[10px] uppercase tracking-widest mb-4">Support</h4>
              <p className="text-white font-bold text-lg leading-none">0810 041 1907</p>
              <p className="text-gray-500 text-[10px] mt-2 uppercase">Professionalism is our signature.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}