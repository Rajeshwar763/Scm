import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Briefcase, Award, Globe, ArrowRight, CheckCircle, Star, TrendingUp, Shield, Clock } from "lucide-react";
import SEO from "../components/SEO";

const HERO_IMG = "https://images.pexels.com/photos/7580750/pexels-photo-7580750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const ABOUT_IMG = "https://images.unsplash.com/photo-1628495073765-e7fdbb7c25fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBkaXZlcnNlJTIwb2ZmaWNlJTIwdGVhbSUyMHdvcmtpbmclMjB0b2dldGhlciUyMGxhcHRvcCUyMGJyYWluc3Rvcm1pbmd8ZW58MHx8fHwxNzc0ODY3NjgyfDA&ixlib=rb-4.1.0&q=85";

const stats = [
  { value: "500+", label: "Successful Placements", icon: Users },
  { value: "50+", label: "Corporate Clients", icon: Briefcase },
  { value: "10+", label: "Years of Excellence", icon: Award },
  { value: "15+", label: "Industry Sectors", icon: Globe },
];

const services = [
  { icon: Users, title: "IT Staffing", desc: "Source and place top-tier IT professionals — developers, architects, analysts — with precision and speed.", color: "bg-blue-50 text-[#1E3A6E]" },
  { icon: Briefcase, title: "Manpower Supply", desc: "Reliable supply of skilled and semi-skilled workers for manufacturing, construction, and facility sectors.", color: "bg-orange-50 text-[#E8622A]" },
  { icon: TrendingUp, title: "RPO Services", desc: "End-to-end Recruitment Process Outsourcing to streamline your talent acquisition pipeline.", color: "bg-blue-50 text-[#1E3A6E]" },
  { icon: Shield, title: "Payroll Management", desc: "Accurate and compliant payroll processing with full PF, ESI, and statutory compliance in India.", color: "bg-orange-50 text-[#E8622A]" },
];

