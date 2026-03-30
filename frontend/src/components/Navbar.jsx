import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_scm-it-agency/artifacts/jptn6fqq_WhatsApp%20Image%202026-03-27%20at%2016.53.15.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Careers", path: "/careers" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-md"
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center flex-shrink-0" data-testid="nav-logo">
            <img src={LOGO_URL} alt="SCM Group" className="h-10 lg:h-14 w-auto object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase()}-link`}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-[#E8622A] bg-orange-50"
                    : "text-[#1E3A6E] hover:text-[#E8622A] hover:bg-orange-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Link
              to="/contact"
              data-testid="nav-cta-button"
              className="bg-[#E8622A] text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-[#D05625] transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
            >
              Get Manpower
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#1E3A6E] rounded-md"
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-mobile-${link.name.toLowerCase()}-link`}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-[#E8622A] bg-orange-50"
                    : "text-[#1E3A6E] hover:bg-orange-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              data-testid="nav-mobile-cta-button"
              className="block mt-3 bg-[#E8622A] text-white text-center px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#D05625] transition-colors"
            >
              Get Manpower
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
