export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* HEADER */}
      <section className="bg-[#1f7a1f] text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2">We are available 24/7 for your cleaning needs in Jos.</p>
      </section>

      <section className="max-w-6xl mx-auto mt-16 px-6 grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE: CONTACT INFO */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1f7a1f] mb-4">Get in Touch</h2>
            <p className="text-gray-600">Have a question or need a custom quote for your organization? Reach out to us directly.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-bold">Our Office</p>
                <p className="text-sm text-gray-600">No. 24, Beside Rock Heaven, Jos, Plateau State</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-bold">Phone Number</p>
                <p className="text-sm text-gray-600">08100411907</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-bold">Email Address</p>
                <p className="text-sm text-gray-600">assurancenshukwi1994@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: QUICK ACTIONS */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Quick Connect</h2>
          <div className="space-y-4">
            <a 
              href="https://wa.me/2348100411907" 
              target="_blank" 
              className="block w-full bg-[#25D366] text-white text-center py-4 rounded-lg font-bold shadow hover:opacity-90 transition"
            >
              Chat on WhatsApp
            </a>
            <a 
              href="tel:08100411907" 
              className="block w-full bg-[#1f7a1f] text-white text-center py-4 rounded-lg font-bold shadow hover:opacity-90 transition"
            >
              Call Us Now
            </a>
          </div>
          <p className="mt-6 text-xs text-gray-500 text-center uppercase tracking-widest">
            Always at your service
          </p>
        </div>
      </section>
    </main>
  );
}