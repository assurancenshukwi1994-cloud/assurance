'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center">
        {/* High-Res Background with Zoom Effect */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] scale-110 animate-pulse-slow"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop')` 
          }}
        ></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none uppercase">
            JOS <br /> <span className="text-[#c9a227]">PREMIUM</span> <br /> CLEAN
          </h1>
          <p className="text-gray-200 text-sm md:text-xl max-w-xl mx-auto mb-10 font-medium">
            World-class cleaning standards tailored for the finest homes and offices in Plateau State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/booking" className="w-full sm:w-auto bg-[#1f7a1f] text-white px-10 py-5 rounded-full font-black text-sm tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl">
              START BOOKING
            </Link>
            <Link href="/services" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-black text-sm tracking-widest hover:bg-white/20 transition-all">
              OUR SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FEATURE CARDS */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Residential", desc: "Deep cleaning for luxury apartments and villas.", icon: "🏠" },
            { title: "Commercial", desc: "Corporate sanitization for Jos's top offices.", icon: "🏢" },
            { title: "Specialized", desc: "Post-construction and industrial cleanup.", icon: "🏗️" }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[2rem] border border-gray-100 bg-gray-50 hover:bg-[#1f7a1f] hover:text-white transition-all group cursor-default">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-gray-500 group-hover:text-green-100 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}