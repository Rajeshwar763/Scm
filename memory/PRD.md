# SCM Group Management Services — Corporate Website

## Problem Statement
Create a modern, professional corporate website for SCM Group Management Services, an IT staffing and manpower agency in Hyderabad, India. The website features a clean corporate design with Navy Blue (#1E3A6E) and Orange (#E8622A) brand colors, catering to corporate clients needing skilled manpower. Responsive, SEO-friendly, and includes multiple pages.

## Company Details
- **Company**: SCM Group Management Services
- **Address**: H.no.4-106, Pragathi Nagar, Moosapet, Balanagar, Rangareddy, Telangana 500018
- **Phone**: +91 90000 12345 (placeholder — needs update)
- **Email**: info@scmgroup.in (placeholder — needs update)
- **Brand Colors**: Navy Blue #1E3A6E + Orange #E8622A
- **Fonts**: Outfit (headings), DM Sans (body)

## Architecture
- **Frontend**: React 19 + Tailwind CSS + framer-motion + react-fast-marquee
- **Backend**: FastAPI + MongoDB (Motor)
- **Routing**: React Router v7

## Pages Implemented (All 7)
1. `/` — Home (Hero, Stats, About intro, Services, Industries, Testimonials, CTA)
2. `/about` — About (Company story, Mission/Vision, Values, Leadership)
3. `/services` — Services (IT Staffing, Manpower Supply, RPO, Payroll, Contract Staffing)
4. `/industries` — Industries (IT, Manufacturing, Construction, Facility Management, International)
5. `/careers` — Careers (Job listings, Apply modal with resume upload)
6. `/clients` — Clients (Marquee, Stats, Industry coverage, Testimonials)
7. `/contact` — Contact (Form, Map, Contact info cards)

## Backend Endpoints
- `GET /api/` — Health check
- `POST /api/contact` — Submit contact form (saves to MongoDB)
- `POST /api/careers/apply` — Submit job application with resume upload
- `GET /api/contact/submissions` — View all contact submissions
- `GET /api/careers/applications` — View all career applications

## What's Been Implemented
- [2025-03] Full 7-page corporate website built from scratch
- [2025-03] Sticky glassmorphism navbar with mobile hamburger menu
- [2025-03] Footer with logo, quick links, services, contact info
- [2025-03] Contact form with MongoDB storage
- [2025-03] Career application modal with file upload
- [2025-03] Industry marquee (react-fast-marquee)
- [2025-03] Framer-motion scroll animations
- [2025-03] All data-testid attributes on interactive elements
- [2025-03] Full test suite passed (100% backend, 100% frontend)

## Backlog / Next Steps (P0–P2)
### P0 (Critical)
- Update placeholder phone number (+91 90000 12345) with real number
- Update placeholder email (info@scmgroup.in) with real email

### P1 (Important)
- Add admin dashboard to view contact form submissions and career applications
- Add real client logos/images to replace text-based client cards
- Add real leadership team photos
- Update LinkedIn URL with actual SCM Group LinkedIn page

### P2 (Nice to Have)
- SEO meta tags (title, description, OG tags per page)
- WhatsApp chat widget
- Google Analytics integration
- Blog/News section
- Email notification on form submission (Resend/SendGrid)
