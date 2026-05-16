import React from "react";
import { createRoot } from "react-dom/client";
import KabinConsultoriaMockup from "../KabinConsultoriaMockup.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KabinConsultoriaMockup />
  </React.StrictMode>,
);
