'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* HERO SECTION: Responsive height and text size */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Watermarked High-Res Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 30, 0, 0.7), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1581578731548-c64695ce6958?q=80&w=2070&auto=format&fit=crop')` 
          }}
        ></div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="inline-block bg-[#c9a227] text-black text-[9px] md:text-[11px] font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.3em] animate-fade-in">
            Premium Service in Jos
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tighter leading-[0.9] uppercase">
            Pure <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-yellow-100">Excellence</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            World-class industrial cleaning for Nigerian homes and offices. We bring the sparkle back to Plateau.
          </p>

          {/* Interactive Buttons: Stack on mobile, side-by-side on desktop */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/booking" className="w-full sm:w-auto bg-[#1f7a1f] hover:bg-green-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
              BOOK NOW
            </Link>
            <Link href="/services" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all">
              SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CARDS: Responsive Grid */}
      <section className="py-20 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-center mb-16 uppercase tracking-widest">Our Standard</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
             {/* Card 1 */}
             <div className="group bg-gray-50 p-8 rounded-[2rem] border border-gray-100 transition-all hover:bg-[#1f7a1f] hover:text-white cursor-pointer shadow-sm hover:shadow-2xl">
                <span className="text-4xl mb-4 block group-hover:scale-125 transition-transform">🧼</span>
                <h3 className="text-xl font-bold mb-2 uppercase">Fully Kitted</h3>
                <p className="opacity-70 text-sm">Professional uniforms and industrial-grade safety gear.</p>
             </div>
             
             {/* Card 2 */}
             <div className="group bg-gray-50 p-8 rounded-[2rem] border border-gray-100 transition-all hover:bg-[#1f7a1f] hover:text-white cursor-pointer shadow-sm hover:shadow-2xl">
                <span className="text-4xl mb-4 block group-hover:scale-125 transition-transform">💎</span>
                <h3 className="text-xl font-bold mb-2 uppercase">Deep Clean</h3>
                <p className="opacity-70 text-sm">We reach the spots others miss using modern vacuum tech.</p>
             </div>

             {/* Card 3 (Takes full width on tablet, 1 col on mobile, 1 of 3 on desktop) */}
             <div className="group sm:col-span-2 lg:col-span-1 bg-gray-50 p-8 rounded-[2rem] border border-gray-100 transition-all hover:bg-[#1f7a1f] hover:text-white cursor-pointer shadow-sm hover:shadow-2xl">
                <span className="text-4xl mb-4 block group-hover:scale-125 transition-transform">🌍</span>
                <h3 className="text-xl font-bold mb-2 uppercase">Eco-Safe</h3>
                <p className="opacity-70 text-sm">Safe chemicals for children and pets in your Jos home.</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}