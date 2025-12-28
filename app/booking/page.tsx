'use client';
import React from 'react';

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP BRANDING */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 mb-4 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">System Online • Jos, Plateau</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-none">
            RESERVE <span className="text-[#1f7a1f]">LARRY</span>
          </h1>
          <p className="mt-4 text-gray-400 font-medium max-w-md text-sm uppercase tracking-widest">Premium Sanitation Concierge</p>
        </div>

        {/* MAIN CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: THE ACTION PANEL (PAYMENT) */}
          <div className="lg:col-span-5 bg-black rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
             {/* Decorative Background Element */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#1f7a1f] opacity-20 blur-[100px]"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-2 italic tracking-tight">Express Checkout</h3>
              <p className="text-gray-400 text-sm mb-10 leading-relaxed">Secure your date immediately without waiting for a callback. Best for standard residential services.</p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                   <span className="text-2xl">⚡</span>
                   <div>
                     <p className="font-bold text-sm uppercase">Instant Priority</p>
                     <p className="text-xs text-gray-500">Paid bookings move to the front of our schedule.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                   <span className="text-2xl">🛡️</span>
                   <div>
                     <p className="font-bold text-sm uppercase">Secure Portal</p>
                     <p className="text-xs text-gray-500">End-to-end encrypted payment via Paystack.</p>
                   </div>
                </div>
              </div>

              <a 
                href="https://paystack.shop/pay/qcg196ti0k" 
                target="_blank" 
                className="group relative flex items-center justify-center w-full bg-[#c9a227] hover:bg-white text-black font-black py-6 rounded-2xl transition-all shadow-[0_20px_50px_rgba(201,162,39,0.4)] overflow-hidden"
              >
                <span className="relative z-10 tracking-[0.2em] text-sm">PROCEED TO PAYMENT</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>

            <div className="mt-12 relative z-10 pt-8 border-t border-white/10 flex items-center justify-between">
               <div>
                 <p className="text-[10px] text-gray-500 uppercase font-bold mb-1 tracking-widest">Direct Line</p>
                 <p className="text-lg font-black tracking-tighter text-[#c9a227]">0810 041 1907</p>
               </div>
               <div className="text-right">
                 <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-widest">Rating</p>
                 <p className="text-lg font-black tracking-tighter">5.0 ⭐⭐⭐⭐⭐</p>
               </div>
            </div>
          </div>

          {/* RIGHT: THE FORM PANEL */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="mb-10">
              <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Request Quotation</h3>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">For custom or industrial projects</p>
            </div>

            <form action="https://formspree.io/f/xwvkqnob" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <input type="text" name="name" required placeholder="Full Name" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 outline-none focus:border-[#1f7a1f] focus:bg-white transition-all text-gray-900" />
                </div>
                <div className="space-y-1">
                  <input type="email" name="email" required placeholder="Email Address" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 outline-none focus:border-[#1f7a1f] focus:bg-white transition-all text-gray-900" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select name="service" required className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 outline-none focus:border-[#1f7a1f] focus:bg-white transition-all text-gray-900 appearance-none font-medium">
                  <option>Deep Home Cleaning</option>
                  <option>Industrial Office Cleanup</option>
                  <option>Landscaping & Lawn Care</option>
                  <option>Gutter & Drainage</option>
                  <option>Post-Construction</option>
                </select>
                <input type="text" name="location" required placeholder="Location (e.g. Rayfield)" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 outline-none focus:border-[#1f7a1f] focus:bg-white transition-all text-gray-900" />
              </div>

              <textarea name="message" rows={4} placeholder="Describe the property size or specific needs..." className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 outline-none focus:border-[#1f7a1f] focus:bg-white transition-all text-gray-900"></textarea>

              <button 
                type="submit" 
                className="w-full bg-[#1f7a1f] text-white font-black py-6 rounded-2xl hover:bg-black transition-all shadow-lg uppercase tracking-[0.3em] text-xs"
              >
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}