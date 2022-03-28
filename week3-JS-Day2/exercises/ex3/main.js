// Prompt the user for the first number.
// Store the first number in a variable called num1.

let num1 = prompt("Enter the first number");
console.log(num1);
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?

// num1 = Number(num1); Also can use this method
num1 = parseInt(num1);
console.log(typeof num1);


// Prompt the user for the second number.
// Store the second number in a variable called num2.


let num2 = prompt("Enter the second number");
num2 = parseInt(num2);


//Create an Alert where the value is the SUM of num1 and num2.

alert("The sum of "+num1+" and "+num2+" is: "+(num1+num2));

//BONUS: Make a program that can subtract, multiply, and also divide!

alert("The substraction of "+num1+" and "+num2+" is: "+(num1-num2)+"\r\n"+
      "The multiply of "+num1+" and "+num2+" is: "+(num1*num2)+"\r\n"+
	  "The division of "+num1+" and "+num2+" is: "+(num1/num2));

