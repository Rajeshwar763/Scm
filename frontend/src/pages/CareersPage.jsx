import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp, Upload, CheckCircle, X } from "lucide-react";
import axios from "axios";
import SEO from "../components/SEO";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const jobs = [
  {
    id: 1,
    title: "IT Staffing Consultant",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    experience: "2–5 years",
    department: "IT Staffing",
    desc: "We are looking for an experienced IT Staffing Consultant to source, screen, and place IT professionals with our corporate clients across Hyderabad and PAN India.",
    requirements: [
      "Bachelor's degree in HR, IT, or related field",
      "2+ years of experience in IT recruitment",
      "Strong candidate network across tech domains",
      "Excellent communication and negotiation skills",
    ],
  },
  {
    id: 2,
    title: "HR Business Partner",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    experience: "3–6 years",
    department: "HR Operations",
    desc: "Join our HR team to work closely with clients on talent acquisition strategy, workforce planning, and HR operations. You'll be the bridge between client HR needs and our delivery team.",
    requirements: [
      "MBA in Human Resources or equivalent",
      "3+ years as an HR Business Partner",
      "Strong knowledge of Indian labor laws",
      "Experience in IT or services sector preferred",
    ],
  },
  {
    id: 3,
    title: "Recruitment Specialist – Manufacturing",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "1–3 years",
    department: "Industrial Staffing",
    desc: "Source and recruit skilled, semi-skilled, and unskilled workers for manufacturing clients. You'll understand JD requirements and match the right candidates efficiently.",
    requirements: [
      "Bachelor's degree in any discipline",
      "1+ year in blue-collar or industrial recruitment",
      "Understanding of manufacturing/plant roles",
      "Proficiency with job portals (Naukri, Indeed)",
    ],
  },
  {
    id: 4,
    title: "Account Manager – Corporate Clients",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    experience: "3–5 years",
    department: "Business Development",
    desc: "Manage and grow key corporate client relationships. Responsible for understanding staffing requirements and ensuring excellent service delivery and client satisfaction.",
    requirements: [
      "Bachelor's/MBA degree",
      "3+ years in B2B sales or staffing account management",
      "Strong relationship-building and presentation skills",
      "Experience with CRM tools",
    ],
  },
  {
    id: 5,
    title: "Payroll Executive",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    experience: "1–3 years",
    department: "Payroll & Compliance",
    desc: "Process and manage payroll for our staffing clients. Ensure accurate and timely payroll execution in strict compliance with Indian labor laws and statutory requirements.",
    requirements: [
      "B.Com / MBA Finance",
      "1+ year of payroll processing experience",
      "Working knowledge of PF, ESI, TDS, PT",
      "Proficiency in Tally or payroll software",
    ],
  },
];

