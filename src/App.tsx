import "./App.scss";
import Layout from "./components/Layout";
import LayoutAdmin from "./components/LayoutAdmin";
import AboutPage from "./pages/About";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },

  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },

  {
    path: "login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
