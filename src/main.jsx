import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage, SignUpPage, MovieList } from "./ui/pages/index";
import { NavBar } from "./ui/components/index";
import MovieDetails from "./ui/pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/movieList",
    element: <MovieList />,
  },
  {
    path: "/movielist/:id",
    element: <MovieDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
