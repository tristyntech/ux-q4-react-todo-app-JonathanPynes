import React, { useState, useEffect } from "react";

import "./App.css";
import hamburger from "./images/Hamburger Menu.svg";
import profile from "./images/Profile b&w.jpg";
import Sidebar from "./Components/Sidebar";
import TodoItem from "./Components/TodoItem";

 
export default function App() {
  const [todoList, setTodoList] = useState([
    {
      title: "Finish portfolio",
      description: "finish the portfolio",
      completed: false,
    },
    {
      title: "Feed Dog",
      description: "Take out food and fee dog",
      completed: false,
    },
    {
      title: "Finish portfolio",
      description: "Do HTML, CSS and JavaScript",
      completed: true,
    },
  ])
 

const [user, setUser] = useState(
 {
    name: "Jon",
    avatar: profile,
  }
);
  // function HeaderBar() {
  //   const user = useContext(CurrentUser);
  //   const notifications = useContext(Notifications);
  
  //   return (
  //     <header>
  //       Welcome back, {user.name}!
  //       You have {notifications.length} notifications.
  //     </header>
  //   );
  // }
  


const [title, setTitle] = useState("")
const [description, setDescription] = useState("")


function handleChangeTitle(e) {
  setTitle(e.target.value)
}
function handleChangeDescription(e) {
  setDescription(e.target.value)
}

const handleButtonClick = ()=>{
  if(title === "" || description === ""){
    return
  }
  setTodoList(prevList=> [...prevList, {title: title, description: description, completed: false}])
 }
 

  return (
    <React.Fragment>
      <Sidebar user={user} />
      <h1>TODO</h1>
      <ul>
       {todoList.filter(item=> !item.completed).map((item) => (
          <TodoItem todo={item} />
        ))}
        </ul>
        <form>
          <label>Add a Title</label>
          <input
          id="new-title"
          onChange={handleChangeTitle}
          value= {title}
          />
          <label>Add the description</label>
          <input
          id="new-description"
          onChange={handleChangeDescription}
          value={description}
          />
        </form>
        <button onClick={()=> handleButtonClick()}>CLICK ME</button>
        
      <h2>COMPLETED TODO'S</h2>
      <ul>
       {todoList.filter(item=> item.completed).map((item) => (
          <TodoItem todo={item} />
        ))}
         </ul>
    </React.Fragment>
  );
}


