import React from "react";
import "./App.css";
import hamburger from "./images/Hamburger Menu.svg";
import profile from "./images/Profile b&w.jpg";

function App() {
  let myVariable = "I am a variable!";
  let myOtherVariable = "I am variable #2";
  let purpleDino = "I am a purple Dino";
  let imgMaybe =
    "Jake or who ever is grading this... can I use these variable to switch between pics after a click event?";
  return (
    <div className="App">
      <header className="App-header">
        <img src={hamburger} className="Hamburger-menu" alt="" />
        <img src={profile} className="Profile-img" alt="" />
        <h1 className="Profile-name">Jonathan Pynes</h1>
        <div className="Todo">
          <h1 className="Todo-header">Todo</h1>
          <div className="Todo-ul-li-container">
            <ul className="Todo-ul">
              <li className="Todo-ul-li">Take out the trash</li>
              <li className="Todo-ul-li">Expose the evidence</li>
              <li className="Todo-ul-li">Practice Yoga</li>
            </ul>
          </div>
        </div>
        <div className="Done">
          <h1 className="Done-header">Done</h1>
          <div className="Done-ul-li-container">
            <ul className="Done-ul">
              <li className="Done-ul-li">Turn off the stove</li>
              <li className="Done-ul-li">Meditation</li>
              <li className="Done-ul-li">RockStar banner</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