const industries = [
  { name: "Information Technology", img: "https://images.pexels.com/photos/5453842/pexels-photo-5453842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { name: "Manufacturing", img: "https://images.unsplash.com/photo-1742535036852-6a13b900bd48?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxJbmRpYW4lMjB3b3JrZm9yY2UlMjBza2lsbGVkJTIwd29ya2VycyUyMHRyYWluaW5nJTIwd29ya3Nob3B8ZW58MHx8fHwxNzc0ODY3MzEzfDA&ixlib=rb-4.1.0&q=85" },
  { name: "Construction", img: "https://images.unsplash.com/photo-1577199001468-44c049e7603f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwaGVsbWV0cyUyMHNhZmV0eSUyMHZlc3RzJTIwYnVpbGRpbmclMjBzaXRlJTIwSW5kaWElMjBmYWNlc3xlbnwwfHx8fDE3NzQ4Njg5OTR8MA&ixlib=rb-4.1.0&q=85" },
  { name: "Facility Management", img: "https://images.unsplash.com/photo-1664077857457-b9bded597e62?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMG1hbiUyMHN3ZWVwaW5nJTIwbW9wcGluZyUyMGZsb29yJTIwY2xlYW5pbmclMjB1bmlmb3JtJTIwZGFyayUyMHNraW4lMjBJbmRpYXxlbnwwfHx8fDE3NzQ4NjkwMjV8MA&ixlib=rb-4.1.0&q=85" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "CTO, TechVision India", text: "SCM Group delivered 30+ IT professionals for our digital transformation project on time. Their quality and responsiveness is truly unmatched in the industry.", rating: 5 },
  { name: "Priya Mehta", role: "HR Director, ManufacturePro Ltd", text: "We've relied on SCM Group for our factory staffing needs for 3 years. They consistently provide skilled, reliable workers exactly when we need them.", rating: 5 },
  { name: "Arvind Singh", role: "VP Operations, BuildRight Corp", text: "Our construction projects stay on schedule because SCM provides dependable manpower solutions. Highly recommended for any growing organization!", rating: 5 },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function HomePage() {
  return (
    <div className="font-body">
      <SEO
        title="IT Staffing & Manpower Agency Hyderabad"
        description="SCM Group Management Services — Leading IT staffing, manpower supply, RPO, and payroll management agency in Hyderabad, Telangana. Trusted by 50+ corporate clients across India."
        keywords="IT staffing Hyderabad, manpower agency Telangana, manpower supply Hyderabad, IT recruitment agency India, staffing company Hyderabad, contract staffing Telangana, payroll management India"
      />
      <section className="relative min-h-screen flex items-center" data-testid="hero-section">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C35]/95 via-[#1E3A6E]/80 to-[#1E3A6E]/40" />
        </div>
        <div className="relative z-10 container-max pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-[#E8622A]/20 border border-[#E8622A]/40 text-[#E8622A] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              India's Trusted Staffing Partner
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Trusted <span className="text-[#E8622A]">Manpower</span> &amp; IT Staffing Partner
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              SCM Group Management Services connects businesses with skilled talent across IT, Manufacturing, Construction, and more. We deliver tailored workforce solutions that drive real results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                data-testid="hero-cta-primary"
                className="bg-[#E8622A] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#D05625] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
              >
                Get Manpower Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                data-testid="hero-cta-secondary"
                className="border-2 border-white/60 text-white px-8 py-3.5 rounded-md font-semibold hover:bg-white hover:text-[#1E3A6E] transition-all duration-200 inline-flex items-center gap-2"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1E3A6E] py-12" data-testid="stats-section">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
                data-testid={`stat-${i}`}
              >
                <p className="text-3xl lg:text-4xl font-bold text-[#E8622A] font-heading">{s.value}</p>
                <p className="text-white/80 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="section-padding bg-white" data-testid="about-intro-section">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="text-label mb-3">Who We Are</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A6E] leading-tight mb-6">
                Building Workforce Solutions That Matter
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-6">
                Founded in Hyderabad, SCM Group Management Services is a premier staffing and manpower agency dedicated to bridging the gap between talented professionals and the organizations that need them most.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3 mb-8">
                {["End-to-end staffing across industries", "Compliance-first payroll management", "Pan-India recruitment network", "Dedicated client relationship team"].map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle size={18} className="text-[#E8622A] flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link to="/about" data-testid="about-learn-more-link" className="inline-flex items-center gap-2 text-[#1E3A6E] font-semibold hover:text-[#E8622A] transition-colors">
                  Learn More About Us <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img src={ABOUT_IMG} alt="SCM Group Team" className="w-full h-[420px] object-cover rounded-2xl shadow-xl" />
              <div className="absolute -bottom-6 -left-6 bg-[#E8622A] text-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold font-heading">10+</p>
                <p className="text-sm text-orange-100">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-[#F8FAFC]" data-testid="services-section">
        <div className="container-max">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-label mb-3">What We Do</motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A6E]">
              Comprehensive Workforce Solutions
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From IT staffing to payroll management, we offer a complete suite of HR and manpower services tailored to your business needs.
            </motion.p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                data-testid={`service-card-${s.title.replace(/\s+/g, '-').toLowerCase()}`}
                className="bg-white p-8 rounded-xl border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <s.icon size={22} />
                </div>
                <h3 className="font-heading font-semibold text-[#1E3A6E] text-lg mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <Link to="/services" className="text-[#E8622A] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/services" data-testid="services-view-all-link" className="inline-flex items-center gap-2 bg-[#1E3A6E] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#163060] transition-colors">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-white" data-testid="industries-section">
        <div className="container-max">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-label mb-3">Sectors We Power</motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A6E]">Industries We Serve</motion.h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <motion.div
                key={ind.name}
                variants={fadeUp}
                data-testid={`industry-card-${ind.name.replace(/\s+/g, '-').toLowerCase()}`}
                className="relative h-60 rounded-xl overflow-hidden group cursor-pointer"
              >
                <img src={ind.img} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C35]/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="font-heading font-semibold text-white text-base">{ind.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/industries" data-testid="industries-view-all-link" className="inline-flex items-center gap-2 text-[#1E3A6E] font-semibold hover:text-[#E8622A] transition-colors border-2 border-[#1E3A6E] hover:border-[#E8622A] px-8 py-3 rounded-md">
              All Industries <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#F8FAFC]" data-testid="testimonials-section">
        <div className="container-max">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-label mb-3">Client Success</motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A6E]">What Our Clients Say</motion.h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                data-testid={`testimonial-card-${i}`}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} size={16} className="text-[#E8622A] fill-[#E8622A]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-heading font-semibold text-[#1E3A6E]">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A6E] py-20" data-testid="cta-section">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[#E8622A] text-xs font-semibold uppercase tracking-widest mb-4">Get Started Today</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Tell us your workforce requirements and we'll match you with the right talent — fast, reliable, and within your budget.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                data-testid="cta-contact-button"
                className="bg-[#E8622A] text-white px-10 py-4 rounded-md font-semibold hover:bg-[#D05625] transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2"
              >
                Contact Us Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/careers"
                data-testid="cta-careers-button"
                className="border-2 border-white/40 text-white px-10 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
