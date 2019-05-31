import React, { useState } from "react";
import { calcExpression } from "./calcExpression";
import ActionsPanel from "./ActionsPanel";
import Display from "./Display";
import NumberPanel from "./NumberPanel";

const Calc = () => {
  const [currentCalcText, setCurrentCalcText] = useState([]);
  const [calcResult, setCalcResult] = useState(0);

  return (
    <div>
      <Display text={currentCalcText} result={calcResult} />
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
    </div>
  );
};

export default Calc;
