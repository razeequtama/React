// Import StrictMode from React.
// StrictMode helps identify potential problems during development.
import { StrictMode } from "react";

// Import createRoot from React DOM.
// React 18 uses createRoot to create the application's root.
import { createRoot } from "react-dom/client";

// Import the main App component.
import App from "./App";

// Import the application's CSS file.
import "./index.css";

// Find the HTML element where React should render the application.
const rootElement = document.getElementById("root");

// Create a React root using React 18's createRoot API.
const root = createRoot(rootElement);

// Render the App component inside StrictMode.
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);