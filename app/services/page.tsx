'use client';
import Link from 'next/link';

const services = [
  {
    title: "Furniture & Upholstery",
    desc: "Deep steam cleaning for sofas, office chairs, and carpets. We remove deep-seated stains and odors.",
    image: "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?q=80&w=1000&auto=format&fit=crop",
    category: "Indoor"
  },
  {
    title: "Landscaping & Lawns",
    desc: "Professional grass cutting, flower trimming, and garden maintenance to keep your surroundings green.",
    image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1000&auto=format&fit=crop",
    category: "Outdoor"
  },
  {
    title: "Waste & Refuse Clearing",
    desc: "Efficient disposal of residential and industrial waste. We keep your environment trash-free.",
    image: "https://images.unsplash.com/photo-1605600611284-195205ef91b2?q=80&w=1000&auto=format&fit=crop",
    category: "Sanitation"
  },
  {
    title: "Gutter & Drainage",
    desc: "Thorough clearing of gutters to prevent flooding and pest breeding. Essential for the Jos rainy season.",
    image: "https://images.unsplash.com/photo-1508873696983-2df51512201b?q=80&w=1000&auto=format&fit=crop",
    category: "Maintenance"
  },
  {
    title: "Post-Construction",
    desc: "Removal of cement stains, paint splatters, and dust from newly built or renovated structures.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695ce6958?q=80&w=1000&auto=format&fit=crop",
    category: "Industrial"
  },
  {
    title: "Office Sanitization",
    desc: "Daily or weekly maintenance for corporate spaces to ensure a healthy working environment.",
    image: "https://images.unsplash.com/photo-1527515545081-5db817172677?q=80&w=1000&auto=format&fit=crop",
    category: "Corporate"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HEADER SECTION - Interactive Gradient */}
      <section className="relative py-24 px-6 text-center bg-[#1f7a1f] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase">
            Our <span className="text-[#c9a227]">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-green-100 text-lg md:text-xl font-light">
            Providing premium sanitation and maintenance solutions across Jos.
          </p>
        </div>
      </section>

      {/* SERVICES GRID - Responsive & Interactive */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="h-64 sm:h-72 overflow-hidden relative bg-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur text-green-900 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {item.category}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-500 mb-8 text-sm leading-relaxed flex-grow">{item.desc}</p>
                <Link 
                  href="/booking" 
                  className="inline-block w-full text-center bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-[#1f7a1f] transition-all transform active:scale-95 shadow-lg"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gray-50 py-20 px-6 text-center border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase">Ready to get started?</h2>
          <p className="text-gray-600 mb-10 text-lg">Book a world-class cleaning session for your property today.</p>
          <Link href="/booking" className="bg-[#c9a227] text-black px-12 py-5 rounded-full font-black text-lg hover:bg-yellow-500 transition-all shadow-xl inline-block">
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}