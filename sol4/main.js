const { add, subtract, multiply, divide } = require('./math');

const num1 = 10;
const num2 = 5;

console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
console.log(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`);
