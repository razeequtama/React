// Import the Hooks we need from React.
//
// useState manages the count because the count is displayed
// in the UI and needs to trigger re-renders when it changes.
//
// useEffect lets us run code after React renders and whenever
// the count changes.
//
// useRef lets us create persistent values that survive renders
// without causing a render when their .current value changes.
import { useEffect, useRef, useState } from "react";

// Define the main React component.
function App() {
  // Create state for the counter.
  //
  // count contains the current counter value.
  // setCount changes the counter and causes React to re-render.
  const [count, setCount] = useState(0);

  // Create a ref that will point to the input DOM element.
  //
  // The initial value is null because the input does not exist
  // in the DOM yet when this component first executes.
  const inputRef = useRef(null);

  // Create a ref for storing the previous count.
  //
  // Unlike inputRef, this ref is not connected to a DOM element.
  // We are simply using it as a persistent storage container.
  const previousCountRef = useRef(0);

  // This effect runs whenever count changes.
  useEffect(() => {
    // Store the current count inside the ref.
    //
    // This changes previousCountRef.current, but it does NOT
    // cause another render.
    //
    // Because effects run after rendering, this value becomes
    // available as the "previous" value during the next render.
    previousCountRef.current = count;
  }, [count]);

  // Define a function for focusing the input.
  const focusInput = () => {
    // inputRef.current contains the actual input DOM element
    // after React has rendered it.
    //
    // Calling focus() directly on the DOM element gives the
    // input keyboard focus.
    inputRef.current.focus();
  };

  // Define a function that reads the current input value.
  const logInputValue = () => {
    // Access the input DOM element through the ref.
    //
    // The .value property contains whatever the user has
    // currently typed into the input.
    console.log(inputRef.current.value);
  };

  // Return the component's UI.
  return (
    <main>
      {/* Display the current count stored in React state. */}
      <h1>useRef Example</h1>

      <p>Current count: {count}</p>

      {/* Display the previous count stored in the ref. */}
      <p>Previous count: {previousCountRef.current}</p>

      {/* Increase the count by one when the button is clicked. */}
      <button
        type="button"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>

      {/* Add a visual separation between the counter and input example. */}
      <hr />

      {/*
        This input is connected to inputRef.

        React will place the actual DOM input element inside:
        inputRef.current
      */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
      />

      {/* Focus the input when this button is clicked. */}
      <button
        type="button"
        onClick={focusInput}
      >
        Focus Input
      </button>

      {/* Log the current input value to the browser console. */}
      <button
        type="button"
        onClick={logInputValue}
      >
        Log Input Value
      </button>
    </main>
  );
}

// Export the App component so that main.jsx can render it.
export default App;