import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, Award, CheckCircle, ArrowRight } from "lucide-react";

const TEAM_IMG = "https://images.pexels.com/photos/8127807/pexels-photo-8127807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const values = [
  { icon: Shield, title: "Integrity", desc: "We operate with full transparency and ethical conduct in every client and candidate interaction." },
  { icon: Award, title: "Excellence", desc: "We strive to exceed expectations by delivering the highest quality talent and service consistently." },
  { icon: Heart, title: "Commitment", desc: "Our dedication to clients and candidates drives us to go the extra mile at every stage." },
  { icon: Users, title: "Partnership", desc: "We build long-term relationships based on trust, collaboration, and mutual success." },
];

const leadership = [
  { name: "Suresh Reddy", role: "Founder & CEO", desc: "15+ years in HR and staffing with a vision to transform manpower solutions in India." },
  { name: "Chandra Mohan", role: "Director - Operations", desc: "Expert in process optimization and building high-performing recruitment teams." },
  { name: "Lakshmi Prasad", role: "Head - IT Staffing", desc: "Specialist in IT talent acquisition with deep networks across the tech industry." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function AboutPage() {
  return (
    <div className="font-body">
      {/* Page Banner */}
      <section className="bg-gradient-to-r from-[#0F1C35] to-[#1E3A6E] pt-32 pb-20" data-testid="about-banner">
        <div className="container-max text-center">
          <p className="text-[#E8622A] text-xs font-semibold uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">About SCM Group</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            A decade of connecting businesses with exceptional talent across India's fastest-growing industries.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white" data-testid="company-overview">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src={TEAM_IMG} alt="SCM Group Team" className="w-full h-[440px] object-cover rounded-2xl shadow-xl" />
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="text-label mb-3">Our Company</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A6E] mb-6">
                Empowering Businesses Through People
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
                SCM Group Management Services was founded with a single mission: to simplify how businesses find, hire, and manage skilled talent in India. Based in Hyderabad, we have grown into a trusted manpower partner for companies across IT, manufacturing, construction, and facility management.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-6">
                With over a decade of experience, we bring deep industry knowledge, a vast talent network, and a client-first approach to every engagement. Whether you need 5 IT professionals or 500 factory workers, we deliver with speed, quality, and compliance.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-2.5 mb-8">
                {["Pan-India sourcing network", "Industry-specific expertise", "100% statutory compliance", "Dedicated account managers"].map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle size={17} className="text-[#E8622A] flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E8622A] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#D05625] transition-colors">
                  Work With Us <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#F8FAFC]" data-testid="mission-vision">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-label mb-3">Our Purpose</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A6E]">Mission &amp; Vision</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} data-testid="mission-card" className="bg-white p-10 rounded-2xl border-l-4 border-[#E8622A] shadow-sm">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <Target size={28} className="text-[#E8622A]" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#1E3A6E] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide reliable, efficient, and compliant manpower solutions that empower businesses to focus on growth while we handle their most critical resource — people. We aim to be the go-to staffing partner for every organization in India.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} data-testid="vision-card" className="bg-white p-10 rounded-2xl border-l-4 border-[#1E3A6E] shadow-sm">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Eye size={28} className="text-[#1E3A6E]" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#1E3A6E] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as India's most trusted and innovative workforce solutions company — known for transforming how businesses recruit, deploy, and manage talent at scale, with a commitment to quality and integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white" data-testid="core-values">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-label mb-3">What Drives Us</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A6E]">Our Core Values</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} variants={fadeUp} data-testid={`value-card-${v.title.toLowerCase()}`} className="text-center p-8 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 ${i % 2 === 0 ? "bg-orange-100" : "bg-blue-100"}`}>
                  <v.icon size={24} className={i % 2 === 0 ? "text-[#E8622A]" : "text-[#1E3A6E]"} />
                </div>
                <h3 className="font-heading font-bold text-[#1E3A6E] text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-[#F8FAFC]" data-testid="leadership-section">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-label mb-3">Meet the Team</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A6E]">Our Leadership</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadership.map((l, i) => (
              <motion.div key={l.name} variants={fadeUp} data-testid={`leader-card-${i}`} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center p-8">
                <div className="w-20 h-20 bg-[#1E3A6E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-heading font-bold text-2xl">{l.name.charAt(0)}</span>
                </div>
                <h3 className="font-heading font-bold text-[#1E3A6E] text-lg">{l.name}</h3>
                <p className="text-[#E8622A] text-xs font-semibold uppercase tracking-wider mt-1 mb-3">{l.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{l.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
