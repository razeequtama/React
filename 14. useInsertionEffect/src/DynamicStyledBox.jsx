// Import the useInsertionEffect Hook from React.
import { useInsertionEffect } from 'react';

// Define a reusable React component named DynamicStyledBox.
function DynamicStyledBox() {
  // Run this effect during React's insertion-effect phase.
  useInsertionEffect(() => {
    // Create a new <style> element in memory.
    const styleElement = document.createElement('style');

    // Define the CSS rules that should be dynamically inserted.
    styleElement.textContent = `
      .dynamic-box {
        color: white;
        background-color: blue;
        padding: 20px;
        border-radius: 8px;
        font-family: Arial, sans-serif;
      }
    `;

    // Add the dynamically generated <style> element to <head>.
    document.head.appendChild(styleElement);

    // Return a cleanup function that React calls when the effect is cleaned up.
    return () => {
      // Remove the dynamically inserted <style> element from the document.
      styleElement.remove();
    };
  }, []); // Run the insertion effect for this component instance.

  // Return the UI that should receive the dynamically inserted styles.
  return (
    // Create a div using the CSS class defined above.
    <div className="dynamic-box">
      {/* Display content inside the dynamically styled component. */}
      This box is styled using useInsertionEffect.
    </div>
  );
}

// Export the component so other files can import and use it.
export default DynamicStyledBox;