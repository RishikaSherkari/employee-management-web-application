# EmployeeHub – Employee Management Web Application

EmployeeHub is a full-stack web application for managing employee records through a secure and user-friendly interface.

The application provides user authentication and complete employee management functionality including creating, viewing, searching, updating, and deleting employee records.

---

## Features

### Authentication
- User registration
- User login
- JWT-based authentication
- BCrypt password hashing
- Protected employee management APIs
- Logout functionality
- Protected frontend dashboard

### Employee Management
- Create employee records
- View all employees
- View employee details
- Update employee information
- Delete employee records
- Search employees by name
- Search employees by department
- Clear search results

### Validation & Error Handling
- Frontend form validation
- Backend request validation
- Positive salary validation
- Required field validation
- Employee not found handling
- Authentication error handling
- Global exception handling
- User-friendly error messages

### User Interface
- Responsive dashboard
- Employee statistics
- Professional authentication pages
- Employee search interface
- Employee data table
- Loading states
- Delete confirmation
- Responsive design

---

## Technology Stack

### Frontend
- React
- JavaScript
- Vite
- Axios
- React Router
- HTML5
- CSS3

### Backend
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security
- JWT
- BCrypt
- Bean Validation
- Maven

### Database
- MySQL
- Hibernate / JPA

### Development Tools
- Visual Studio Code
- Git
- GitHub
- Postman
- MySQL Workbench

---

## Application Architecture

The application follows a client-server architecture.

```text
┌──────────────────────────────┐
│        React Frontend        │
│                              │
│ Login / Register / Dashboard │
└──────────────┬───────────────┘
               │
               │ HTTP / REST API
               ▼
┌──────────────────────────────┐
│       Spring Boot API        │
│                              │
│ Controller                   │
│      ↓                       │
│ Service                      │
│      ↓                       │
│ Repository                   │
└──────────────┬───────────────┘
               │
               │ JPA / Hibernate
               ▼
┌──────────────────────────────┐
│          MySQL               │
│                              │
│ users                        │
│ employees                    │
└──────────────────────────────┘

## Live Demo

Frontend: https://splendid-hamster-33158f.netlify.app

Backend API: https://employeehub-backend-s1q4.onrender.com