'use client';
import React, { useState } from 'react';

export default function JanitorialPage() {
  const [activeTab, setActiveTab] = useState<'employer' | 'candidate'>('employer');

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* HERO SECTION */}
      <section className="bg-gray-950 text-white pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#c9a227] font-black uppercase tracking-[0.3em] text-xs">Larry Agency Division</span>
          <h1 className="text-4xl md:text-7xl font-black mt-4 mb-6 tracking-tighter uppercase">
            Professional <span className="text-[#1f7a1f]">Janitorial</span> Staffing
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            We bridge the gap between world-class organizations and highly trained maintenance professionals.
          </p>
        </div>
      </section>

      {/* SELECTION TOGGLE */}
      <section className="max-w-xl mx-auto -mt-10 px-6 relative z-20">
        <div className="bg-white p-2 rounded-2xl shadow-2xl flex border border-gray-100">
          <button 
            onClick={() => setActiveTab('employer')}
            className={`flex-1 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'employer' ? 'bg-[#1f7a1f] text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Hire Janitors
          </button>
          <button 
            onClick={() => setActiveTab('candidate')}
            className={`flex-1 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'candidate' ? 'bg-[#1f7a1f] text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Apply for Job
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-16 px-6">
        {activeTab === 'employer' ? (
          /* FORM A: FOR ORGANIZATIONS */
          <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">Organization Request</h2>
            <p className="text-gray-500 mb-10 text-sm">Tell us your staffing requirements and we will provide vetted, trained janitors.</p>
            
            <form action="https://formspree.io/f/xwvkqnob" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="hidden" name="_subject" value="New Organization Staffing Request" />
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Organization Name</label>
                <input type="text" name="org_name" required className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#1f7a1f] outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Contact Person</label>
                <input type="text" name="contact_name" required className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#1f7a1f] outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Industry Type</label>
                <select name="industry" className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#1f7a1f] outline-none">
                  <option>Corporate Office</option>
                  <option>Hospital/Healthcare</option>
                  <option>Educational Institution</option>
                  <option>Industrial/Factory</option>
                  <option>Retail/Mall</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Staff Needed</label>
                <input type="number" name="staff_count" placeholder="e.g. 5" className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#1f7a1f] outline-none" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Schedule Requirements</label>
                <select name="schedule" className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#1f7a1f] outline-none">
                  <option>Full-Time (Live-in)</option>
                  <option>Full-Time (Daily)</option>
                  <option>Part-Time (Morning Shift)</option>
                  <option>Part-Time (Night Shift)</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Specific Responsibilities</label>
                <textarea name="requirements" rows={4} className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#1f7a1f] outline-none" placeholder="Describe the specific duties required..."></textarea>
              </div>
              <button type="submit" className="md:col-span-2 bg-[#1f7a1f] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-black transition-all">Submit Request</button>
            </form>
          </div>
        ) : (
          /* FORM B: FOR JOB APPLICANTS */
          <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">Join the Elite Team</h2>
            <p className="text-gray-500 mb-10 text-sm">Apply to become a Larry Certified Janitor and get placed with top organizations.</p>
            
            <form action="https://formspree.io/f/xwvkqnob" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="hidden" name="_subject" value="New Janitorial Job Application" />
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                <input type="text" name="applicant_name" required className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#1f7a1f] outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                <input type="tel" name="phone" required className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#1f7a1f] outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Years of Experience</label>
                <input type="number" name="experience" className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#1f7a1f] outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Highest Education</label>
                <select name="education" className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#1f7a1f] outline-none">
                  <option>Secondary School (SSCE)</option>
                  <option>Diploma/OND</option>
                  <option>Graduate (HND/BSc)</option>
                  <option>None</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Why should we hire you?</label>
                <textarea name="bio" rows={4} className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#1f7a1f] outline-none" placeholder="Tell us about your cleaning skills and professional attitude..."></textarea>
              </div>
              <button type="submit" className="md:col-span-2 bg-black text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#1f7a1f] transition-all">Submit Application</button>
            </form>
          </div>
        )}
      </section>
    </main>
  );
}