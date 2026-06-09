import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Send, 
  CheckCircle,
  FileText,
  UserCheck
} from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, and Message).");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate real high-end database receipt
    setTimeout(() => {
      // Generate realistic Abu Dhabi commercial ticket
      const num = Math.floor(100000 + Math.random() * 900000);
      setTicketId(`EXC-AD-${num}`);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-[#F4F4F4] min-h-screen text-[#111827] font-sans" id="contact-page">
      
      {/* Page Header (Corporate Banner) */}
      <section className="bg-[#1D2636] text-white py-16 px-4 border-b border-[#2F394D]" id="contact-header">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">Corporate Desk</span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Connect immediately with our technical account managers at our Musaffah, Abu Dhabi headquarters.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="contact-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information & Business Hours */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-col">
            
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">Head Office</span>
              <h2 className="font-heading text-2xl font-extrabold text-[#1D2636] tracking-tight">
                Get in Touch
              </h2>
              <div className="w-16 h-1 bg-[#0EA5E9]"></div>
            </div>

            {/* Address, Phone, Email cards */}
            <div className="space-y-4" id="contact-details-cards">
              
              <div className="bg-white p-5 border-l-4 border-[#1D2636] flex items-start space-x-4">
                <div className="p-2.5 bg-[#F4F4F4]">
                  <MapPin className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D2636]">HQ Address</h4>
                  <p className="text-gray-600 text-sm">
                    Musaffah, M14, Abu Dhabi, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 border-l-4 border-[#1D2636] flex items-start space-x-4">
                <div className="p-2.5 bg-[#F4F4F4]">
                  <Phone className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D2636]">Direct Lines</h4>
                  <a href="tel:+971585930053" className="text-gray-600 hover:text-[#0EA5E9] text-sm font-mono block">
                    +971 58 593 0053
                  </a>
                </div>
              </div>

              <div className="bg-white p-5 border-l-4 border-[#1D2636] flex items-start space-x-4">
                <div className="p-2.5 bg-[#F4F4F4]">
                  <Mail className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D2636]">Corporate Email</h4>
                  <a href="mailto:sales@excaliburuae.com" className="text-gray-600 hover:text-[#0EA5E9] text-sm font-mono block break-all">
                    sales@excaliburuae.com
                  </a>
                </div>
              </div>

              <div className="bg-white p-5 border-l-4 border-[#1D2636] flex items-start space-x-4">
                <div className="p-2.5 bg-[#F4F4F4]">
                  <Globe className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D2636]">Web Gateway</h4>
                  <a href="http://www.excaliburuae.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0EA5E9] text-sm font-sans block underline">
                    www.excaliburuae.com
                  </a>
                </div>
              </div>

            </div>

            {/* Business Hours Panel */}
            <div className="bg-[#2F394D] text-white p-6 border-l-4 border-[#0EA5E9]" id="contact-business-hours">
              <div className="flex items-center space-x-2.5 mb-4 border-b border-gray-700 pb-3">
                <Clock className="w-5 h-5 text-[#0EA5E9]" />
                <h3 className="font-heading text-sm uppercase tracking-widest font-extrabold text-white">Business Hours</h3>
              </div>
              <div className="space-y-3 font-sans text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monday – Saturday</span>
                  <span className="font-mono font-bold text-white">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-gray-500">
                  <span>Sunday</span>
                  <span className="font-mono uppercase text-red-400 font-semibold text-[10px]">Office Closed</span>
                </div>
                <div className="pt-2 border-t border-gray-700 text-gray-400 text-[10px] leading-relaxed">
                  *Our physical cargo dispatch depots in Musaffah coordinate truck logistics according to scheduled municipality permits.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 border border-gray-200 shadow-xs" id="contact-form-col">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div 
                  key="form-edit"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl font-bold text-[#1D2636]">Business Sourcing Inquiry</h3>
                    <p className="text-gray-500 text-xs">
                      Submit your procurement requirements details. An Excalibur accounts manager will respond with a formatted quote within 24 working hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" id="sourcing-inquiry-form">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-[#F4F4F4] border border-gray-300 p-3 text-sm focus:outline-none focus:border-[#0EA5E9] transition-all font-sans"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Gulf Logistics LLC"
                          className="w-full bg-[#F4F4F4] border border-gray-300 p-3 text-sm focus:outline-none focus:border-[#0EA5E9] transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email address */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="procurement@gulflogistics.com"
                          className="w-full bg-[#F4F4F4] border border-gray-300 p-3 text-sm focus:outline-none focus:border-[#0EA5E9] transition-all font-sans"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 50 XXXXXXX"
                          className="w-full bg-[#F4F4F4] border border-gray-300 p-3 text-sm focus:outline-none focus:border-[#0EA5E9] transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
                        Procurement Details / Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please detail your list of items, required tyre sizes, or kitchen blueprint specifications."
                        className="w-full bg-[#F4F4F4] border border-gray-300 p-3 text-sm focus:outline-none focus:border-[#0EA5E9] transition-all font-sans"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1D2636] hover:bg-[#2F394D] text-[#0EA5E9] hover:text-white font-bold uppercase tracking-wider text-xs py-4 px-6 transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
                      id="form-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Transmitting Securely...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Transmit Sourcing Inquiry</span>
                        </>
                      )}
                    </button>

                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-6"
                  id="form-success-container"
                >
                  <div className="w-16 h-16 bg-[#0EA5E9]/10 flex items-center justify-center mx-auto rounded-full">
                    <CheckCircle className="w-10 h-10 text-emerald-600 animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] tracking-widest text-[#0EA5E9] uppercase font-bold font-mono">Transmission Successful</span>
                    <h3 className="font-heading text-2xl font-extrabold text-[#1D2636]">Inquiry Transmitted to Musaffah Desk</h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-[#1D2636]">{formData.name}</span>. Your bulk procurement catalog request has been logged in our secure Abu Dhabi trading registry.
                    </p>
                  </div>

                  {/* Corporate receipt ticket */}
                  <div className="bg-[#EFEFEF] border border-gray-300 p-5 rounded-none max-w-sm mx-auto space-y-2.5 text-left font-mono text-xs">
                    <div className="flex justify-between text-gray-500 text-[10px] border-b border-gray-300 pb-1.5 uppercase font-bold">
                      <span>Receipt Field</span>
                      <span>Value Status</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tracking Ref:</span>
                      <span className="text-slate-800 font-bold">{ticketId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Corporate Entity:</span>
                      <span className="text-slate-800 font-bold truncate max-w-[150px]">{formData.company || 'Private Client'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status Node:</span>
                      <span className="text-emerald-600 font-bold">PENDING_REVIEW</span>
                    </div>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 border border-gray-400 hover:border-[#0EA5E9] text-gray-600 hover:text-[#1D2636] uppercase text-[10px] tracking-widest font-extrabold transition-colors duration-200 cursor-pointer"
                  >
                    Submit Another Sourcing Ticket
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 4. Google Map Section - Abu Dhabi Location */}
      <section className="bg-white border-t border-gray-200" id="google-map-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-4 mb-8">
            <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">Geographic Coordinates</span>
            <h2 className="font-heading text-2xl font-extrabold text-[#1D2636] tracking-tight">Our Abu Dhabi Warehouse Depot Location</h2>
            <p className="text-xs text-gray-500">Musaffah Industrial M14, Abu Dhabi, UAE. Easily accessible via the E30 main freeway transit corridor for logistics loaders.</p>
          </div>

          <div className="h-96 w-full border border-gray-300 relative bg-gray-100 shadow-sm overflow-hidden" id="google-map-container">
            {/* Real embedded reactive Google Maps frame pointing directly to Musaffah Industrial Area, Abu Dhabi */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14543.834076395353!2d54.49880227361869!3d24.313054170757274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e419846b048cb%3A0xe54df97b7afbdac6!2sM-14%2C%20Musaffah%20Industrial%20Area%20-%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1717873356000!5m2!1sen!2sae" 
              className="w-full h-full border-0 grayscale-[10%] contrast-[110%] select-none pointer-events-auto"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Musaffah Industrial M14 Abu Dhabi excalibur location map"
              id="google-maps-iframe"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
