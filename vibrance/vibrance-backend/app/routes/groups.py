from fastapi import APIRouter, Depends
from app.utils.jwt_handler import get_current_user

router = APIRouter(tags=["Groups"])

groups = []

@router.get("/")
def get_groups(user: str = Depends(get_current_user)):
    return groups

@router.post("/")
def create_group(name: str, user: str = Depends(get_current_user)):
    group = {"name": name, "members": [user]}
    groups.append(group)
    return group
