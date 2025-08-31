from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta
from app.utils.jwt_handler import create_access_token

router = APIRouter(tags=["Auth"])

@router.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # Dummy validation (replace with DB check)
    if form_data.username != "admin" or form_data.password != "admin":
        raise HTTPException(status_code=401, detail="Invalid credentials")
    access_token = create_access_token(data={"sub": form_data.username}, expires_delta=timedelta(hours=1))
    return {"access_token": access_token, "token_type": "bearer"}
