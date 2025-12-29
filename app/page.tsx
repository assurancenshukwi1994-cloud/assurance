'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gray-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=2070&auto=format&fit=crop')` 
          }}
        ></div>

        <div className="relative z-10 text-center px-6 mt-10">
          {/* Solid Green Text for LARRY */}
          <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter leading-none uppercase">
            <span className="text-[#1f7a1f] drop-shadow-md">LARRY</span> <br /> 
            <span className="text-white">CLEANING</span>
          </h1>
          <p className="text-gray-200 text-base md:text-2xl max-w-2xl mx-auto mb-10 font-bold uppercase tracking-widest">
            Professional Sanitation <span className="text-[#c9a227]">Jos, Plateau State</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/booking" className="w-full sm:w-auto bg-[#c9a227] text-black px-12 py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-[#1f7a1f] hover:text-white transition-all shadow-2xl">
              GET A QUOTE
            </Link>
            <Link href="https://paystack.shop/pay/qcg196ti0k" className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-gray-200 transition-all shadow-xl">
              PAY ONLINE
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK STATS / TRUST */}
      <section className="py-12 bg-[#1f7a1f] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-8 text-center">
           <div>
             <p className="text-3xl font-black">100%</p>
             <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Guaranteed</p>
           </div>
           <div>
             <p className="text-3xl font-black">24/7</p>
             <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Support</p>
           </div>
           <div>
             <p className="text-3xl font-black">JOS</p>
             <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Native Service</p>
           </div>
        </div>
      </section>
    </main>
  );
}