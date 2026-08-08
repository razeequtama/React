// Import StrictMode from React.
//
// StrictMode enables additional development-time checks
// that can help identify potential problems in the application.
import { StrictMode } from "react";

// Import createRoot from React DOM.
//
// React 18 introduced createRoot as the standard API
// for mounting a React application.
import { createRoot } from "react-dom/client";

// Import the main App component.
import App from "./App";

// Import the application's CSS file.
import "./index.css";

// Find the HTML element where React will mount the application.
const rootElement = document.getElementById("root");

// Create a React root using React 18's createRoot API.
const root = createRoot(rootElement);

// Render the App component inside StrictMode.
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);