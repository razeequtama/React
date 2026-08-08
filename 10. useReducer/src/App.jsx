// Import the useReducer Hook from React.
// useReducer allows us to manage state using a reducer function.
import { useReducer } from "react";

// Define the initial state for our reducer.
// The state is an object so that additional related values
// could easily be added later.
const initialState = {
  count: 0,
};

// Define the reducer function.
// The reducer receives the current state and the action
// that was dispatched by the component.
const reducer = (state, action) => {
  // Check the action type to determine what state transition
  // should take place.
  switch (action.type) {
    // Handle the increment action.
    case "increment":
      // Return a new state object with the count increased by one.
      return {
        ...state,
        count: state.count + 1,
      };

    // Handle the decrement action.
    case "decrement":
      // Return a new state object with the count decreased by one.
      return {
        ...state,
        count: state.count - 1,
      };

    // Handle the double action.
    case "double":
      // Return a new state object with the count multiplied by two.
      return {
        ...state,
        count: state.count * 2,
      };

    case "reset":
      // Return a new state object with the count multiplied by two.
      return {
        ...state,
        count: state.count * 0,
      };

    // Handle any action type that the reducer does not recognize.
    default:
      // Log the unknown action so that it can be identified during development.
      console.error("Unknown action type:", action.type);

      // Return the current state unchanged.
      return state;
  }
};

// Define the main React component.
function App() {
  // Initialize useReducer.
  //
  // state contains the current state object.
  // dispatch is the function used to send actions to the reducer.
  // reducer is the function responsible for calculating the next state.
  // initialState provides the starting state.
  const [state, dispatch] = useReducer(reducer, initialState);

  // Render the component's user interface.
  return (
    <main>
      {/* Display the current count from the reducer state. */}
      <h1>Count: {state.count}</h1>

      {/* Dispatch the "increment" action when the button is clicked. */}
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "increment",
          })
        }
      >
        Increment
      </button>

      {/* Dispatch the "decrement" action when the button is clicked. */}
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "decrement",
          })
        }
      >
        Decrement
      </button>

      {/* Dispatch the "double" action when the button is clicked. */}
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "double",
          })
        }
      >
        Double
      </button>

      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        Reset
      </button>
    </main>
  );
}

// Export the App component so that it can be rendered by main.jsx.
export default App;