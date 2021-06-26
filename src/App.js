import React, { useState, useEffect } from "react";

import "./App.css";
import hamburger from "./images/Hamburger Menu.svg";
import profile from "./images/Profile b&w.jpg";
import Sidebar from "./Components/Sidebar";
import TodoItem from "./Components/TodoItem";
import shortid from "shortid";
import styled from "styled-components";

export default function App() {
  const [todoList, setTodoList] = useState([
    {
      title: "Finish portfolio",
      description: "finish the portfolio",
      isCompleted: false,
      id: shortid.generate(),
    },
    {
      title: "Feed Dog",
      description: "Take out food and fee dog",
      isCompleted: false,
      id: shortid.generate(),
    },
    {
      title: "Finish portfolio",
      description: "Do HTML, CSS and JavaScript",
      isCompleted: false,
      id: shortid.generate(),
    },
  ]);

  const [user, setUser] = useState({
    name: "Jon",
    avatar: profile,
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //const [isCompleted, setIsCompleted] = useState("false")

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  const resetInputField = () => {
    setTitle("");
    setDescription("");
  };

  const handleButtonClick = () => {
    if (title === "" || description === "") {
      return;
    }
    setTodoList((prevList) => [
      ...prevList,
      {
        title: title,
        description: description,
        isCompleted: false,
        id: shortid.generate(),
      },
    ]);
    resetInputField();
  };

  function handleCompletedTodo(itemId) {
    let newList = todoList.map((todo) => {
      if (todo.id === itemId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(newList);
  }

  return (
    <React.Fragment>
      <Content>
        <Sidebar user={user} />
        <h1>TODO</h1>
        <ul>
          {todoList
            .filter((todo) => !todo.isCompleted)
            .map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                handleComplete={handleCompletedTodo}
              />
            ))}
        </ul>
        <form>
          <label>Add a Title</label>
          <input id="new-title" onChange={handleChangeTitle} value={title} />
          <label>Add the description</label>
          <input
            id="new-description"
            onChange={handleChangeDescription}
            value={description}
          />
        </form>
        <button onClick={() => handleButtonClick()}>Add New ToDo</button>

        <h2>COMPLETED TODO'S</h2>
        <CompletedTodo>
          {todoList
            .filter((todo) => todo.isCompleted)
            .map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                handleComplete={handleCompletedTodo}
              />
            ))}
        </CompletedTodo>
      </Content>
    </React.Fragment>
  );
}

const CompletedTodo = styled.ul`
  color: black;
  text-decoration-line: line-through;
  text-decoration-color: red;
  list-style: none;
`;
const Content = styled.div`
  max-width: 500px;
  margin: auto;
  background: gold;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
