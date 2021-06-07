import React from "react";
import "./App.css";

function App() {
  let myVariable = "I am a variable!";
  let myOtherVariable = "I am variable #2";
  let purpleDino = "I am a purple Dino";
  let imgMaybe =
    "Jake or who ever is grading this... can I use these variable to switch between pics after a click event?";
  return (
    <div>
      <h1>I am a React Application!</h1>;
      <p>This is a paragraph with a variables: {myVariable}</p>
      <p>
        When I was a boy we had to use vanilla JS: {myOtherVariable} ,{" "}
        {purpleDino}
      </p>
      <p>{imgMaybe}</p>
    </div>
  );
}

export default App;
