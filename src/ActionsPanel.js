import React from "react";

const ActionsPanel = ({ onClick }) => {
  return (
    <ul>
      {["+", "-", "*", "/"].map(i => (
        <li key={i}>
          <button onClick={() => onClick(i)}>{i}</button>
        </li>
      ))}
    </ul>
  );
};

export default ActionsPanel;
