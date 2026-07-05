import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import MainLayout from "../layouts/MainLayout";
import Patients from "../pages/patients/Patients";
import Dashboard from "../pages/dashboard/Dashboard";
import Doctors from "../pages/doctors/Doctors";
import Appointments from "../pages/appointments/Appointments";
import WorkingHours from "../pages/working-hours/WorkingHours";
import DoctorLeaves from "../pages/leaves/DoctorLeaves";
import MedicalNotes from "../pages/medical-notes/MedicalNotes";
import Prescriptions from "../pages/prescriptions/Prescriptions";
import Notifications from "../pages/notifications/Notifications";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointments" element={<Appointments />}/>
          <Route path="/working-hours" element={<WorkingHours />} />
          <Route path="/doctor-leaves" element={<DoctorLeaves />} />
          <Route path="/medical-notes" element={<MedicalNotes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;