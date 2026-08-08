// Import the React Hooks needed by this component.
// useLayoutEffect lets us run code after the DOM is updated
// but before the browser paints the result.
// useRef gives us direct access to the DOM element.
// useState stores the measured width.
import { useLayoutEffect, useRef, useState } from "react";

// Define the main React component.
function App() {
  // Create a ref that will eventually point to the box DOM element.
  // The initial value is null because the element does not exist
  // until React renders the component.
  const boxRef = useRef(null);

  // Create state for storing the current width of the box.
  // The initial value is 0 because we have not measured the element yet.
  const [boxWidth, setBoxWidth] = useState(0);

  // useLayoutEffect runs after React has updated the DOM,
  // but before the browser paints the updated UI.
  useLayoutEffect(() => {
    // Make sure the DOM element exists before trying to measure it.
    if (!boxRef.current) {
      return;
    }

    // Read the element's current size from the browser.
    // getBoundingClientRect() returns the element's dimensions
    // and position relative to the viewport.
    const width = boxRef.current.getBoundingClientRect().width;

    // Store the measured width in React state.
    // This causes React to render the width shown below the box.
    setBoxWidth(width);
  });

  // Return the component's UI.
  return (
    // Create the main container.
    <main
      style={{
        // Give the page some spacing.
        padding: "40px",

        // Use a simple sans-serif font.
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Heading explaining what the example demonstrates. */}
      <h1>useLayoutEffect Example</h1>

      {/*
        This div is the element we want to measure.
        The ref connects boxRef.current to this DOM element.
      */}
      <div
        ref={boxRef}
        style={{
          // Make the box responsive.
          width: "100%",

          // Prevent the box from becoming extremely small.
          minWidth: "200px",

          // Add vertical and horizontal spacing inside the box.
          padding: "40px 20px",

          // Give the box a visible background color.
          backgroundColor: "black",

          // Make the text readable against the dark background.
          color: "white",

          // Center the text.
          textAlign: "center",

          // Make the text slightly larger.
          fontSize: "24px",

          // Include padding in the element's total width.
          boxSizing: "border-box",
        }}
      >
        {/* Text displayed inside the box. */}
        Resize Me from the Code
      </div>

      {/*
        Display the width measured from the actual DOM element.
        Math.round() keeps the result easy to read by removing decimals.
      */}
      <p>
        Width: <strong>{Math.round(boxWidth)}px</strong>
      </p>
    </main>
  );
}

// Export the component so it can be rendered by the application entry point.
export default App;