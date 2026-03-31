import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import SEO from "../components/SEO";

const partners = [
  {
    name: "Visista Visas",
    url: "https://visistavisas.com/",
    category: "Visa & Immigration",
    description: "Expert employment visa consultancy for USA, UK, Europe & Dubai. Trusted immigration specialists based in Hyderabad.",
    domain: "visistavisas.com",
    initials: "VV",
    bg: "#1B4B9A",
  },
  {
    name: "Vaakruthi",
    url: "https://www.vaakruthi.com/",
    category: "Staffing & HR Tech",
    description: "Leading global recruitment, training & placement, RPO, and software development services since 2015.",
    domain: "vaakruthi.com",
    initials: "VK",
    bg: "#E8622A",
  },
  {
    name: "Metrickn",
    url: "https://metrickn.in/",
    category: "Migration & Education",
    description: "Global education consultancy helping students secure admissions and visas for universities in USA, UK, Canada & Australia.",
    domain: "metrickn.in",
    initials: "MK",
    bg: "#2E7D32",
  },
  {
    name: "Zero-Carbon",
    url: "https://zero-carbon.de/",
    category: "Green Technology",
    description: "World's first zero-carbon streaming & digital platform powered by AI, blockchain & 100% renewable energy.",
    domain: "zero-carbon.de",
    initials: "ZC",
    bg: "#1B6B35",
  },
  {
    name: "Star Global Alliance",
    url: "https://starglobalalliance.com/",
    category: "Immigration & Education",
    description: "OMARA-authorized immigration consultancy for Australia, Canada, New Zealand, UK & USA. Established in 2001.",
    domain: "starglobalalliance.com",
    initials: "SG",
    bg: "#C0392B",
  },
  {
    name: "Wish Global",
    url: "https://wishglobalimmigrationservices.com/",
    category: "Visa & Immigration",
    description: "Trusted visa and immigration consultant in Hyderabad with 10+ years helping students, professionals and families.",
    domain: "wishglobalimmigrationservices.com",
    initials: "WG",
    bg: "#5B2D8E",
  },
  {
    name: "Peddireddi Tours",
    url: "https://www.peddireddi.in/",
    category: "Travel & Tourism",
    description: "Budget-friendly Europe tours with guides fluent in regional Indian languages, plus full Schengen visa assistance.",
    domain: "peddireddi.in",
    initials: "PT",
    bg: "#D35400",
  },
  {
    name: "Pudami Designs",
    url: "https://www.pudamidesigns.com/",
    category: "Design & Marketing",
    description: "Creative design agency in Vijayawada & Hyderabad offering branding, web design, digital marketing, and social media.",
    domain: "pudamidesigns.com",
    initials: "PD",
    bg: "#7D3C98",
  },
  {
    name: "Skyra Interiors",
    url: "https://skyrainteriors.com/",
    category: "Interior & Construction",
    description: "Full-service interior painting, waterproofing, and construction solutions at below-market prices across India.",
    domain: "skyrainteriors.com",
    initials: "SI",
    bg: "#2C3E50",
  },
];

function PartnerCard({ p, index }) {
  const [imgErr, setImgErr] = useState(false);
  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`partner-card-${index}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 bg-gray-50 border border-gray-100">
          {!imgErr ? (
            <img
              src={`https://logo.clearbit.com/${p.domain}`}
              alt={p.name}
              className="w-full h-full object-contain p-1.5"
              onError={() => setImgErr(true)}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-white font-bold text-base font-heading"
              style={{ backgroundColor: p.bg }}
            >
              {p.initials}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <span className="text-xs font-semibold text-[#E8622A] uppercase tracking-wider block mb-0.5">{p.category}</span>
          <h3 className="font-heading font-bold text-[#1E3A6E] text-base leading-tight">{p.name}</h3>
        </div>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{p.description}</p>
      <div className="mt-4 flex items-center gap-1.5 text-[#E8622A] text-sm font-semibold group-hover:gap-2.5 transition-all">
        Visit Website <ExternalLink size={13} />
      </div>
    </motion.a>
  );
}

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

const pageAnim = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function ClientsPage() {
  return (
    <div className="font-body">
      <SEO
        title="Our Clients | Trusted Manpower Agency Hyderabad"
        description="SCM Group serves 50+ corporate clients across IT, manufacturing, construction, and facility sectors in India. Trusted manpower and IT staffing partner in Hyderabad, Telangana."
        keywords="staffing agency clients Hyderabad, manpower company Telangana, IT staffing clients India, corporate clients SCM Group, trusted staffing company Hyderabad"
      />
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
              <motion.div key={s.label} {...pageAnim} transition={{ delay: i * 0.1 }} data-testid={`client-stat-${i}`}>
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
          <motion.div {...pageAnim} className="text-center mb-12">
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
          <motion.div {...pageAnim} className="text-center mb-12">
            <p className="text-label mb-3">Client Feedback</p>
            <h2 className="font-heading text-3xl font-bold text-[#1E3A6E]">What Our Clients Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...pageAnim} transition={{ delay: i * 0.1 }} data-testid={`client-testimonial-${i}`} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
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

      {/* Partners */}
      <section className="section-padding bg-white" data-testid="partners-section">
        <div className="container-max">
          <motion.div {...pageAnim} className="text-center mb-14">
            <p className="text-label mb-3">Strategic Alliances</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E3A6E]">Our Partner Network</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We collaborate with a curated network of trusted partners across immigration, education, technology, design, and more — extending our value to clients beyond staffing.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <PartnerCard key={p.domain} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A6E] py-20" data-testid="clients-cta">
        <div className="container-max text-center">
          <motion.div {...pageAnim}>
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
