// Import the DynamicStyledBox component from its file.
import DynamicStyledBox from './DynamicStyledBox';

// Define the main application component.
function App() {
  // Return the application's user interface.
  return (
    // Create the main container for the application.
    <main>
      {/* Display the page heading. */}
      <h1>useInsertionEffect Example</h1>

      {/* Render the component that dynamically inserts its CSS. */}
      <DynamicStyledBox />
    </main>
  );
}

// Export the App component as the default export.
export default App;