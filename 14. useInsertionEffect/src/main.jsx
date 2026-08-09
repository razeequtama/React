// Import StrictMode from React.
import { StrictMode } from 'react';

// Import createRoot from React DOM.
import { createRoot } from 'react-dom/client';

// Import the main App component.
import App from './App';

// Find the HTML element where React should render the application.
const rootElement = document.getElementById('root');

// Create a React 18 root using the createRoot API.
const root = createRoot(rootElement);

// Render the React application into the root element.
root.render(
  // Enable React's development-time Strict Mode checks.
  <StrictMode>
    {/* Render the main application component. */}
    <App />
  </StrictMode>
);