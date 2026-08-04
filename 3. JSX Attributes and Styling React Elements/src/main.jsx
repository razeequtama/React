// React 18 entry point
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

// Create the React root
const root = createRoot(document.getElementById("root"));

// Render the application
root.render(
    <App />
);