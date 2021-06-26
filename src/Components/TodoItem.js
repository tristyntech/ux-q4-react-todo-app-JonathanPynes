import React from "react";
import styled from "styled-components";

const TodoItem = (props) => {
  const { title, description, isCompleted, id } = props.todo;
  return (
    <TodoItemsLi>
      <p>
        <BoldText>Title: </BoldText> {title}
      </p>
      <p>
        <BoldText>Description: </BoldText> {description}
      </p>
      <label>Check when done!</label>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => props.handleComplete(id)}
      />
      <DeleteButton onClick={() => props.handleDelete(id)}>Delete</DeleteButton>
    </TodoItemsLi>
  );
};

const TodoItemsLi = styled.li`
  margin-top: 2rem;
  padding: 1rem;
  border: solid;
  background-color: lightyellow;
`;
const BoldText = styled.p`
  font-weight: bold;
`;

const DeleteButton = styled.button`
  margin-left: 4rem;
  background-color: darkred;
  color: white;
`;

export default TodoItem;
