// Import the useState Hook for storing the user's current query.
import { useState, useDeferredValue } from "react";

// Create a large list so that the filtering operation represents
// a more expensive rendering workload.
const items = Array.from(
  { length: 10000 },
  (_, index) => `Item ${index + 1}`
);

// Define the main application component.
function App() {
  // Store the value that the user is currently typing.
  const [query, setQuery] = useState("");

  // Create a deferred version of the query.
  // React can allow this value to temporarily lag behind `query`
  // when rendering the updated results is less urgent.
  const deferredQuery = useDeferredValue(query);

  // Filter the large list using the deferred value rather than
  // the immediate input value.
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  // Determine whether the immediate value and deferred value
  // are temporarily different.
  const isStale = query !== deferredQuery;

  // Render the application.
  return (
    <main>
      {/* Display the title of the example. */}
      <h1>useDeferredValue Search</h1>

      {/* Connect the input to the immediate query state. */}
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search items..."
        aria-label="Search items"
      />

      {/* Display a message while the deferred value catches up. */}
      {isStale && <p>Loading...</p>}

      {/* Display the number of matching items. */}
      <p>
        Showing {filteredItems.length} matching item
        {filteredItems.length === 1 ? "" : "s"}.
      </p>

      {/* Render the filtered results. */}
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  );
}

// Export the component so that it can be rendered by main.jsx.
export default App;