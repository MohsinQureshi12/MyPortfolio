import React from "react";
import { Send, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';
import ContactPageBg from "../../public/assets/image/buliding.jpg";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen font-sans pb-20">
      {/* Hero Section */}
      <section 
        className="relative w-full pt-32 pb-40 px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ContactPageBg})` }}
      >
        {/* Transparent dark color overlay on top of the background image */}
        <div className="absolute inset-0 bg-primary/70 pointer-events-none"></div>
        {/* Soft bottom fade to blend into the gray background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto z-20">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-white uppercase bg-white/10 rounded-full border border-gray-600/50 backdrop-blur-sm">
            Contact
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight max-w-2xl">
            Let's build something <br /> exceptional.
          </h1>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            Reach our teams in Lahore and Ras Al Khaimah, or book a consultation with a solution architect.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 -mt-20 z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 lg:p-10 border border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-2">Book a Consultation</h2>
            <p className="text-grey-light mb-8 text-sm">Tell us about your project — we'll respond within one business day.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-xs font-semibold text-black">Full name</label>
                  <input type="text" id="fullName" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2  outline-none transition-all bg-transparent text-sm" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-semibold text-black">Work email</label>
                  <input type="email" id="email" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2  outline-none transition-all bg-transparent text-sm" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-xs font-semibold text-black">Company</label>
                  <input type="text" id="company" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2  outline-none transition-all bg-transparent text-sm" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-semibold text-black">Phone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2  outline-none transition-all bg-transparent text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="details" className="block text-xs font-semibold text-black">Project details</label>
                <textarea id="details" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2  outline-none transition-all bg-transparent resize-none text-sm"></textarea>
              </div>
              <button type="button" className="w-full bg-primary hover:bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-md shadow-blue-500/20">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Column - Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Pakistan Office */}
            {/* <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[10px] font-bold text-blue-600 tracking-wider uppercase mb-1">Pakistan</div>
              <h3 className="text-base font-bold text-gray-900 mb-3">Lahore Office</h3>
              <div className="flex items-start gap-3 text-gray-500">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  Office #22, 2nd Floor, Big City Plaza, Liberty Roundabout, Gulberg, Lahore
                </p>
              </div>
            </div> */}

            {/* UAE Office */}
            {/* <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[10px] font-bold text-blue-600 tracking-wider uppercase mb-1">UAE</div>
              <h3 className="text-base font-bold text-gray-900 mb-3">Ras Al Khaimah Office</h3>
              <div className="flex items-start gap-3 text-gray-500">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  Building#08, Street#20-A, Al Qusaidat, Ras Al Khaima, UAE
                </p>
              </div>
            </div> */}

            {/* Direct Channels */}
            <div className="bg-primary rounded-2xl p-6     text-white shadow-xl mt-4">
              <h3 className="text-base font-bold mb-4">Direct channels</h3>
              <div className="space-y-4">
                <a href="mailto:pk@ventrextech.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm">
                  <Mail className="w-4 h-4 text-white" />
                  pk@ventrextech.com
                </a>
                <a href="tel:+923258831990" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4 text-white" />
                  +92 325 883 1990
                </a>
                <a href="https://wa.me/923258831990" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm">
                  <MessageSquare className="w-4 h-4 text-white" />
                  WhatsApp: 923258831990
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
