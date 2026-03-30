import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowRight, CheckCircle } from "lucide-react";

const clients = [
  "CloudEdge Technologies", "BuildRight Infrastructure", "FacilityCare Services",
  "InnoManufacture Ltd", "GlobalStaff Solutions", "TechBridge India",
  "ManpowerOne Corp", "ConstructivePro", "DataServe Systems",
  "InfraTech India", "SkillForce Corp", "IndusHR Solutions",
  "HyderTech Services", "PrimeStaff Group", "WorkForce India",
];

const stats = [
  { value: "50+", label: "Clients Served" },
  { value: "500+", label: "Placements Made" },
  { value: "15+", label: "Industries Covered" },
  { value: "98%", label: "Client Satisfaction" },
];

const testimonials = [
  { name: "Rajesh Kumar", company: "TechVision India", text: "SCM Group has been our go-to staffing partner for 3 years. Their understanding of IT talent requirements is exceptional." },
  { name: "Priya Mehta", company: "ManufacturePro Ltd", text: "Reliable, responsive, and always delivering quality manpower. Highly recommend SCM Group for industrial staffing." },
  { name: "Arvind Singh", company: "BuildRight Corp", text: "Our construction projects run on time because SCM supplies skilled workers exactly when and where we need them." },
];

const industries = [
  "Information Technology", "Manufacturing & Production", "Construction & Infrastructure",
  "Facility Management", "International Placements", "Healthcare", "Retail & Logistics",
  "Banking & Finance",
];

function ClientLogo({ name }) {
  return (
    <div className="mx-6 flex-shrink-0">
      <div className="bg-white border border-gray-100 rounded-xl px-8 py-5 shadow-sm hover:shadow-md transition-shadow">
        <p className="font-heading font-bold text-[#1E3A6E] text-sm whitespace-nowrap">{name}</p>
      </div>
    </div>
  );
}

export default function ClientsPage() {
  return (
    <div className="font-body">
      {/* Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden" data-testid="clients-banner">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/18848926/pexels-photo-18848926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-[#0F1C35]/85" />
        </div>
        <div className="container-max text-center relative z-10">
          <p className="text-[#E8622A] text-xs font-semibold uppercase tracking-widest mb-3">Our Clientele</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Trusted by India's Best</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            From startups to large enterprises, we've earned the trust of organizations across multiple sectors.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#E8622A] py-12" data-testid="client-stats-section">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} data-testid={`client-stat-${i}`}>
                <p className="text-3xl lg:text-4xl font-bold text-white font-heading">{s.value}</p>
                <p className="text-orange-100 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Marquee */}
      <section className="section-padding bg-[#F8FAFC]" data-testid="client-marquee-section">
        <div className="container-max mb-12 text-center">
          <p className="text-label mb-3">Companies We've Worked With</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A6E]">Our Valued Clients</h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">A growing network of organizations that trust SCM Group for their staffing and manpower needs.</p>
        </div>
        <div className="overflow-hidden">
          <Marquee speed={40} gradient={true} gradientColor="#F8FAFC" pauseOnHover>
            {clients.map((c) => <ClientLogo key={c} name={c} />)}
          </Marquee>
        </div>
        <div className="mt-8 overflow-hidden">
          <Marquee speed={35} gradient={true} gradientColor="#F8FAFC" direction="right" pauseOnHover>
            {[...clients].reverse().map((c) => <ClientLogo key={c + "_rev"} name={c} />)}
          </Marquee>
        </div>
      </section>

      {/* Industries Supported */}
      <section className="section-padding bg-white" data-testid="industries-supported-section">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-label mb-3">Sector Coverage</p>
            <h2 className="font-heading text-3xl font-bold text-[#1E3A6E]">Industries We Support</h2>
          </motion.div>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                data-testid={`industry-supported-${i}`}
                className="flex items-center gap-3 bg-[#F8FAFC] rounded-lg p-4 border border-gray-100"
              >
                <CheckCircle size={16} className="text-[#E8622A] flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{ind}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#F8FAFC]" data-testid="client-testimonials-section">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-label mb-3">Client Feedback</p>
            <h2 className="font-heading text-3xl font-bold text-[#1E3A6E]">What Our Clients Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} data-testid={`client-testimonial-${i}`} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-[#E8622A]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#E8622A] font-bold font-heading">{t.name.charAt(0)}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <p className="font-heading font-bold text-[#1E3A6E] text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{t.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A6E] py-20" data-testid="clients-cta">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Become Our Next Success Story</h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">Partner with SCM Group and experience staffing solutions that truly deliver results.</p>
            <Link to="/contact" data-testid="clients-contact-cta" className="inline-flex items-center gap-2 bg-[#E8622A] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#D05625] transition-all hover:scale-105">
              Start a Partnership <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
