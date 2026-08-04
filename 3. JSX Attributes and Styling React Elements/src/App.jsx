import React from "react";

// Store the Picsum URL in a JavaScript variable
const imgURL = "https://picsum.photos/200";

function App() {
  return (
    <div className="container">
      {/* Styled heading using className */}
      <h1
        className="heading"
        contentEditable={true}
        spellCheck={false}
      >
        Edit this heading
      </h1>

      <h2>Food Images</h2>

      {/* Images using a reusable CSS class */}
      <div className="image-row">
        <img
          className="food-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/500px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
          alt="Healthy food display"
        />

        <img
          className="food-img"
          src="https://images.immediate.co.uk/production/volatile/sites/2/2025/11/Hasselback-TartifletteInsidepreview-641e56f-018382c.jpg?quality=90&resize=708,643"
          alt="Potato dish"
        />

        <img
          className="food-img"
          src="https://cdn.spotapps.co/spothopper/image/fetch/f_auto,q_auto:best,c_fit,h_1200/http://static.spotapps.co/spots/47/29dea0176041c5a0ae640a71dbe24f/:original"
          alt="Noodle dish"
        />
      </div>

      <h2>Random Image from Picsum</h2>

      {/* JavaScript expression inside JSX */}
      <img
        className="food-img"
        src={`${imgURL}?grayscale`}
        alt="Random grayscale image"
      />
    </div>
  );
}

export default App;