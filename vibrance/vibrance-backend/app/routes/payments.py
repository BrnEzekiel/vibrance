from fastapi import APIRouter
import requests

router = APIRouter(tags=["Payments"])

INTASEND_API_URL = "https://sandbox.intasend.com/api/v1/payment/collection/"
INTASEND_API_KEY = "your_intasend_api_key_here"

@router.post("/pay")
def make_payment(amount: float, phone: str):
    payload = {"amount": amount, "phone_number": phone, "currency": "KES"}
    headers = {"Authorization": f"Bearer {INTASEND_API_KEY}"}
    response = requests.post(INTASEND_API_URL, json=payload, headers=headers)
    return response.json()
