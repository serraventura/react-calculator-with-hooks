import React from "react";
import styled from "styled-components";

const DisplayWrapper = styled.div`
  background-color: black;
  opacity: 0.8;
  padding: 10px;
`;

const DisplayResult = styled.div`
  color: gray;
  font-size: 16px;
`;

const DisplayExpression = styled.div`
  color: white;
  font-size: 18px;
`;

const Display = ({ text, result }) => {
  return (
    <DisplayWrapper>
      <DisplayExpression data-test="expression">
        {text.join(" ")}
      </DisplayExpression>
      <DisplayResult data-test="result">{result}</DisplayResult>
    </DisplayWrapper>
  );
};

export default Display;
