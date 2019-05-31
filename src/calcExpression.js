export const calcExpression = fn =>
  new Function("return " + fn.replace(/[^-()\d/*+.]/g, ""))(); // eslint-disable-line
