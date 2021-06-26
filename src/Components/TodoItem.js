import React from "react";
import styled from "styled-components";

const TodoItem = (props) => {
  const { title, description, isCompleted, id } = props.todo;
  return (
    <li className="todo_item">
      <p>
        <BoldText>Title: </BoldText> {title}
      </p>
      <p>
        <BoldText>Description: </BoldText> {description}
      </p>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => props.handleComplete(id)}
      />
      <button onClick={() => props.handleDelete(id)}>Delete</button>
    </li>
  );
};

const BoldText = styled.p`
  font-weight: bold;
`;

export default TodoItem;
