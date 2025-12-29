import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Larry Cleaning Service | Jos",
  description: "World-class professional cleaning and janitorial staffing in Jos, Plateau State.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans bg-white text-gray-900 flex flex-col min-h-screen">
        
        {/* --- NAVIGATION BAR --- */}
        <nav className="fixed top-0 w-full z-[100] bg-white border-b border-gray-100 shadow-md">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
            
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-[#1f7a1f] rounded-lg flex items-center justify-center shadow-lg group-hover:bg-black transition-colors">
                <span className="text-white font-black italic text-xl">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tighter leading-none text-[#1f7a1f]">LARRY</span>
                <span className="text-[10px] font-bold text-[#c9a227] uppercase tracking-[0.2em]">Cleaning</span>
              </div>
            </Link>

            {/* Desktop Menu - Captured Janitorial Agency */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-[10px] font-black text-gray-900 hover:text-[#1f7a1f] uppercase tracking-widest transition">Home</Link>
              <Link href="/janitorial" className="text-[10px] font-black text-gray-900 hover:text-[#1f7a1f] uppercase tracking-widest transition">Janitorial Agency</Link>
              <Link href="/booking" className="text-[10px] font-black text-gray-900 hover:text-[#1f7a1f] uppercase tracking-widest transition">Payments</Link>
            </div>

            {/* Mobile/Global Call to Action */}
            <Link href="/booking" className="bg-[#1f7a1f] text-white px-5 py-3 rounded-xl text-[10px] font-black hover:bg-black transition-all shadow-lg uppercase tracking-widest">
              Book Now
            </Link>
          </div>
        </nav>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* --- WORLD-CLASS FOOTER --- */}
        <footer className="bg-gray-950 text-white pt-16 pb-8 border-t-8 border-[#1f7a1f]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Column 1: Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-[#1f7a1f] tracking-tighter">LARRY CLEANING</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                The gold standard of professional sanitation and janitorial staffing in Jos, Plateau State.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-[#c9a227] font-black text-xs uppercase tracking-[0.2em]">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white text-sm transition">Home</Link></li>
                <li><Link href="/janitorial" className="text-gray-400 hover:text-white text-sm transition">Janitorial Agency</Link></li>
                <li><Link href="/booking" className="text-gray-400 hover:text-white text-sm transition">Book a Cleaning</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="space-y-4">
              <h4 className="text-[#c9a227] font-black text-xs uppercase tracking-[0.2em]">Connect</h4>
              <p className="text-gray-400 text-sm italic">Jos, Plateau State, Nigeria</p>
              <p className="text-white font-bold">0810 041 1907</p>
              <div className="pt-2">
                <Link href="/booking" className="text-[10px] font-black bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg uppercase tracking-widest transition">
                  Pay Online →
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-medium">
              © 2025 Larry Professional Services. Excellence in Every Sweep.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}