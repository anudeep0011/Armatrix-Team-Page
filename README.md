# Armatrix Engineering | Technical Assignment

A full-stack implementation of the Armatrix team page and contact page. Designed with a premium deep-tech robotics aesthetic using Next.js 15, Tailwind CSS, and FastAPI.

##  Live Demo
- **Frontend Live URL**: [https://armatrix-team-page.vercel.app/]
- **Backend Live URL**: [https://armatrix-backend.onrender.com/]

## 🛠️ Repository
- **GitHub Repo**: [https://github.com/anudeep0011/Armatrix-Team-Page] (Monorepo)

---

##  Design Decisions

1. **Aesthetic & Theme**
   - Implemented a sleek, deep-tech minimalism matching the Armatrix brand.
   - Utilized a stark dark theme (`#050505`) contrasted with a custom **metallic gold gradient** (`#FFF3B0 → #FB8500`) for premium typographical accents.
   - Engineered custom CSS utilities to prevent text-clipping issues on gradient text across WebKit browsers.

2. **Dynamic Animations (Framer Motion)**
   - Deployed **scroll-triggered, staggered directional reveals** for team members.
   - Built a custom **alternating layout algorithm** for engineering and execution teams (Card left, Bio right → Bio left, Card right).
   - Designed a dynamic hero section with a simulated parallax sequence fading between robotic arm iterations to simulate articulation.
   - Integrated slick hover-states with subtle glassmorphism lighting (`opacity-0` to `opacity-100` white gradients) instead of harsh color flashing.

3. **Architecture & Routing**
   - Shifted the "Team" assignment to the root `/` application route for immediate accessibility.
   - Implemented a responsive, client-side Navbar component with a mobile-friendly hamburger menu overlay.
   - Constructed a dedicated, cohesive `/contact` route matching the same design language, utilizing Lucide-React icons and external map integrations.

4. **Mobile Responsiveness**
   - Fully optimized vertical rhythm (padding and gaps) for mobile devices, falling back from ultra-wide desktop spacing (`py-32`/`gap-40`) to dense, scrollable padding (`py-16`/`gap-24`) on smaller screens. 

---

## ⚙️ Tech Stack

- **Frontend**: Next.js 15 (App Router), React, Tailwind CSS, Framer Motion, Lucide React
- **Backend**: Python 3, FastAPI, SQLite (in-memory persistent via `team.db`), Pydantic
- **Deployment Structure**: Monorepo capable of split deployments (e.g., Vercel for Frontend, Render/Railway for Backend).

---

## Setup Instructions

### 1. Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv

# On Windows
.\venv\Scripts\activate
# On Mac/Linux
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload
```
The FastAPI backend will start on `http://localhost:8000`. The first run automatically builds and seeds the local `team.db` with the provided assignment dataset.

*Interactive API Documentation available at: `http://localhost:8000/docs`*

### 2. Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```
The Next.js application will start on `http://localhost:3000`. Open your browser to view the application.

---

##  Notes
- Static assets and imagery were processed and moved directly into `frontend/public/Images/` to ensure absolute pathing resolution across both local dev servers and edge-deployed environments.
- The `TeamCard` layout uses a specialized property to dynamically shift between vertical stack and split-row modes depending on the organizational tier (Co-founders vs Engineering).
