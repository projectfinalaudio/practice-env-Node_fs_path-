const log = console.log;

// AREA: CIRCLE
const pi = 3.14;
const circleArea = (r) => `The area of the Circle with radius,${r} is: ${pi * (r * r)} units squared.`;
log(circleArea(10));

// SUM OF TWO NUMBERS
const sum = (num1, num2) => `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
log(sum(58, 34));

// TEMPERATURE CONVERSION(Fahrenheit to Celcius)
const convertTemp = (temp) => `The Temperature in C is: ${ Math.floor((temp - 32) * 5/9 ) } degrees Celcius.`;
log(convertTemp(56));