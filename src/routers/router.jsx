import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/HomePage";
import BreedsPage from "../pages/Breeds/BreedsPage";
import AccessoriesPage from "../pages/Accessories/AccessoriesPage";
import BlogPage from "../pages/Blog/BlogPage";
import ContactPage from "../pages/Contact/ContactPage";

const router = createBrowserRouter([
  //Users View Route
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/breeds", element: <BreedsPage /> },
      { path: "/accessories", element: <AccessoriesPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/login", element: "Login" },
    ],
  },
]);

export default router;
