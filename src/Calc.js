import React, { useState } from "react";
import ActionsPanel from "./ActionsPanel";
import Display from "./Display";
import NumberPanel from "./NumberPanel";

const Calc = () => {
  return (
    <div>
      <Display />
      <NumberPanel />
      <ActionsPanel />
    </div>
  );
};

export default Calc;
