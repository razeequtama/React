import "./styles.css";

// =====================================================
// Practice Challenge: Dynamic Greeting
// =====================================================

// 1. Create a new React application.

// 2. Render a single <h1> element.

// 3. Determine the user's current local time.
//    - Use JavaScript's Date object.
//    - Get the current hour (0–23).

const date = new Date();
const currentHour = date.getHours();
console.log(currentHour);
let messageColor = {};

let message = "";
if(currentHour >= 0 && currentHour < 12)
{
    message = "Good Morning";
    messageColor.color = "red";

} 
else if(currentHour >= 12 && currentHour < 18)
{
    message = "Good Afternoon";
    messageColor.color = "green";
}
else
{
    message = "Good Evening";
    messageColor.color = "blue";
}

// 4. Display different text inside the <h1>
//    depending on the current hour:
//
//    - Between 12:00 AM and 11:59 AM:
//      Display "Good morning"
//
//    - Between 12:00 PM and 5:59 PM:
//      Display "Good afternoon"
//
//    - Between 6:00 PM and 11:59 PM:
//      Display "Good evening"

// 5. Apply the CSS class named "heading"
//    to the <h1> using className.

// 6. Dynamically change the text color
//    using an inline style.
//
//    If the greeting is:
//    - "Good morning"  → red
//    - "Good afternoon" → green
//    - "Good evening"  → blue

// 7. Use BOTH styling methods together:
//    - className for the existing CSS class.
//    - style for the dynamic text color.

// 8. Test your app by changing the current time
//    (or temporarily using different hour values)
//    to make sure each greeting and color appears correctly.

// Goal:
// Practice combining:
// - JSX
// - JavaScript expressions in JSX
// - Date objects
// - Conditional logic (if / else if / else)
// - Variables
// - className
// - Inline styles

function App()
{
    return(
        <div>
            <h1 className="heading" style={messageColor}>{message}</h1>
        </div>
    );
}

export default App;