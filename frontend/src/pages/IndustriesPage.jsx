import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const industries = [
  {
    name: "Information Technology",
    tagline: "Powering India's Digital Transformation",
    img: "https://images.pexels.com/photos/5453842/pexels-photo-5453842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "We supply IT companies with developers, architects, testers, project managers, and technical leads across all major technology stacks and platforms.",
    roles: ["Software Engineers", "Cloud Architects", "Data Scientists", "DevOps Engineers", "QA Testers", "IT Project Managers"],
  },
  {
    name: "Manufacturing",
    tagline: "Skilled Hands for Production Excellence",
    img: "https://images.unsplash.com/photo-1742535036852-6a13b900bd48?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxJbmRpYW4lMjB3b3JrZm9yY2UlMjBza2lsbGVkJTIwd29ya2VycyUyMHRyYWluaW5nJTIwd29ya3Nob3B8ZW58MHx8fHwxNzc0ODY3MzEzfDA&ixlib=rb-4.1.0&q=85",
    desc: "From assembly line operators to quality control supervisors, we provide skilled manufacturing workforce solutions for plants across India.",
    roles: ["Machine Operators", "Quality Controllers", "Production Supervisors", "Maintenance Technicians", "Warehouse Staff", "Safety Officers"],
  },
  {
    name: "Construction",
    tagline: "Building India's Infrastructure",
    img: "https://images.unsplash.com/photo-1577199001468-44c049e7603f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwaGVsbWV0cyUyMHNhZmV0eSUyMHZlc3RzJTIwYnVpbGRpbmclMjBzaXRlJTIwSW5kaWElMjBmYWNlc3xlbnwwfHx8fDE3NzQ4Njg5OTR8MA&ixlib=rb-4.1.0&q=85",
    desc: "We deploy reliable construction workers, site supervisors, and civil engineers for residential, commercial, and infrastructure projects of all scales.",
    roles: ["Civil Engineers", "Site Supervisors", "Masons & Carpenters", "Electricians & Plumbers", "Safety Supervisors", "Heavy Equipment Operators"],
  },
  {
    name: "Facility Management",
    tagline: "Keeping Workplaces Running Smoothly",
    img: "https://images.unsplash.com/photo-1664077857457-b9bded597e62?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMG1hbiUyMHN3ZWVwaW5nJTIwbW9wcGluZyUyMGZsb29yJTIwY2xlYW5pbmclMjB1bmlmb3JtJTIwZGFyayUyMHNraW4lMjBJbmRpYXxlbnwwfHx8fDE3NzQ4NjkwMjV8MA&ixlib=rb-4.1.0&q=85",
    desc: "Our facility management staffing ensures offices, malls, hospitals, and industrial parks run efficiently with trained housekeeping, security, and maintenance teams.",
    roles: ["Housekeeping Staff", "Security Guards", "Maintenance Technicians", "Pantry Staff", "Front Desk Executives", "Facility Supervisors"],
  },
  {
    name: "International Staffing",
    tagline: "Taking Indian Talent to the World",
    img: "https://images.pexels.com/photos/6720251/pexels-photo-6720251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "SCM Group facilitates international placements for skilled Indian professionals seeking opportunities in the Gulf, Southeast Asia, and beyond.",
    roles: ["Gulf Placements", "Engineering & Technical Roles", "Healthcare Professionals", "Skilled Trade Workers", "Hospitality Staff", "Document & Visa Assistance"],
  },
];

export default function IndustriesPage() {
  return (
    <div className="font-body">
      {/* Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden" data-testid="industries-banner">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32467382/pexels-photo-32467382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F1C35]/85" />
        </div>
        <div className="container-max text-center relative z-10">
          <p className="text-[#E8622A] text-xs font-semibold uppercase tracking-widest mb-3">Sectors We Power</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Industries We Serve</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Deep industry expertise across 5 major sectors, delivering workforce solutions that match the unique demands of each.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-white" data-testid="industries-list">
        <div className="container-max space-y-16">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-testid={`industry-detail-${ind.name.replace(/\s+/g, '-').toLowerCase()}`}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <img src={ind.img} alt={ind.name} className="w-full h-72 object-cover rounded-2xl shadow-lg" />
              </div>
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <p className="text-label mb-2">{ind.tagline}</p>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E3A6E] mb-4">{ind.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{ind.desc}</p>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">Key Roles We Fill:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {ind.roles.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="text-[#E8622A] flex-shrink-0" />
                        {r}
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
      <section className="bg-[#1E3A6E] py-20" data-testid="industries-cta">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Don't See Your Industry?</h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">We work across many more sectors. Contact us to discuss your specific manpower requirements.</p>
            <Link to="/contact" data-testid="industries-contact-cta" className="inline-flex items-center gap-2 bg-[#E8622A] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#D05625] transition-all hover:scale-105">
              Discuss Your Needs <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
