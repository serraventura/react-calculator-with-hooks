import React, { useState } from "react";
import ActionsPanel from "./ActionsPanel";
import Display from "./Display";
import NumberPanel from "./NumberPanel";

const Calc = () => {
  const [currentCalcText, setCurrentCalcText] = useState([]);
  const [calcResult, setCalcResult] = useState(0);

  return (
    <div>
      <Display text={currentCalcText} result={calcResult} />
      <NumberPanel onClick={number => {}} />
      <ActionsPanel onClick={operator => {}} />
    </div>
  );
};

export default Calc;
