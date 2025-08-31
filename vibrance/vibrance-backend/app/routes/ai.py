from fastapi import APIRouter
import random

router = APIRouter(tags=["AI"])

@router.post("/chat")
def chat(message: str):
    # Placeholder AI response
    responses = ["Interesting!", "Tell me more.", "I see.", "That makes sense."]
    return {"response": random.choice(responses)}
