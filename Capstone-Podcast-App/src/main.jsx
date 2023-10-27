import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";
import Show from "./routes/ShowPage";
import HomePage from "./routes/HomePage";
import FavouritesPage from "./routes/FavouritesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  { 
    path: "show/:showId",
    element: <Show />
  },
  {
    path: "favourites/",
    element: <FavouritesPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);