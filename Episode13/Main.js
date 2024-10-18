import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Apps from "./App";
import About from "./Src/pages/About";
import ErrorPage from "./Src/pages/Error";
import Contacts from "./Src/pages/Contacts";
import Body from "./Src/Components/Body";

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Apps />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
