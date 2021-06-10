import React from "react";
import "./App.css";
import hamburger from "./images/Hamburger Menu.svg";
import profile from "./images/Profile b&w.jpg";
import Sidebar from "./Components/Sidebar";
import TodoItem from "./Components/TodoItem";

function App() {
  let data = {
    user: {
      name: "Jon",
      avavtar: profile,
    },
    todoList: [
      {
        title: "Finish portfolio",
        description: "finish the portfolio",
        completed: false,
      },
      {
        title: "Feed Dog",
        description: "Take out food and fee dog",
        completed: true,
      },
      {
        title: "Finish portfolio",
        description: "Do HTML, CSS and JavaScript",
        completed: false,
      },
    ],
  };

  return (
    <div>
      <Sidebar user={data.user} />
      <h1>Todos</h1>
      <ul>
        {data.todoList.map((item) => (
          <TodoItem todo={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
