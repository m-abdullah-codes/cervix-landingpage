import React from "react";
import { createRoot } from "react-dom/client";
import "../src/styles.css";
import CanvixLanding from "../CanvixLanding.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CanvixLanding />
  </React.StrictMode>
);
