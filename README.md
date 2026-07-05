# 🏥 Healthcare Appointment Management System

A full-stack Healthcare Appointment Management System built to simplify the appointment booking process between patients and doctors. The application provides secure authentication, doctor and patient management, appointment scheduling, medical records management, and an intuitive dashboard.

---

## 📌 Overview

This project is designed to digitize hospital appointment workflows by providing a centralized platform where administrators, doctors, and patients can efficiently manage healthcare operations.

It includes secure authentication using JWT, role-based access, appointment scheduling, doctor availability management, prescription handling, and notification support.

---

## ✨ Features

### 🔐 Authentication
- JWT Authentication
- User Registration
- Secure Login
- Protected Routes
- Role-based Access Control

### 👨‍⚕️ Doctor Management
- Add Doctor
- Update Doctor Details
- Delete Doctor
- View Doctor Profiles
- Manage Working Hours
- Doctor Leave Management

### 🧑‍🤝‍🧑 Patient Management
- Add Patients
- Update Patient Information
- Delete Patients
- Patient Records

### 📅 Appointment Management
- Book Appointment
- Cancel Appointment
- Reschedule Appointment
- Appointment Status Tracking
- Doctor Availability Checking

### 📋 Medical Records
- Medical Notes
- Prescriptions
- Patient History

### 🔔 Notifications
- Appointment Notifications
- Status Updates

### 📊 Dashboard
- Doctor Statistics
- Patient Statistics
- Appointment Summary
- Revenue Overview (UI)

---

# 🛠 Tech Stack

## Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React

## Backend
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcrypt
- Zod Validation

---

# 📁 Project Structure

```
Healthcare_manager/
│
├── Backend/
│   ├── prisma/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── services/
│   │   ├── validations/
│   │   └── utils/
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── types/
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Suryansh703/Healthcare_manager.git
cd Healthcare_manager
```

---

## Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_database_url
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
PORT=5050
```

Run Prisma:

```bash
npx prisma generate
npx prisma migrate dev
```

Start Backend

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5050
```

---

## Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔑 Authentication

JWT-based Authentication is implemented.

After successful login:

- Access Token generated
- Refresh Token generated
- Protected APIs accessible
- Dashboard access enabled

---

# 📸 Screenshots

> Add screenshots here

### Landing Page

```
/screenshots/landing.png
```

### Dashboard

```
/screenshots/dashboard.png
```

### Login

```
/screenshots/login.png
```

### Doctors

```
/screenshots/doctors.png
```

---

# 📌 API Modules

- Authentication
- Doctors
- Patients
- Appointments
- Working Hours
- Doctor Leave
- Medical Notes
- Prescriptions
- Notifications

---

# 🎯 Future Improvements

- Email Notifications
- SMS Notifications
- Payment Gateway
- Video Consultation
- AI-based Appointment Suggestions
- Medical Report Uploads
- Analytics Dashboard
- Dark Mode

---

# 📖 Learning Outcomes

Through this project, I gained hands-on experience with:

- Full Stack Development
- REST API Design
- JWT Authentication
- Prisma ORM
- PostgreSQL
- React + TypeScript
- Tailwind CSS
- Backend Validation using Zod
- Project Architecture
- CRUD Operations
- Git & GitHub

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

# 👨‍💻 Author

**Suryansh Shukla**

- GitHub: https://github.com/Suryansh703
- LinkedIn: https://https://www.linkedin.com/in/suryansh-shukla-10b035276/

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
