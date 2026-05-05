# Cars Dealership Capstone Project

A full‑stack web application for a national car dealership in the U.S., built with Django (backend), React (frontend), and deployed using Docker, Kubernetes, and IBM Cloud Code Engine. Users can:
- View dealerships by state.
- See dealer details and reviews.
- Log in, write reviews, and view sentiment analysis for each review.

## Key Technologies
- Backend: Django, Node.js, Flask (as needed)
- Frontend: React
- Database: SQLite and MongoDB (for reviews)
- DevOps: Docker, Kubernetes, GitHub Actions (CI/CD), IBM Cloud Code Engine
- Features: User authentication, responsive UI, sentiment analysis of reviews

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-GITHUB-USERNAME/cars-dealership-capstone.git
   ```
2. Install dependencies and run the Django server (example):
   ```bash
   cd server
   pip install -r requirements.txt
   python manage.py runserver
   ```
3. Start the frontend (React) in another terminal:
   ```bash
   cd frontend
   npm install
   npm start
   ```

## Deployment
The application is deployed on IBM Cloud using Docker and Kubernetes, with CI/CD configured via GitHub Actions.

## Project Maintainer
- Name: Swathi Swathi
- Institution/Course: IBM Full Stack Cloud Development Capstone
