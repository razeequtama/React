// Import the Hooks we need from React.
import { useId, useState } from "react";

function App() {
  // Create a unique ID for the name input.
  const nameId = useId();

  // Create a unique ID for the email input.
  const emailId = useId();

  // Store the values entered by the user.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Store the submitted message.
  const [message, setMessage] = useState("");

  // Run when the form is submitted.
  function handleSubmit(event) {
    // Prevent the page from refreshing.
    event.preventDefault();

    // Show the user's name after submitting.
    setMessage(`Hello, ${name}! Your email is ${email}.`);
  }

  return (
    <main>
      <h1>useId Example</h1>

      <form onSubmit={handleSubmit}>
        {/* Connect this label to the name input. */}
        <label htmlFor={nameId}>Name</label>

        {/* Use the same ID on the input. */}
        <input
          id={nameId}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <br />
        <br />

        {/* Connect this label to the email input. */}
        <label htmlFor={emailId}>Email</label>

        {/* Use the same ID on the email input. */}
        <input
          id={emailId}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <br />
        <br />

        {/* Submit the form. */}
        <button type="submit">Submit</button>
      </form>

      {/* Show the message after the form is submitted. */}
      {message && <p>{message}</p>}
    </main>
  );
}

export default App;