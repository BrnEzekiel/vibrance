

---

# 🌟 Vibrance – Self Help Group Management System

Vibrance is a **full-stack web application** built to manage **small and large self-help groups**.
It streamlines **contributions, payments, group tracking, and AI insights** – all in one platform.

---

## 🚀 Features

* 👥 **User Management** – Register, login, JWT authentication
* 🏦 **Payments Integration** – Secure contributions via \[InstaSend API]
* 📊 **Group Dashboard** – Track members, contributions & balances
* 🤖 **AI Assistant** – AI-powered insights, reminders & group analytics
* 🔒 **Secure Backend** – FastAPI + JWT auth
* 🎨 **Modern UI** – Built with React + Vite + TailwindCSS

---

## 🛠️ Tech Stack

**Frontend:** React + Vite + TailwindCSS
**Backend:** FastAPI (Python) + PostgreSQL
**Auth:** JWT Authentication
**Payments:** InstaSend API
**AI:** OpenAI API (chat, insights, summarization)
**Deployment:** Vercel (frontend) + Render (backend)

---

## 📂 Project Structure

```
vibrance/
 ├── backend/         # FastAPI backend
 │   ├── main.py      # Entry point
 │   ├── auth/        # JWT auth
 │   ├── models/      # Database models
 │   └── routes/      # API endpoints
 ├── frontend/        # React + Vite frontend
 │   ├── src/
 │   │   ├── pages/   # Home, Login, Dashboard
 │   │   ├── components/ # Navbar, Footer, Tables
 │   │   └── App.jsx
 └── README.md
```

---

## ⚙️ Setup & Installation

### 1. Clone Repo

```bash
git clone https://github.com/YOUR_USERNAME/vibrance.git
cd vibrance
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev   # Local dev server (http://localhost:5173)
```

### 3. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate   # (Windows: venv\Scripts\activate)
pip install -r requirements.txt
uvicorn main:app --reload   # Runs on http://localhost:8000
```

---

## 🔑 Environment Variables

Create a `.env` file in both `frontend/` and `backend/`.

### Backend (`backend/.env`)

```
DATABASE_URL=postgresql://user:password@localhost/vibrance
JWT_SECRET=your_jwt_secret
INSTA_SEND_API_KEY=your_instasend_key
OPENAI_API_KEY=your_openai_key
```

### Frontend (`frontend/.env`)

```
VITE_API_BASE_URL=https://your-backend-url.com
```

---

## 🚀 Deployment

* **Frontend** → Deploy `frontend/` folder on **Vercel or Netlify**.
* **Backend** → Deploy `backend/` on **Render, Railway, or Heroku**.
* Set environment variables in respective dashboards.

---



---

## 🤝 Contributing

Pull requests are welcome!

---

## 📜 License

MIT License.

---
