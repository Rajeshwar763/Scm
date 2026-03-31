import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, ArrowRight } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_scm-it-agency/artifacts/jptn6fqq_WhatsApp%20Image%202026-03-27%20at%2016.53.15.jpeg";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Careers", path: "/careers" },
  { name: "Clients", path: "/clients" },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  "IT Staffing",
  "Manpower Supply",
  "Recruitment Process Outsourcing",
  "Payroll Management",
  "Contract Staffing",
];

export default function Footer() {
  return (
    <footer className="bg-[#0F1C35] text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="inline-block bg-white/10 rounded-xl p-2 mb-4">
              <img src={LOGO_URL} alt="SCM Group" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              SCM Group Management Services — India's trusted IT staffing and manpower solution provider, connecting businesses with top talent across diverse sectors.
            </p>
            <a
              href="https://www.linkedin.com/company/scm-group"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-linkedin-link"
              className="inline-flex items-center gap-2 text-[#E8622A] hover:text-orange-300 transition-colors text-sm"
            >
              <Linkedin size={16} />
              Follow on LinkedIn
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#E8622A] text-sm flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowRight size={12} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-gray-400 text-sm flex items-center gap-1.5">
                  <ArrowRight size={12} className="text-[#E8622A] flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#E8622A] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  12-4-160, Pragathi Nagar, Moosapet, Kukatpally, Hyderabad 500018
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#E8622A] flex-shrink-0" />
                <a href="tel:+918143597569" className="text-gray-400 hover:text-[#E8622A] text-sm transition-colors" data-testid="footer-phone">
                  +91 81435 97569 (Office)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#E8622A] flex-shrink-0" />
                <a href="tel:+917780447171" className="text-gray-400 hover:text-[#E8622A] text-sm transition-colors">
                  +91 77804 47171 (Personal)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#E8622A] flex-shrink-0" />
                <a href="mailto:info@scmgroup-services.com" className="text-gray-400 hover:text-[#E8622A] text-sm transition-colors" data-testid="footer-email">
                  info@scmgroup-services.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#E8622A] flex-shrink-0" />
                <a href="mailto:SCM@scmgroup-services.com" className="text-gray-400 hover:text-[#E8622A] text-sm transition-colors">
                  SCM@scmgroup-services.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2025 SCM Group Management Services. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Hyderabad, Telangana, India</p>
        </div>
      </div>
    </footer>
  );
}
