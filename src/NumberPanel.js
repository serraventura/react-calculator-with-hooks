import React from "react";

const NumberPanel = ({ onClick }) => {
  return (
    <ul>
      {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(i => (
        <li key={i}>
          <button onClick={() => onClick(+i)}>{i}</button>
        </li>
      ))}
    </ul>
  );
};

export default NumberPanel;
