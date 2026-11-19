from typing import Optional, List
from pydantic import BaseModel, EmailStr, Field


class CandidateBase(BaseModel):
    name: str = Field(..., example="Jane Doe")
    email: EmailStr = Field(..., example="jane.doe@example.com")
    role: str = Field(..., example="Senior Software Engineer")
    skills: List[str] = Field(default_factory=list, example=["Python", "FastAPI", "React"])
    experience_years: int = Field(default=0, ge=0, example=5)


class CandidateCreate(CandidateBase):
    pass


class Candidate(CandidateBase):
    id: str
    status: str = Field(default="Applied", example="Shortlisted")

    class Config:
        from_attributes = True
