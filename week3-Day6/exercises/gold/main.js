//EXERCISE 1

// let numbers = [123, 8409,4, 100053, 333333333, 7]


// // Loop through the array above and determine whether or not each number is divisible by three.
// // Each time you loop console.log true or false.

// let boolean = true;
// for(let i = 0; i<numbers.length; i++){
// 	if(numbers[i]%3==0){
// 		console.log(`The number ${numbers[i]} is divisible by 3 ${boolean}`)
// 	}else{
// 		console.log(`The number ${numbers[i]} is not divisible by 3 ${!boolean}`)
// 	}
// }


//EXERCISE 2

// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina"
// }


// // Given the object above where the key is the student’s name and the value is the country they are from.

// // Prompt the student for their name.

// // If the name is in the object, console.log the name of the student and the country they come from.
// // For example: "Hi! I'm [name], and I'm from [country]."
// // Hint: You don’t need to use a for loop, just look up the statement if ... in

// // If the name is not in the object, console.log: "Hi! I'm a guest."


// let student = prompt("Enter your name");


// for (let property in guestList) {
//  	if(student == property){
//  		console.log(`Hi! I'm ${property}, and i'm from ${guestList[property]}`)
//  		break;
//  	}else{
//  		console.log(`Hi! i'm a guest`)
//  		break;
//  	}
// }

//EXERCISE 3



let age = [20,5,12,43,98,55];


// Requirements : Don’t use built-in Javascript methods to answer the following questions.
//  You have to create the logic by yourself. Use simple for loops.


// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the highest age in the array.

let sum = 0;
let highestAge = 0;
for(let i=0; i<age.length; i++){
	sum+=age[i];
	if(age[i]>highestAge){
		highestAge = age[i]
	}
}
console.log(sum, highestAge)

