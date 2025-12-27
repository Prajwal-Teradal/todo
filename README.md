# Todo App (Spring Boot + MySQL + HTML CSS JS)

This is a simple Todo application built using Spring Boot for backend and plain HTML, CSS, and JavaScript for frontend.

## Project Structure

todo
├── backend (Spring Boot application)
└── frontend (HTML, CSS, JavaScript)

## Backend (Spring Boot)

### Technologies Used
- Java
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

### How to Run Backend
1. Open `backend` folder in IntelliJ
2. Make sure MySQL is running
3. Create database:
   
   CREATE DATABASE tododb;
Update application.properties with DB username and password

Run TodoApplication.java

**Backend runs on:**

http://localhost:8080
Backend APIs
POST /todos
GET /todos
PUT /todos/{id}
DELETE /todos/{id}

**Frontend (HTML + CSS + JavaScript)
Technologies Used**
HTML
CSS
JavaScript

**How to Run Frontend**
Open frontend folder in VS Code

Install Live Server extension

Right click index.html → Open with Live Server

**Frontend runs on:**
http://localhost:5500
Features
Add Todo
View Todos
Delete Todo
Data stored in MySQL database

Notes
Frontend communicates with backend using REST APIs

CORS enabled using @CrossOrigin

## Add README to GitHub (important)

After creating README.md:


git status
git add README.md
git commit -m "Add README file"
git push
