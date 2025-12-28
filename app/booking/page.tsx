'use client';

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* HEADER */}
      <section className="bg-[#1f7a1f] text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold uppercase tracking-wide">Book Your Service</h1>
        <p className="mt-2 opacity-90">Get a quote or pay securely below</p>
      </section>

      <div className="max-w-2xl mx-auto mt-10 px-4 space-y-10">
        
        {/* OPTION 1: THE CONTACT FORM (FOR QUOTES) */}
        <section className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-[#1f7a1f]">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">1. Request a Quote</h2>
            <p className="text-sm text-gray-500">Fill this and we will call you with a price.</p>
          </div>
          
          <form action="https://formspree.io/f/xwvkqnob" method="POST" className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
              <input name="name" type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f7a1f] outline-none bg-gray-50" placeholder="Enter your name" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp Number</label>
                <input name="phone" type="tel" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f7a1f] outline-none bg-gray-50" placeholder="0810..." />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Service Type</label>
                <select name="service" className="w-full p-3 border border-gray-300 rounded-lg outline-none bg-gray-50">
                  <option>Residential Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Post-Construction</option>
                  <option>Fumigation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Jos Address</label>
              <textarea name="address" required className="w-full p-3 border border-gray-300 rounded-lg h-24 outline-none bg-gray-50" placeholder="Example: No. 24, Beside Rock Heaven..."></textarea>
            </div>

            <button type="submit" className="w-full bg-gray-800 text-white py-4 rounded-lg font-bold hover:bg-black transition shadow-md">
              Send Request & Get Quote
            </button>
          </form>
        </section>

        {/* OR DIVIDER */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
          <div className="relative flex justify-center text-sm font-bold uppercase"><span className="px-4 bg-gray-50 text-gray-500">OR</span></div>
        </div>

        {/* OPTION 2: THE INSTANT PAYMENT */}
        <section className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-[#c9a227] text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">2. Pay Instantly</h2>
          <p className="text-sm text-gray-500 mb-6">Already have a quote? Pay now to confirm your date.</p>
          
          <a 
            href="https://paystack.shop/pay/qcg196ti0k" 
            target="_blank" 
            className="w-full bg-[#1f7a1f] text-white py-5 rounded-xl font-bold text-center block text-xl hover:bg-green-800 transition shadow-lg transform hover:scale-[1.01]"
          >
            💳 Proceed to Paystack
          </a>
        </section>

      </div>
    </main>
  );
}