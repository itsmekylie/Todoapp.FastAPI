from fastapi import FastAPI
import sys
import os
from fastapi.middleware.cors import CORSMiddleware
from routers import todo

# Add project root to Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from routers import todo  # Changed to absolute import
from database import engine, Base

# Initialize FastAPI app
app = FastAPI(debug=True)


# Create database tables
Base.metadata.create_all(bind=engine)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with specific frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI To-Do App!"}

# Include routers
app.include_router(todo.router)  # Ensure the todo router is included