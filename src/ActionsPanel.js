import React from "react";
import styled from "styled-components";

const ActionsPanelWrapper = styled.ul`
  background-color: gray;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 43px;

  li {
    font-color: white;
    display: inline-block;
    padding: 10px;
  }
`;

const Button = styled.button`
  border: 0;
  font-size: 18px;
  background-color: transparent;
  color: white;
`;

const ActionsPanel = ({ onClick }) => {
  return (
    <ActionsPanelWrapper>
      {["+", "-", "*", "/"].map(i => (
        <li key={i}>
          <Button onClick={() => onClick(i)}>{i}</Button>
        </li>
      ))}
    </ActionsPanelWrapper>
  );
};

export default ActionsPanel;
