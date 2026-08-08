// Import the React Hooks and utility required for this component.
import {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

// forwardRef allows the parent component to pass a ref
// into this child component.
const CustomInput = forwardRef(function CustomInput(props, ref) {
  // Create a private ref that points to the actual input DOM element.
  // This ref belongs to the child component.
  const inputElementRef = useRef(null);

  // Define the function responsible for focusing the input.
  const focusInput = () => {
    // Optional chaining prevents an error if the input
    // does not currently exist.
    inputElementRef.current?.focus();
  };

  // Define the function responsible for clearing the input.
  const clearInput = () => {
    // Check that the input element exists before modifying it.
    if (inputElementRef.current) {
      // Reset the input's current DOM value.
      inputElementRef.current.value = "";
    }
  };

  // Customize what the parent receives through its ref.
  useImperativeHandle(ref, () => ({
    // Expose only the focusInput function.
    focusInput,

    // Expose only the clearInput function.
    clearInput,
  }));

  // Render the actual input element.
  return (
    <input
      // Connect the private child ref to the DOM input.
      ref={inputElementRef}

      // Provide some basic placeholder text.
      placeholder="Type something..."
    />
  );
});

// Export the reusable component so other files can import it.
export default CustomInput;