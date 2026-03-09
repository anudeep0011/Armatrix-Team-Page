from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import sqlite3
import os

app = FastAPI(title="Armatrix Team API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Database Setup Setup
DB_FILE = "team.db"

def get_db():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()

def init_db():
    with sqlite3.connect(DB_FILE) as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS team_members (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                role TEXT NOT NULL,
                bio TEXT,
                photo_url TEXT,
                linkedin_url TEXT,
                category TEXT NOT NULL
            )
        """)
        
        # Check if table is empty, if so, seed it
        cursor = conn.cursor()
        cursor.execute("SELECT COUNT(*) FROM team_members")
        if cursor.fetchone()[0] == 0:
            seed_data = [
                # Co-founders
                ("Prateesh Awasthi", "Co-Founder", "", "/Images/co-founders/Screenshot 2026-03-09 192646.png", "https://www.linkedin.com/in/prateesh-awasthi-4a5215109/", "co-founders"),
                ("Ayush Ranjan", "Co-Founder", "", "/Images/co-founders/Screenshot 2026-03-09 192556.png", "https://www.linkedin.com/in/ayranjan/", "co-founders"),
                ("Vishrant Dave", "Co-Founder and CEO", "", "/Images/co-founders/Screenshot 2026-03-09 192348.png", "https://www.linkedin.com/in/vishrant-dave/", "co-founders"),
                
                # Founding Engineers
                ("Anushtup Nandy", "Control Systems Engineer", "Designs advanced control systems for autonomous robotic manipulation. Works on model predictive control (MPC), enabling hyper-redundant robotic arms to navigate complex industrial environments with high precision.", "/Images/founding-engineers/Screenshot 2026-03-09 192931.png", "https://www.linkedin.com/in/anushtup-nandy/", "founding-engineers"),
                ("Pulkit Sinha", "Founding Engineer", "Leads the development of customer-facing software systems, building tools that allow users to interact with and operate Armatrix robotic platforms efficiently.", "/Images/founding-engineers/Screenshot 2026-03-09 192902.png", "https://www.linkedin.com/in/pulkit-sinha-803907200/", "founding-engineers"),
                ("Shashank Singh Tomar", "Mechatronics Engineer", "Works on the design, integration, and testing of robotic hardware systems, combining mechanical design, electronics, sensors, and control systems to build reliable robotic platforms.", "/Images/Engineering/Screenshot 2026-03-09 193356.png", "https://www.linkedin.com/in/shashank-singh-tomar-773834234/", "engineering"),
                
                # Operations
                ("Akshat Khandelwal", "Head of Operations", "Leads operations at Armatrix, overseeing partnerships, logistics, and internal coordination to ensure smooth execution of robotics development and deployment.", "/Images/operations/Screenshot 2026-03-09 193425.png", "https://www.linkedin.com/in/akshatgokul/", "operations"),
                ("Sounak Senapati", "Chief of Staff", "Supports leadership strategy and cross-team coordination, ensuring alignment between engineering, operations, and organizational initiatives at Armatrix.", "/Images/operations/Screenshot 2026-03-09 193241.png", "https://www.linkedin.com/in/sounak-senapati-8442a7174/", "operations")
            ]
            conn.executemany("""
                INSERT INTO team_members (name, role, bio, photo_url, linkedin_url, category)
                VALUES (?, ?, ?, ?, ?, ?)
            """, seed_data)
        conn.commit()

init_db()

# Pydantic Models
class TeamMemberBase(BaseModel):
    name: str
    role: str
    bio: Optional[str] = None
    photo_url: Optional[str] = None
    linkedin_url: Optional[str] = None
    category: str

class TeamMemberCreate(TeamMemberBase):
    pass

class TeamMemberUpdate(TeamMemberBase):
    pass

class TeamMember(TeamMemberBase):
    id: int

    class Config:
        from_attributes = True

# API Routes
@app.get("/api/team", response_model=List[TeamMember])
def get_team_members(db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM team_members")
    rows = cursor.fetchall()
    return [dict(row) for row in rows]

@app.post("/api/team", response_model=TeamMember)
def create_team_member(member: TeamMemberCreate, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("""
        INSERT INTO team_members (name, role, bio, photo_url, linkedin_url, category)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (member.name, member.role, member.bio, member.photo_url, member.linkedin_url, member.category))
    db.commit()
    return {**member.model_dump(), "id": cursor.lastrowid}

@app.put("/api/team/{member_id}", response_model=TeamMember)
def update_team_member(member_id: int, member: TeamMemberUpdate, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM team_members WHERE id = ?", (member_id,))
    if not cursor.fetchone():
        raise HTTPException(status_code=404, detail="Team member not found")
        
    cursor.execute("""
        UPDATE team_members SET name = ?, role = ?, bio = ?, photo_url = ?, linkedin_url = ?, category = ?
        WHERE id = ?
    """, (member.name, member.role, member.bio, member.photo_url, member.linkedin_url, member.category, member_id))
    db.commit()
    return {**member.model_dump(), "id": member_id}

@app.delete("/api/team/{member_id}")
def delete_team_member(member_id: int, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM team_members WHERE id = ?", (member_id,))
    if not cursor.fetchone():
        raise HTTPException(status_code=404, detail="Team member not found")
        
    cursor.execute("DELETE FROM team_members WHERE id = ?", (member_id,))
    db.commit()
    return {"message": "Team member deleted"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
