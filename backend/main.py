from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Local development
        os.getenv("CORS_ORIGINS", "https://your-netlify-site.netlify.app")  # Production
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
) 