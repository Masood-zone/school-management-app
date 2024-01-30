import admin from "../../assets/svgs/admin-logo.svg";
import student from "../../assets/svgs/student-logo.svg";
import payment from "../../assets/svgs/payment-logo.svg";
import classImg from "../../assets/svgs/class.svg";
import login from "../../assets/svgs/login.svg";
import signup from "../../assets/svgs/signup.svg";

export const NAV_LINKS = [
  {
    id: 1,
    link: "Admin",
    path: "/admin",
    icon: admin,
  },
  {
    id: 2,
    link: "Students",
    path: "/students",
    icon: student,
  },
  {
    id: 3,
    link: "Payments",
    path: "/payments",
    icon: payment,
  },
  {
    id: 4,
    link: "Class",
    path: "/class",
    icon: classImg,
  },
];

export const BOTTOM_LINKS = [
  {
    id: 1,
    link: "Login",
    path: "/login",
    icon: login,
  },
  {
    id: 2,
    link: "Sign Up",
    path: "/signup",
    icon: signup,
  },
];
