import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Briefcase, TrendingUp, Shield, FileText, CheckCircle, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

const services = [
  {
    icon: Users,
    title: "IT Staffing",
    tagline: "The Right Tech Talent, Right When You Need It",
    img: "https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "We specialize in sourcing, screening, and placing top-tier IT professionals — from software engineers and cloud architects to data scientists and DevOps engineers — with precision and speed.",
    features: [
      "Contract, contract-to-hire, and permanent placements",
      "Specialized skills: Java, Python, .NET, Cloud, AI/ML",
      "Background and reference verification",
      "Rapid turnaround — profiles in 48–72 hours",
    ],
    color: "bg-blue-50",
    iconColor: "text-[#1E3A6E]",
    borderColor: "border-[#1E3A6E]",
  },
  {
    icon: Briefcase,
    title: "Manpower Supply",
    tagline: "Skilled Workers for Every Demand",
    img: "https://images.unsplash.com/photo-1628147529780-36964fbb8d54?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b3JrZm9yY2UlMjBza2lsbGVkJTIwd29ya2VycyUyMHRyYWluaW5nJTIwd29ya3Nob3B8ZW58MHx8fHwxNzc0ODY3MzEzfDA&ixlib=rb-4.1.0&q=85",
    desc: "We provide reliable, job-ready manpower for manufacturing plants, construction sites, and facility operations. Our workers are vetted, trained, and compliant with all statutory requirements.",
    features: [
      "Skilled, semi-skilled, and unskilled categories",
      "Short-term, seasonal, and long-term deployments",
      "On-site supervision and worker management",
      "PF, ESI, and labor compliance ensured",
    ],
    color: "bg-orange-50",
    iconColor: "text-[#E8622A]",
    borderColor: "border-[#E8622A]",
  },
  {
    icon: TrendingUp,
    title: "RPO – Recruitment Process Outsourcing",
    tagline: "Outsource Your Recruitment, Not Your Standards",
    img: "https://images.pexels.com/photos/5439143/pexels-photo-5439143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Our RPO service takes full ownership of your hiring pipeline — from job requisition to onboarding — freeing your HR team to focus on strategic initiatives while we fill positions faster and at lower cost.",
    features: [
      "End-to-end or partial RPO models available",
      "Dedicated recruiter teams per client",
      "ATS integration and analytics reporting",
      "Employer branding and candidate experience management",
    ],
    color: "bg-blue-50",
    iconColor: "text-[#1E3A6E]",
    borderColor: "border-[#1E3A6E]",
  },
  {
    icon: Shield,
    title: "Payroll Management",
    tagline: "Accurate, Compliant, and Hassle-Free",
    img: "https://images.unsplash.com/photo-1565372594646-7e38ab4547c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHBheXJvbGwlMjBzYWxhcnklMjBmaW5hbmNlJTIwYWNjb3VudGluZyUyMG9mZmljZXxlbnwwfHx8fDE3NzQ4NjczMTV8MA&ixlib=rb-4.1.0&q=85",
    desc: "Managing payroll in India is complex — from PF, ESI, and TDS to gratuity and leave encashment. SCM Group's payroll service ensures 100% compliance with Indian labor laws so you can focus on your business.",
    features: [
      "Monthly salary processing and disbursement",
      "PF, ESI, PT, and TDS compliance",
      "Payslip generation and Form 16 issuance",
      "Leave management and expense reimbursements",
    ],
    color: "bg-orange-50",
    iconColor: "text-[#E8622A]",
    borderColor: "border-[#E8622A]",
  },
  {
    icon: FileText,
    title: "Contract Staffing",
    tagline: "Flexible Workforce for Project-Based Needs",
    img: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Get the agility you need with our contract staffing solutions. Hire skilled professionals for specific projects or fixed durations without the long-term commitment, keeping your workforce lean and efficient.",
    features: [
      "Short-term and long-term contracts",
      "Contractual compliance handled by SCM Group",
      "Easy extension or conversion to full-time",
      "Available across IT, engineering, and admin roles",
    ],
    color: "bg-blue-50",
    iconColor: "text-[#1E3A6E]",
    borderColor: "border-[#1E3A6E]",
  },
];

const cardAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ServicesPage() {
  return (
    <div className="font-body">
      <SEO
        title="IT Staffing, Manpower Supply & RPO Services Hyderabad"
        description="Comprehensive staffing services: IT staffing, manpower supply, RPO, payroll management, and contract staffing in Hyderabad, Telangana. SCM Group delivers skilled talent across all industries."
        keywords="IT staffing services Hyderabad, manpower supply Telangana, RPO services India, payroll management Hyderabad, contract staffing India, recruitment outsourcing Hyderabad"
      />
      {/* Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden" data-testid="services-banner">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F1C35]/85" />
        </div>
        <div className="container-max text-center relative z-10">
          <p className="text-[#E8622A] text-xs font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Comprehensive staffing and HR solutions designed to meet the evolving needs of businesses across India.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white" data-testid="services-list">
        <div className="container-max space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...cardAnim}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              data-testid={`service-detail-${s.title.replace(/\s+/g, '-').toLowerCase()}`}
              className={`bg-white rounded-2xl border-l-4 ${s.borderColor} shadow-sm hover:shadow-md transition-shadow overflow-hidden`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className={`w-full md:w-72 h-56 md:h-auto flex-shrink-0 ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className={`p-8 md:p-10 flex-1 ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${s.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <s.icon size={24} className={s.iconColor} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.tagline}</p>
                      <h2 className="font-heading text-xl font-bold text-[#1E3A6E]">{s.title}</h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">{s.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle size={15} className="text-[#E8622A] mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] py-20" data-testid="services-cta">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-label mb-3">Let's Get Started</p>
            <h2 className="font-heading text-3xl font-bold text-[#1E3A6E] mb-4">Have a Specific Staffing Need?</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">Reach out to our team and we'll craft a custom workforce solution that fits your requirements and budget.</p>
            <Link to="/contact" data-testid="services-contact-cta" className="inline-flex items-center gap-2 bg-[#E8622A] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#D05625] transition-all hover:scale-105 shadow-md">
              Request a Consultation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
