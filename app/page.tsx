'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* HERO SECTION - Watermarked High-Res Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 40, 0, 0.75), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1581578731548-c64695ce6958?q=80&w=2070&auto=format&fit=crop')` 
          }}
        ></div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <p className="text-[#c9a227] font-black tracking-[0.4em] uppercase mb-4 text-xs md:text-sm">
            Jos • Plateau State
          </p>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase">
            Pure <br /> <span className="text-[#c9a227]">Excellence</span>
          </h1>
          
          <p className="text-base md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Professional sanitation services for premium homes and offices. Experience the international standard of cleaning.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/booking" className="bg-[#1f7a1f] text-white px-12 py-5 rounded-full font-black text-lg hover:bg-green-800 transition-all transform hover:-translate-y-1 shadow-2xl">
              BOOK NOW
            </Link>
            <Link href="/services" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all">
              SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">✨</div>
            <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">Deep Hygiene</h3>
            <p className="text-gray-500 leading-relaxed">We use industrial-grade equipment to ensure every corner of your property is bacteria-free.</p>
          </div>
          <div className="text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
            <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">Fully Kitted</h3>
            <p className="text-gray-500 leading-relaxed">Our staff are professionals who arrive in full protective gear for safety and efficiency.</p>
          </div>
          <div className="text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📍</div>
            <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">Jos Local</h3>
            <p className="text-gray-500 leading-relaxed">Proudly serving the Plateau with local knowledge and world-class standards.</p>
          </div>
        </div>
      </section>
    </main>
  );
}