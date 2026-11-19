# AssistHire - Backend API

FastAPI-powered backend service for AssistHire.

## Features
- **FastAPI**: Modern, high-performance web framework for Python.
- **Pydantic v2**: High-speed data validation and settings management.
- **CORS enabled**: Pre-configured to communicate with the Next.js frontend.
- **Modular structure**: Clean separation of routes, schemas, and configurations.

## Getting Started

1. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the development server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

4. View API documentation:
   - Swagger UI: `http://localhost:8000/docs`
   - ReDoc: `http://localhost:8000/redoc`