function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", experience: "", message: "" });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) { setError("Please fill all required fields."); return; }
    setLoading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("phone", form.phone);
      fd.append("position", job.title);
      fd.append("experience", form.experience);
      fd.append("message", form.message);
      if (file) fd.append("resume", file);
      await axios.post(`${BACKEND_URL}/api/careers/apply`, fd);
      setSuccess(true);
    } catch {
      setError("Failed to submit. Please try again.");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-testid="apply-success-modal">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl p-10 max-w-md w-full text-center">
          <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
          <h3 className="font-heading text-2xl font-bold text-[#1E3A6E] mb-2">Application Submitted!</h3>
          <p className="text-gray-500 mb-6">Thank you for applying for <strong>{job.title}</strong>. We'll review your application and get back to you soon.</p>
          <button onClick={onClose} className="bg-[#1E3A6E] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#163060] transition-colors" data-testid="apply-success-close">Close</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-testid="apply-modal">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="font-heading text-xl font-bold text-[#1E3A6E]">Apply for {job.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{job.location} • {job.type}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors" data-testid="apply-modal-close"><X size={20} /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name *</label>
            <input data-testid="apply-name-input" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/30" placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address *</label>
            <input data-testid="apply-email-input" type="email" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/30" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number *</label>
            <input data-testid="apply-phone-input" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/30" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Years of Experience</label>
            <input data-testid="apply-experience-input" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/30" placeholder="e.g., 3 years" value={form.experience} onChange={e => setForm({...form, experience: e.target.value})} />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Cover Note</label>
            <textarea data-testid="apply-message-input" rows={3} className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/30 resize-none" placeholder="Brief introduction..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Upload Resume (PDF/DOC)</label>
            <label className="flex items-center gap-3 border-2 border-dashed border-gray-200 rounded-md px-4 py-3 cursor-pointer hover:border-[#1E3A6E]/50 transition-colors" data-testid="apply-resume-upload">
              <Upload size={18} className="text-gray-400" />
              <span className="text-sm text-gray-500">{file ? file.name : "Click to upload resume"}</span>
              <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={e => setFile(e.target.files[0])} />
            </label>
          </div>
          {error && <p className="text-red-500 text-sm" data-testid="apply-error">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            data-testid="apply-submit-button"
            className="w-full bg-[#E8622A] text-white py-3 rounded-md font-semibold hover:bg-[#D05625] transition-colors disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div data-testid={`job-card-${job.id}`} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="p-6 cursor-pointer" onClick={() => setExpanded(!expanded)}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-heading font-bold text-[#1E3A6E] text-lg mb-2">{job.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1"><MapPin size={14} className="text-[#E8622A]" />{job.location}</span>
                <span className="flex items-center gap-1"><Clock size={14} className="text-[#E8622A]" />{job.type}</span>
                <span className="flex items-center gap-1"><Briefcase size={14} className="text-[#E8622A]" />{job.experience}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs bg-blue-50 text-[#1E3A6E] px-3 py-1 rounded-full font-medium hidden sm:block">{job.department}</span>
              {expanded ? <ChevronUp size={20} className="text-gray-400 flex-shrink-0" /> : <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />}
            </div>
          </div>
        </div>
        {expanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="border-t border-gray-100 px-6 pb-6">
            <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-5">{job.desc}</p>
            <div className="mb-6">
              <p className="font-semibold text-gray-700 text-sm mb-3">Requirements:</p>
              <ul className="space-y-2">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle size={15} className="text-[#E8622A] mt-0.5 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setShowModal(true); }}
              data-testid={`job-apply-button-${job.id}`}
              className="bg-[#E8622A] text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-[#D05625] transition-colors"
            >
              Apply Now
            </button>
          </motion.div>
        )}
      </div>
      {showModal && <ApplyModal job={job} onClose={() => setShowModal(false)} />}
    </>
  );
}

export default function CareersPage() {
  return (
    <div className="font-body">
      <SEO
        title="Careers | Jobs in HR & Staffing Hyderabad"
        description="Explore job openings at SCM Group Management Services in Hyderabad. We're hiring IT staffing consultants, HR business partners, recruitment specialists, account managers, and payroll executives."
        keywords="HR jobs Hyderabad, staffing jobs Telangana, recruitment specialist jobs India, IT staffing consultant jobs, payroll executive jobs Hyderabad, careers at staffing company"
      />
      {/* Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden" data-testid="careers-banner">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1627599936744-51d288f89af4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxJbmRpYW4lMjBvZmZpY2UlMjB0ZWFtJTIwZ3JvdXAlMjBzbWlsaW5nJTIwd2lkZSUyMHNob3QlMjBwYW5vcmFtaWMlMjBtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBwcm9mZXNzaW9uYWxzfGVufDB8fHx8MTc3NDg2OTYzNXww&ixlib=rb-4.1.0&q=85"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0F1C35]/75" />
        </div>
        <div className="container-max text-center relative z-10">
          <p className="text-[#E8622A] text-xs font-semibold uppercase tracking-widest mb-3">Join Our Team</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Careers at SCM Group</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Be part of a growing team that's transforming how India hires. Explore open positions below.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white" data-testid="why-join-section">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "Growth", label: "Career Growth Opportunities" },
              { value: "Culture", label: "Inclusive Work Environment" },
              { value: "Learning", label: "Continuous Skill Development" },
              { value: "Impact", label: "Make a Real Difference" },
            ].map((item) => (
              <div key={item.value} className="p-6 rounded-xl bg-[#F8FAFC] border border-gray-100">
                <p className="font-heading font-bold text-[#E8622A] text-xl mb-1">{item.value}</p>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-[#F8FAFC]" data-testid="job-listings-section">
        <div className="container-max">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-label mb-2">Current Openings</p>
            <h2 className="font-heading text-3xl font-bold text-[#1E3A6E]">Open Positions ({jobs.length})</h2>
          </motion.div>
          <div className="space-y-4">
            {jobs.map((job) => (
              <motion.div key={job.id} {...fadeUp} transition={{ duration: 0.4 }}>
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="bg-[#1E3A6E] py-16" data-testid="general-application-section">
        <div className="container-max text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-3">Don't See the Right Role?</h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">Send us your resume anyway. We're always looking for exceptional talent to join our growing team.</p>
          <a
            href="mailto:info@scmgroup-services.com"
            data-testid="general-apply-email"
            className="inline-flex items-center gap-2 bg-[#E8622A] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#D05625] transition-colors"
          >
            Email Your Resume
          </a>
        </div>
      </section>
    </div>
  );
}
