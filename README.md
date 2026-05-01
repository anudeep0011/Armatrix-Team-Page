# Armatrix Team Page

A premium full-stack team and contact management application showcasing Armatrix's technical capabilities. Built with modern web technologies to deliver a high-performance, visually engaging experience.

## 🌐 Live Deployment

| Component | URL |
|-----------|-----|
| **Frontend** | [https://armatrix-team-page.vercel.app](https://armatrix-team-page.vercel.app) |
| **Backend API** | [https://armatrix-backend.onrender.com](https://armatrix-backend.onrender.com) |

---

## 📋 Overview

Armatrix Team Page is a monorepo project featuring:

- **Team Showcase**: Display of team members with dynamic animations and interactive cards
- **Contact Portal**: Comprehensive contact page with embedded mapping and messaging
- **RESTful API**: Robust backend API for team data management
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Premium UX**: Glassmorphism effects, smooth scroll-triggered animations, and deep-tech aesthetic

**Tech Stack by Contribution:**
- TypeScript: 84.4%
- Python: 12.3%
- CSS: 2.3%
- JavaScript: 1%

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

### Backend
- **Framework**: FastAPI (Python 3)
- **Database**: SQLite (persistent in-memory via `team.db`)
- **Validation**: Pydantic
- **ASGI Server**: Uvicorn

### Deployment
- **Frontend Hosting**: Vercel
- **Backend Hosting**: Render
- **Architecture**: Monorepo with independent deployment pipelines

---

## 🎨 Design Features

### Visual Identity
- **Color Palette**: Deep-tech minimalism with stark dark theme (`#050505`)
- **Accent Colors**: Custom metallic gold gradient (`#FFF3B0 → #FB8500`) for premium typography
- **Effects**: Glassmorphism lighting, subtle hover states, and smooth transitions

### Interactive Elements
- **Scroll-Triggered Animations**: Staggered directional reveals for team member cards
- **Dynamic Hero Section**: Parallax sequence simulating robotic arm articulation
- **Responsive Layout**: Alternating card-bio layout for visual variety
- **Mobile Optimization**: Dense, scrollable design for smaller screens

---

## 📦 Project Structure

```
Armatrix-Team-Page/
├── frontend/                 # Next.js 15 application
│   ├── app/                 # App Router pages and layouts
│   ├── components/          # React components
│   ├── public/              # Static assets and images
│   ├── styles/              # Global CSS and Tailwind config
│   ├── package.json         # Frontend dependencies
│   └── tsconfig.json        # TypeScript configuration
│
├── backend/                 # FastAPI application
│   ├── main.py             # FastAPI application entry point
│   ├── models.py           # Pydantic data models
│   ├── routes/             # API route handlers
│   ├── team.db             # SQLite database (auto-generated)
│   ├── requirements.txt     # Python dependencies
│   └── venv/               # Virtual environment
│
└── README.md               # Project documentation
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and npm/yarn
- **Python** 3.9+
- **Git**

### Backend Setup (FastAPI)

```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
.\venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start development server
uvicorn main:app --reload
```

The FastAPI backend will be available at `http://localhost:8000`

**API Documentation**: Visit `http://localhost:8000/docs` for interactive API docs (Swagger UI)

### Frontend Setup (Next.js)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

The Next.js application will be available at `http://localhost:3000`

---

## 📱 Key Features

### Team Page (`/`)
- Display of team members organized by role and seniority
- Animated cards with hover effects and transition states
- Dynamic split-layout design for enhanced visual hierarchy
- Scroll-triggered animations with staggered reveals
- Mobile-responsive vertical stack layout

### Contact Page (`/contact`)
- Comprehensive contact information with icons
- Embedded map integration for location visualization
- Professional styling matching the main brand aesthetic
- Mobile-optimized contact form layout
- Direct communication channels (email, phone, links)

### API Endpoints
- `GET /api/team` - Retrieve all team members
- `GET /api/team/{id}` - Get specific team member details
- Additional endpoints documented in `/docs`

---

## 🔧 Development

### Available Scripts

**Frontend:**
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
```

**Backend:**
```bash
uvicorn main:app --reload              # Development with auto-reload
uvicorn main:app --port 8001          # Run on custom port
python -m pytest                       # Run tests (if configured)
```

### Environment Variables

Create a `.env.local` file in the `frontend` directory (if needed):

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component for lazy loading and responsive sizing
- **Code Splitting**: Automatic route-based code splitting in Next.js
- **CSS-in-JS**: Tailwind CSS purging unused styles in production
- **Animation Performance**: Hardware-accelerated Framer Motion animations
- **Database**: In-memory SQLite for quick access and minimal latency

---

## 🔒 Security Features

- **CORS Configuration**: Backend configured with proper CORS headers
- **Input Validation**: Pydantic models for robust data validation
- **Environment Variables**: Sensitive data managed via environment configuration
- **HTTPS Ready**: Deployable on HTTPS-enabled platforms

---

## 📝 Notes

- Static assets are located in `frontend/public/Images/` for consistent pathing across development and production environments
- Database automatically initializes and seeds with team data on first backend run
- The team card layout intelligently switches between stacked and split-row modes based on organizational tier
- Both frontend and backend support independent scaling and deployment

---

## 🚢 Deployment

### Frontend (Vercel)
```bash
# Connect your GitHub repository to Vercel
# Push to main branch for automatic deployment
git push origin main
```

### Backend (Render)
```bash
# Create a new Web Service on Render
# Connect to this repository and specify the backend directory
# Render will automatically detect Python and deploy
```

---

## 📄 License

This project is provided as-is for the Armatrix team.

---

## 👤 Author

**Anudeep**
- GitHub: [@anudeep0011](https://github.com/anudeep0011)

---

## 🤝 Support & Contributions

For issues, suggestions, or contributions, please open a GitHub issue in the repository.

---

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
