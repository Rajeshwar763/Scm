# SCM Group Management Services

**Official website for SCM Group Management Services** — a leading IT staffing and manpower agency based in Hyderabad, India.

🌐 **Live Website:** [https://scmgroup-services.com](https://scmgroup-services.com)

---

## About

SCM Group Management Services connects businesses with skilled talent across IT, Manufacturing, Construction, Facility Management, and more. Founded by **Chandramohan Sivala**, SCM Group has grown into a trusted workforce partner for clients across India.

📍 12-4-160, Pragathi Nagar, Moosapet, Kukatpally, Hyderabad 500018  
📞 +91 81435 97569  
📧 info@scmgroup-services.com | info2scmgroup@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/company/scm-group-services/)

---

## Pages

| Page | Description |
|------|-------------|
| Home | Hero, stats, services overview, partner network |
| About | Company story, mission, values, leadership team |
| Services | IT Staffing, Manpower Supply, HR Consulting, Payroll, etc. |
| Industries | IT, Manufacturing, Construction, Healthcare, Retail, and more |
| Careers | Job listings and application portal |
| Clients | Client marquee and partner network |
| Contact | Contact form, map, and business details |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Tailwind CSS, Framer Motion |
| Backend | FastAPI (Python) |
| Database | MongoDB |
| SEO | react-helmet-async |
| Animations | Framer Motion |
| Icons | Lucide React |

---

## Project Structure

```
/app
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/   # Navbar, Footer, WhatsAppButton, SEO
│   │   ├── pages/        # HomePage, AboutPage, ServicesPage, etc.
│   │   └── hooks/
│   └── public/
└── backend/           # FastAPI backend
    ├── server.py
    └── tests/
```

---

## Running Locally

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001
```

### Frontend
```bash
cd frontend
yarn install
yarn start
```

### Environment Variables

**frontend/.env**
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

**backend/.env**
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=scm_group
```

---

## Contact

For business enquiries: [info@scmgroup-services.com](mailto:info@scmgroup-services.com)
