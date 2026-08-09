// Import the useState Hook so the component can store the search
// input and the currently displayed filtered items.
import { useState, useTransition } from "react";

// Define the main application component.
function App() {
  // Create an array containing 10,000 items.
  // Array.from() creates a new array.
  const items = Array.from(

    // Create an array-like object with a length of 10,000.
    // This tells Array.from() how many times to run the function below.
    { length: 10000 },

    // This function runs once for every item.
    // "_" receives the first argument, which is the current value.
    // "index" receives the second argument, which is the current position.
    (_, index) => `Item ${index + 1}`

  );
  // Store the value currently displayed inside the search input.
  const [searchTerm, setSearchTerm] = useState("");

  // Store the items currently displayed in the list.
  const [filteredItems, setFilteredItems] = useState(items);

  // Create a transition.
  // isPending tells us whether the transition is still being processed.
  // startTransition lets us mark a state update as non-urgent.
  const [isPending, startTransition] = useTransition();

  // Handle changes made to the search input.
  const handleSearch = (event) => {
    // Read the latest value typed by the user.
    const value = event.target.value;

    // Update the input immediately because typing is an urgent interaction.
    setSearchTerm(value);

    // Mark the expensive filtered-list update as a non-urgent transition.
    startTransition(() => {
      // Convert the search term to lowercase so the search is case-insensitive.
      const query = value.toLowerCase();

      // Filter the complete list according to the user's search term.
      const results = items.filter((item) =>
        item.toLowerCase().includes(query)
      );

      // Update the displayed list with the filtered results.
      setFilteredItems(results);
    });
  };

  // Render the application UI.
  return (
    // Create the main container for the application.
    <main>
      {/* Display the title of the example. */}
      <h1>useTransition Example</h1>

      {/* Provide an input where the user can search the list. */}
      <input
        // Tell the browser that this is a text input.
        type="text"
        // Display the current search value inside the input.
        value={searchTerm}
        // Run handleSearch whenever the user changes the input.
        onChange={handleSearch}
        // Provide a hint describing what the input does.
        placeholder="Search items..."
      />

      {/* Display a loading message while the transition is pending. */}
      {isPending && <p>Loading...</p>}

      {/* Display the number of results currently shown. */}
      <p>Results: {filteredItems.length}</p>

      {/* Render the filtered items as an unordered list. */}
      <ul>
        {/* Convert every filtered item into a list element. */}
        {filteredItems.map((item) => (
          // Use the item itself as the React key because every item is unique.
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  );
}

// Export the App component so it can be rendered by the application entry point.
export default App;