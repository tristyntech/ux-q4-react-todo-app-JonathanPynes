import React from "react";



const TodoItem = (props) => {
  const {title, description, isCompleted, id} = props.todo
  return (
    <li className="todo_item">
      <p>{title}</p>
      <p>{description}</p>
      <input 
      type="checkbox" 
      checked={isCompleted}
      onChange={()=> props.handleComplete(id)} 
      /> 
      </li>
  );
}

export default TodoItem;
