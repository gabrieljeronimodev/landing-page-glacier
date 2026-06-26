import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

import "./styles.css";

const router = getRouter();

const appElement = document.getElementById("app");

if (!appElement) {
  throw new Error("Root element with id 'app' not found");
}

createRoot(appElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
