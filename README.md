# AssistHire 🚀

AssistHire is an AI-powered talent acquisition and hiring assistant platform designed to streamline recruiting, candidate assessment, and interview workflows.

---

## 📁 Repository Structure

```text
AssistHire/
├── frontend/                # Next.js (React + TypeScript + Tailwind CSS)
│   ├── src/
│   │   ├── app/             # Next.js App Router (pages & layouts)
│   │   └── components/      # Reusable UI components
│   ├── public/              # Static assets
│   ├── package.json         # Node dependencies & scripts
│   └── README.md            # Frontend documentation
│
├── backend/                 # Python FastAPI Service
│   ├── app/
│   │   ├── api/             # API routes (v1 endpoints)
│   │   ├── core/            # Configuration & settings
│   │   ├── schemas/         # Pydantic data schemas
│   │   └── main.py          # FastAPI application entrypoint
│   ├── requirements.txt     # Python dependencies
│   └── README.md            # Backend documentation
│
└── README.md                # Project documentation
```

---

## 🛠️ Quick Start

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **pnpm** / **yarn**
- **Python**: 3.9 or higher

---

### 2. Backend Setup (FastAPI)

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure environment variables:
   ```bash
   cp .env.example .env
   ```

5. Start the backend development server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

- **Interactive API Docs (Swagger UI)**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **Alternative Docs (ReDoc)**: [http://localhost:8000/redoc](http://localhost:8000/redoc)

---

### 3. Frontend Setup (Next.js)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

- **Frontend App**: [http://localhost:3000](http://localhost:3000)

---

## 🤝 Contributing
1. Fork or clone the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License
This project is licensed under the MIT License.
