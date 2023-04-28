// import { useID } from "../Hooks/useID";
import { Footer } from "../components/Footer";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";

export const navbar = [
  {
    id: 1,
    isPrivate: false,
    hidden: false,
    title: "Bosh Sahifa",
    element: <HomePage />,
    path: "/home",
  },
  {
    id: 2,
    isPrivate: false,
    hidden: false,
    title: "Ro’yhatdan o’tish",
    element: <RegisterPage />,
    path: "/register",
  },
  {
    id: 3,
    isPrivate: true,
    hidden: true,
    title: "Footer",
    element: <Footer />,
    path: "/footer",
  },
];
