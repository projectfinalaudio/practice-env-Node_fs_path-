const log = console.log;
const pi = 3.14;
const path = require('path');

let filePath = path.join(__filename);

log(`Please wait...\n${filePath}\nModule imported successfully!\n*******************************`);

// AREA: CIRCLE
exports.circleArea = (r) => `The Area of the Circle with radius, ${r} is: ${pi * (r * r)} units squared.`; 

// SUM OF TWO NUMBERS
exports.sum = (num1, num2) => `The sum of ${num1} and ${num2} is: ${num1 + num2}.`;

// TEMPERATURE CONVERSION(Fahrenheit to Celcius)
exports.convertTemp = (temp) => `The Temperature in C is: ${Math.floor(5 / 9 * (temp - 32))} degrees Celcius.`;