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
            Fill out your details to get a quote, or use the direct payment button below to secure your slot instantly.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          {/* LEFT SIDE: INFO & DIRECT PAYMENT */}
          <div className="bg-[#1f7a1f] md:w-1/3 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Fast Track</h3>
              <p className="text-xs text-green-100 mb-6 leading-relaxed">Already have a quote or want to pay a deposit now?</p>
              
              {/* --- DIRECT PAYSTACK LINK --- */}
              <a 
                href="https://paystack.shop/pay/qcg196ti0k" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-[#c9a227] hover:bg-yellow-500 text-black font-black py-4 rounded-xl transition-all shadow-lg mb-8 scale-105"
              >
                💳 PAY ONLINE
              </a>

              <ul className="space-y-4 text-xs font-light opacity-80">
                <li className="flex gap-3"><span>✓</span> Instant Confirmation</li>
                <li className="flex gap-3"><span>✓</span> Secure Paystack Portal</li>
              </ul>
            </div>
            
            <div className="mt-12">
              <p className="text-[10px] text-green-200 uppercase tracking-widest mb-1">Support</p>
              <p className="font-bold">0810 041 1907</p>
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM */}
          <div className="md:w-2/2 p-8 md:p-12 bg-white">
            <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">Request a Quote</h4>
            <form action="https://formspree.io/f/xvgzlowj" method="POST" className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" required placeholder="Full Name" className="w-full bg-gray-50 rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#1f7a1f]" />
                <input type="email" name="email" required placeholder="Email" className="w-full bg-gray-50 rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#1f7a1f]" />
              </div>

              <select name="service" required className="w-full bg-gray-50 rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#1f7a1f]">
                <option>Deep Home Cleaning</option>
                <option>Office Sanitization</option>
                <option>Landscaping & Lawns</option>
                <option>Gutter & Drainage</option>
              </select>

              <input type="text" name="location" required placeholder="Area in Jos (e.g. Rayfield)" className="w-full bg-gray-50 rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#1f7a1f]" />

              <textarea name="message" rows={3} placeholder="Additional Details..." className="w-full bg-gray-50 rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#1f7a1f]"></textarea>

              <button type="submit" className="w-full bg-black text-white font-black py-4 rounded-xl hover:bg-[#1f7a1f] transition-all uppercase tracking-widest text-xs">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}