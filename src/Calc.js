import React, { useState } from "react";
import styled from "styled-components";
import { calcExpression } from "./calcExpression";
import ActionsPanel from "./ActionsPanel";
import Display from "./Display";
import NumberPanel from "./NumberPanel";

const CalcWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid;
  width: 183px;
`;

const Panel = styled.div`
  display: flex;
`;

const Calc = () => {
  const [currentCalcText, setCurrentCalcText] = useState([]);
  const [calcResult, setCalcResult] = useState(0);

  return (
    <CalcWrapper>
      <Display text={currentCalcText} result={calcResult} />
      <Panel>
        <NumberPanel
          onClick={number => {
            const expression = [...currentCalcText, number];
            setCurrentCalcText(expression);
            setCalcResult(calcExpression(expression.join("")));
          }}
        />
        <ActionsPanel
          onClick={operator => {
            setCurrentCalcText([...currentCalcText, operator]);
          }}
        />
      </Panel>
    </CalcWrapper>
  );
};

export default Calc;
