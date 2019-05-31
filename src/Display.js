import React from "react";

const Display = ({ text, result }) => {
  return (
    <div>
      <div data-test="expression">{text.join(" ")}</div>
      <div data-test="result">{result}</div>
    </div>
  );
};

export default Display;
