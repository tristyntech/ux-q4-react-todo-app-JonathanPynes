import React from "react";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <h2>Hello {props.user.name}!</h2>
      <img src={props.user.avatar} />
    </div>
  );
}

export default Sidebar;
