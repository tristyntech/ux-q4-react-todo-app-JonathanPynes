import React from "react";

const TodoItem = (props) => {
  return (
    <li className="todo_item">
      <p>{props.todo.title}</p>
      <input type="checkbox" defaultChecked={props.todo.completed} />
    </li>
  );
}

export default TodoItem;
