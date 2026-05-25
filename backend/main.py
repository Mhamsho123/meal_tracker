from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5501"],
    allow_methods=["*"],
    allow_headers=["*"],
)

meals = []

@app.get("/")
def home():
    return {"message": "working"}

@app.get("/meals")
def get_meals():
    return meals

@app.post("/meals")
def add_meal(meal: dict):
    meals.append(meal)
    return {"message": "meal added", "meals": meals}


