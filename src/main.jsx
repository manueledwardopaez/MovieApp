import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage, SignUpPage, MovieListPage, SearchPage } from "./ui/pages/index";
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
    element: <MovieListPage />,
  },
  {
    path: "/movielist/:id",
    element: <MovieDetails />,
  },
  {
    path: "/search",
    element: <SearchPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
