// Import StrictMode from React for additional development checks.
import { StrictMode } from "react";

// Import createRoot, the React 18+ API for mounting an application.
import { createRoot } from "react-dom/client";

// Import the main App component.
import App from "./App";

// Find the HTML element where React should render the application.
const rootElement = document.getElementById("root");

// Create a React root using the React 18+ createRoot API.
const root = createRoot(rootElement);

// Render the application inside StrictMode.
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);