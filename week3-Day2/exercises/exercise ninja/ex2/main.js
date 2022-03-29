//Ask the user for a string of numbers separated by commas

let numbers = prompt("Enter 2 numbers separated by commas");

//Console.log the sum of the numbers.
let num1 = numbers.substr(0,1);
num1 = Number(num1);
let num2 = numbers.substr(2);
num2 = Number(num2);
// numbers = Number(numbers.replace(/,/g, '')); if i have more then 2 numbers how can i sum all of them

let sum = num1+num2
console.log(sum);