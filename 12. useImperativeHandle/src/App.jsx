// Import the useRef Hook from React.
import { useRef } from "react";

// Import our reusable child component.
import CustomInput from "./components/CustomInput";

function App() {
  // Create a ref in the parent component.
  // This ref will receive the custom methods exposed
  // by CustomInput through useImperativeHandle.
  const inputRef = useRef(null);

  // Call the child's focusInput method.
  const handleFocus = () => {
    // Make sure the ref has been initialized before using it.
    inputRef.current?.focusInput();
  };

  // Call the child's clearInput method.
  const handleClear = () => {
    // Make sure the ref has been initialized before using it.
    inputRef.current?.clearInput();
  };

  // Render the parent component.
  return (
    <div>
      {/* Render the child and pass the parent's ref to it. */}
      <CustomInput ref={inputRef} />

      {/* This button belongs to the parent but controls the child. */}
      <button onClick={handleFocus}>
        Focus Input
      </button>

      {/* This button also belongs to the parent and controls the child. */}
      <button onClick={handleClear}>
        Clear Input
      </button>
    </div>
  );
}

// Export the App component as the default export.
export default App;