from fastapi import FastAPI, APIRouter, UploadFile, File, Form
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# ---------- Models ----------

class ContactMessage(BaseModel):
    name: str
    email: str
    phone: str = ""
    company: str = ""
    service: str = ""
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str

class ApplicationResponse(BaseModel):
    success: bool
    message: str

# ---------- Routes ----------

@api_router.get("/")
async def root():
    return {"message": "SCM Group API is running"}

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(data: ContactMessage):
    try:
        doc = data.model_dump()
        doc["id"] = str(uuid.uuid4())
        doc["timestamp"] = datetime.now(timezone.utc).isoformat()
        await db.contact_submissions.insert_one(doc)
        logger.info(f"Contact form submitted by {data.email}")
        return ContactResponse(success=True, message="Thank you! We'll get back to you within 24 hours.")
    except Exception as e:
        logger.error(f"Contact submission error: {e}")
        return JSONResponse(status_code=500, content={"success": False, "message": "Server error. Please try again."})

@api_router.post("/careers/apply", response_model=ApplicationResponse)
async def apply_career(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    position: str = Form(...),
    experience: str = Form(""),
    message: str = Form(""),
    resume: Optional[UploadFile] = File(None),
):
    try:
        doc = {
            "id": str(uuid.uuid4()),
            "name": name,
            "email": email,
            "phone": phone,
            "position": position,
            "experience": experience,
            "message": message,
            "resume_filename": resume.filename if resume else "",
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }
        await db.career_applications.insert_one(doc)
        logger.info(f"Career application submitted by {email} for {position}")
        return ApplicationResponse(success=True, message="Application submitted! We'll be in touch soon.")
    except Exception as e:
        logger.error(f"Career application error: {e}")
        return JSONResponse(status_code=500, content={"success": False, "message": "Server error. Please try again."})

@api_router.get("/contact/submissions")
async def get_contact_submissions():
    submissions = await db.contact_submissions.find({}, {"_id": 0}).to_list(100)
    return submissions

@api_router.get("/careers/applications")
async def get_career_applications():
    applications = await db.career_applications.find({}, {"_id": 0}).to_list(100)
    return applications

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
