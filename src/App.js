import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import NotFoundPage from "./components/notFound";
import Admin from "./pages/Admin";
import Students from "./pages/Students";
import Payments from "./pages/Payments";
import Class from "./pages/Class";
import Dashboard from "./pages/Dashboard";
import AdminTable from "./pages/Admin/AdminTable";
import CreateAdmin from "./pages/Admin/CreateAdmin";
import EditStudent from "./pages/Students/EditStudent";
import NewStudent from "./pages/Students/NewStudent";
import StudentsList from "./pages/Students/StudentsList";
import EditAdmin from "./pages/Admin/EditAdmin";
import NewPayment from "./pages/Payments/NewPayment";
import PaymentList from "./pages/Payments/PaymentList";
import EditPayment from "./pages/Payments/EditPayment";
import NewClass from "./pages/Class/NewClass";
import ClassList from "./pages/Class/ClassList";
import EditClass from "./pages/Class/EditClass";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Protected from "./utils/protected";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Layout />
            </Protected>
          }
        >
          <Route path="/" index element={<Dashboard />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/edit-admin/:id" element={<EditAdmin />} />
          <Route path="/admin-list" element={<AdminTable />} />
          <Route path="/new-admin" element={<CreateAdmin />} />

          <Route path="/students" element={<Students />} />
          <Route path="/student-list" element={<StudentsList />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/new-student" element={<NewStudent />} />

          <Route path="/payments" element={<Payments />}>
            <Route path="/payments/payment-list" element={<PaymentList />} />
            <Route path="/payments/new-payment" element={<NewPayment />} />
            <Route
              path="/payments/edit-payment/:id"
              element={<EditPayment />}
            />
          </Route>

          <Route path="/class" element={<Class />} />
          <Route path="/class-list" element={<ClassList />} />
          <Route path="/new-class" element={<NewClass />} />
          <Route path="/edit-class/:id" element={<EditClass />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
