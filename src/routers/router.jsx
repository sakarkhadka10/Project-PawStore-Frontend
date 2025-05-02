import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/HomePage";
import BreedsPage from "../pages/Breeds/BreedsPage";
import BreedDetailPage from "../pages/Breeds/BreedDetailPage";
import AccessoriesPage from "../pages/Accessories/AccessoriesPage";
import BlogPage from "../pages/Blog/BlogPage";
import ContactPage from "../pages/Contact/ContactPage";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import CartPage from "../pages/Cart/CartPage";
import AdminLayout from "../pages/Admin/AdminLayout";
import AdminDashboard from "../pages/Admin/Dashboard/AdminDashboard";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  //Users View Route
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/breeds", element: <BreedsPage /> },
      { path: "/breeds/:id", element: <BreedDetailPage /> },
      { path: "/accessories", element: <AccessoriesPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
  // Admin Routes
  {
    path: "/admin",
    element: (
      <ProtectedRoute adminOnly={true}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      // Add more admin routes as needed
    ],
  },
]);

export default router;
