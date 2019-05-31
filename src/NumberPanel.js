import React from "react";
import styled from "styled-components";

const NumberPanelWrapper = styled.ul`
  background-color: black;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 141px;

  li {
    font-color: white;
    display: inline-block;
    padding: 10px;
  }
`;

const Button = styled.button`
  border: 0;
  font-size: 18px;
  background-color: black;
  color: white;
`;

const NumberPanel = ({ onClick }) => {
  return (
    <NumberPanelWrapper>
      {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(i => (
        <li key={i}>
          <Button onClick={() => onClick(+i)}>{i}</Button>
        </li>
      ))}
    </NumberPanelWrapper>
  );
};

export default NumberPanel;
