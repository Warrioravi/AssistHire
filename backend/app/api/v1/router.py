from typing import List
from fastapi import APIRouter
from app.schemas.candidate import Candidate, CandidateCreate
import uuid

router = APIRouter()

# In-memory mock database for initial setup
mock_candidates: List[Candidate] = [
    Candidate(
        id="c1",
        name="Alex Morgan",
        email="alex.morgan@example.com",
        role="Full Stack Developer",
        skills=["React", "TypeScript", "Python", "FastAPI"],
        experience_years=4,
        status="Screening",
    ),
    Candidate(
        id="c2",
        name="Samantha Reed",
        email="samantha.reed@example.com",
        role="Product Designer",
        skills=["Figma", "UI/UX", "User Research", "Design Systems"],
        experience_years=6,
        status="Interview",
    ),
]


@router.get("/candidates", response_model=List[Candidate], summary="List all candidates")
def get_candidates():
    """Retrieve list of candidates."""
    return mock_candidates


@router.post("/candidates", response_model=Candidate, summary="Add a candidate")
def create_candidate(candidate_in: CandidateCreate):
    """Add a new candidate."""
    new_candidate = Candidate(
        id=f"c{uuid.uuid4().hex[:6]}",
        status="Applied",
        **candidate_in.model_dump(),
    )
    mock_candidates.append(new_candidate)
    return new_candidate
