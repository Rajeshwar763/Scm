import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from "lucide-react";
import axios from "axios";
import SEO from "../components/SEO";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["H.no.4-106, Pragathi Nagar,", "Moosapet, Balanagar, Rangareddy,", "Telangana 500018"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 81435 97569 (Office)", "+91 77804 47171 (Personal)"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@scmgroup-services.com", "SCM@scmgroup-services.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setError("Please fill all required fields."); return; }
    setLoading(true);
    setError("");
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, form);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    } catch {
      setError("Failed to send message. Please try again or call us directly.");
    }
    setLoading(false);
  };

  return (
    <div className="font-body">
      <SEO
        title="Contact Us | Manpower Agency Hyderabad | +91 81435 97569"
        description="Contact SCM Group Management Services for IT staffing, manpower supply, and HR solutions in Hyderabad. Call +91 81435 97569 or email info@scmgroup-services.com. Located in Moosapet, Hyderabad."
        keywords="contact SCM Group, staffing agency Hyderabad contact, manpower agency phone number, IT staffing contact Hyderabad, SCM Group Moosapet Hyderabad, manpower agency Telangana contact"
      />
      {/* Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden" data-testid="contact-banner">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1766066014237-00645c74e9c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMGN1c3RvbWVyJTIwc3VwcG9ydCUyMGhlYWRzZXQlMjBzbWlsaW5nJTIwY2FsbCUyMGNlbnRlciUyMGRlc2t8ZW58MHx8fHwxNzc0OTM4ODcwfDA&ixlib=rb-4.1.0&q=85"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0F1C35]/78" />
        </div>
        <div className="container-max text-center relative z-10">
          <p className="text-[#E8622A] text-xs font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Have a staffing requirement? Drop us a message and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white" data-testid="contact-info-cards">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} data-testid={`contact-card-${item.title.replace(/\s+/g, '-').toLowerCase()}`} className="bg-[#F8FAFC] p-6 rounded-xl border border-gray-100">
                <div className="w-11 h-11 bg-[#E8622A]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-[#E8622A]" />
                </div>
                <h3 className="font-heading font-bold text-[#1E3A6E] mb-3 text-sm">{item.title}</h3>
                {item.lines.map((line) => (
                  <p key={line} className="text-gray-500 text-sm leading-relaxed">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-[#F8FAFC]" data-testid="contact-form-section">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-label mb-2">Send a Message</p>
              <h2 className="font-heading text-2xl font-bold text-[#1E3A6E] mb-6">How Can We Help?</h2>

              {success && (
                <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4 mb-6" data-testid="contact-success-message">
                  <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800 text-sm">Thank you! Your message has been received. Our team will contact you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name *</label>
                    <input name="name" data-testid="contact-name-input" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/30" placeholder="Your name" value={form.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address *</label>
                    <input name="email" type="email" data-testid="contact-email-input" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/30" placeholder="you@company.com" value={form.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number</label>
                    <input name="phone" data-testid="contact-phone-input" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/30" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Company Name</label>
                    <input name="company" data-testid="contact-company-input" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/30" placeholder="Your company" value={form.company} onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Service Required</label>
                  <select name="service" data-testid="contact-service-select" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/30 bg-white text-gray-600" value={form.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option>IT Staffing</option>
                    <option>Manpower Supply</option>
                    <option>RPO Services</option>
                    <option>Payroll Management</option>
                    <option>Contract Staffing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Message *</label>
                  <textarea name="message" rows={4} data-testid="contact-message-input" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/30 resize-none" placeholder="Describe your staffing requirements..." value={form.message} onChange={handleChange} />
                </div>
                {error && <p className="text-red-500 text-sm" data-testid="contact-error">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-submit-button"
                  className="w-full bg-[#E8622A] text-white py-3.5 rounded-md font-semibold hover:bg-[#D05625] transition-all disabled:opacity-50 inline-flex items-center justify-center gap-2"
                >
                  {loading ? "Sending..." : <><Send size={17} /> Send Message</>}
                </button>
              </form>
            </motion.div>

            {/* Map + Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="font-heading font-bold text-[#1E3A6E] flex items-center gap-2">
                    <MapPin size={18} className="text-[#E8622A]" /> Our Location
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">H.no.4-106, Pragathi Nagar, Moosapet, Balanagar, Rangareddy, Telangana 500018</p>
                </div>
                <div data-testid="google-map-embed">
                  <iframe
                    title="SCM Group Office Location"
                    src="https://maps.google.com/maps?q=Pragathi+Nagar+Moosapet+Balanagar+Hyderabad+Telangana+500018&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="bg-[#1E3A6E] rounded-2xl p-8">
                <h3 className="font-heading font-bold text-white text-lg mb-2">Quick Response Guaranteed</h3>
                <p className="text-white/70 text-sm mb-5">We respond to all inquiries within 24 business hours. For urgent manpower requirements, please call us directly.</p>
                <div className="space-y-3">
                  <a href="tel:+918143597569" data-testid="contact-phone-link" className="flex items-center gap-3 text-white/80 hover:text-[#E8622A] transition-colors text-sm">
                    <Phone size={15} className="text-[#E8622A]" /> +91 81435 97569 (Office)
                  </a>
                  <a href="tel:+917780447171" className="flex items-center gap-3 text-white/80 hover:text-[#E8622A] transition-colors text-sm">
                    <Phone size={15} className="text-[#E8622A]" /> +91 77804 47171 (Personal)
                  </a>
                  <a href="mailto:info@scmgroup-services.com" data-testid="contact-email-link" className="flex items-center gap-3 text-white/80 hover:text-[#E8622A] transition-colors text-sm">
                    <Mail size={15} className="text-[#E8622A]" /> info@scmgroup-services.com
                  </a>
                  <a href="mailto:SCM@scmgroup-services.com" className="flex items-center gap-3 text-white/80 hover:text-[#E8622A] transition-colors text-sm">
                    <Mail size={15} className="text-[#E8622A]" /> SCM@scmgroup-services.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
