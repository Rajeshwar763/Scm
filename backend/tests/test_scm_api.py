import pytest
import requests
import os
from typing import Any

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

# Health check
class TestHealth:
    def test_api_root(self) -> None:
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data: dict[str, Any] = r.json()
        assert data.get("message") == "SCM Group API is running"

# Contact form
class TestContact:
    def test_submit_contact(self) -> None:
        payload: dict[str, str] = {
            "name": "TEST_User",
            "email": "test@example.com",
            "phone": "+91 9000012345",
            "company": "Test Corp",
            "service": "IT Staffing",
            "message": "This is a test message"
        }
        r = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        data: dict[str, Any] = r.json()
        assert data["success"]

    def test_contact_missing_required(self) -> None:
        # Missing message field
        payload: dict[str, str] = {"name": "TEST_User", "email": "test@example.com"}
        r = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422

    def test_get_contact_submissions(self) -> None:
        r = requests.get(f"{BASE_URL}/api/contact/submissions")
        assert r.status_code == 200
        assert isinstance(r.json(), list)

# Career applications
class TestCareers:
    def test_submit_career_application(self) -> None:
        data: dict[str, str] = {
            "name": "TEST_Applicant",
            "email": "applicant@test.com",
            "phone": "+91 9876543210",
            "position": "Software Engineer",
            "experience": "3 years",
            "message": "I am interested"
        }
        r = requests.post(f"{BASE_URL}/api/careers/apply", data=data)
        assert r.status_code == 200
        resp: dict[str, Any] = r.json()
        assert resp["success"]

    def test_career_application_missing_required(self) -> None:
        # Missing email
        data: dict[str, str] = {"name": "TEST_Applicant", "phone": "1234567890", "position": "Dev"}
        r = requests.post(f"{BASE_URL}/api/careers/apply", data=data)
        assert r.status_code == 422

    def test_get_career_applications(self) -> None:
        r = requests.get(f"{BASE_URL}/api/careers/applications")
        assert r.status_code == 200
        assert isinstance(r.json(), list)
