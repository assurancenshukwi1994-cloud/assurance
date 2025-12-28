'use client';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HEADER SECTION */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4">
            WE ARE <span className="text-[#1f7a1f]">LARRY CLEANING</span>
          </h1>
          <div className="w-20 h-2 bg-[#c9a227] mx-auto"></div>
          <p className="mt-8 text-xl text-gray-600 font-light leading-relaxed italic">
            "Redefining hygiene standards in the Home of Peace and Tourism."
          </p>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Professional Image of Team/Equipment */}
            <img 
              src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2070&auto=format&fit=crop" 
              alt="Our Professional Team" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-green-100 rounded-3xl -z-0"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Our Journey</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in the heart of Jos, <strong>Larry Cleaning Service</strong> started with a simple vision: to provide world-class sanitation services that the people of Plateau State can trust. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              We recognized a gap in the market for truly professional, fully kitted cleaning experts who understand both modern industrial equipment and the unique needs of our local environment.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-4 border-[#1f7a1f] pl-4">
                <h4 className="font-bold text-gray-900">Our Mission</h4>
                <p className="text-sm text-gray-500">To transform every space into a sanctuary of health and beauty.</p>
              </div>
              <div className="border-l-4 border-[#c9a227] pl-4">
                <h4 className="font-bold text-gray-900">Our Vision</h4>
                <p className="text-sm text-gray-500">To be the #1 most trusted cleaning brand in Northern Nigeria by 2030.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES (INTERACTIVE CARDS) */}
      <section className="bg-green-900 py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter uppercase">Why Choose Us?</h2>
          <p className="text-green-200 mt-2 italic">The pillars of our world-class service.</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition">
            <span className="text-4xl mb-4 block">💎</span>
            <h3 className="text-xl font-bold mb-3 text-[#c9a227]">Uncompromising Quality</h3>
            <p className="text-sm text-gray-300 leading-relaxed">We don't cut corners; we clean them. Our team follows international protocols for every task.</p>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition">
            <span className="text-4xl mb-4 block">🛡️</span>
            <h3 className="text-xl font-bold mb-3 text-[#c9a227]">Trained Experts</h3>
            <p className="text-sm text-gray-300 leading-relaxed">Every member of Larry Cleaning is background-checked and undergoes rigorous safety training.</p>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition">
            <span className="text-4xl mb-4 block">🚀</span>
            <h3 className="text-xl font-bold mb-3 text-[#c9a227]">Modern Technology</h3>
            <p className="text-sm text-gray-300 leading-relaxed">We use the latest industrial vacuuming, steam cleaning, and eco-friendly detergents.</p>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-8">Ready to experience the Larry standard?</h2>
        <Link href="/booking" className="bg-[#1f7a1f] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-green-800 transition shadow-xl">
          Book Your Cleaning Now
        </Link>
      </section>
    </main>
  );
}