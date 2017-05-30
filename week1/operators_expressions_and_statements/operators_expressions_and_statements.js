function multiplyOrDivide(operatorString, num1, num2) {
  // your code here
  /*START SOLUTION*/
  if (operatorString === '/') {
    return num1 / num2;
  } else if (operatorString === '*') {
    return num1 * num2;
  }
  /*END SOLUTION*/
}

module.exports = {
  multiplyOrDivide: multiplyOrDivide
};