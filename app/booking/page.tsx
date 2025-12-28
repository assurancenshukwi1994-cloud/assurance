'use client';
import React from 'react';

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-4">
            Secure Your <span className="text-[#1f7a1f]">Session</span>
          </h1>
          <div className="w-24 h-2 bg-[#c9a227] mx-auto mb-6"></div>
          <p className="text-gray-500 font-medium max-w-lg mx-auto">
            Experience the Larry Standard. Fill out the details below and our team will prepare a world-class quote for your property.
          </p>
        </div>

        {/* BOOKING CARD */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          {/* LEFT SIDE: INFO PANEL */}
          <div className="bg-[#1f7a1f] md:w-1/3 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Book Us?</h3>
              <ul className="space-y-6 text-sm font-light">
                <li className="flex gap-3">
                  <span className="text-[#c9a227] font-bold">✓</span>
                  Fully Kitted Professionals
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a227] font-bold">✓</span>
                  Industrial Steam Tech
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a227] font-bold">✓</span>
                  Eco-Safe Detergents
                </li>
              </ul>
            </div>
            
            <div className="mt-12 md:mt-0">
              <p className="text-xs text-green-200 uppercase tracking-widest mb-2">Need Help?</p>
              <p className="font-bold text-lg">0810 041 1907</p>
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM */}
          <div className="md:w-2/3 p-8 md:p-12">
            <form action="https://formspree.io/f/xvgzlowj" method="POST" className="space-y-6">
              
              {/* Name & Email Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                  <input 
                    type="text" name="name" required
                    placeholder="Enter your name"
                    className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#1f7a1f] transition-all outline-none text-gray-900" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                  <input 
                    type="email" name="email" required
                    placeholder="example@gmail.com"
                    className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#1f7a1f] transition-all outline-none text-gray-900" 
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Select Service</label>
                <select 
                  name="service" required
                  className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#1f7a1f] transition-all outline-none text-gray-900 appearance-none"
                >
                  <option>Deep Home Cleaning</option>
                  <option>Office Sanitization</option>
                  <option>Landscaping & Lawns</option>
                  <option>Gutter & Drainage</option>
                  <option>Post-Construction Cleanup</option>
                </select>
              </div>

              {/* Location in Jos */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Location (Area in Jos)</label>
                <input 
                  type="text" name="location" required
                  placeholder="e.g. Rayfield, Anglo-Jos, Tudun Wada"
                  className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#1f7a1f] transition-all outline-none text-gray-900" 
                />
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Specific Requirements</label>
                <textarea 
                  name="message" rows={4}
                  placeholder="Tell us about the size of the property or any special requests..."
                  className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#1f7a1f] transition-all outline-none text-gray-900"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-[#1f7a1f] hover:bg-black text-white font-black py-5 rounded-2xl transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl uppercase tracking-widest text-sm"
              >
                Send Request
              </button>
            </form>
          </div>

        </div>

        {/* TRUST BADGES */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40">
           <p className="text-[10px] font-bold uppercase tracking-widest italic">✓ Secure Booking</p>
           <p className="text-[10px] font-bold uppercase tracking-widest italic">✓ Guaranteed Response</p>
           <p className="text-[10px] font-bold uppercase tracking-widest italic">✓ Professional Staff</p>
        </div>
      </div>
    </main>
  );
}