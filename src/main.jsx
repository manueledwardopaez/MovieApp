import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MovieListPage, SearchPage, NotFoundPage } from "./ui/pages";
import MovieDetails from "./ui/pages/MovieDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/search/:id",
    element: <MovieDetails />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
