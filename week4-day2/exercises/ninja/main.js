//EXERCISE 1

// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.


// function randomNumber(){
// 	let number = Math.floor(Math.random() * 100) + 1;
// 	console.log(number)
// 	for(let i=0; i<number; i++){
// 		if(i%2==0){
// 		console.log(i)
// 		}	
// 	}
// }

// randomNumber()


//EXERCISE 2


// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']


// let capitalize = string => {
// 	let newString = "";
// 	let newString2 = "";
// 	let string3 = [];
// 	for(let i=0; i<string.length; i++){
// 		if(i%2==0){
// 		 	newString += string[i].toUpperCase();
// 		}else{
// 			newString += string[i];
// 		}
// 		if(i%2==1){
// 		 	newString2 += string[i].toUpperCase();
// 		}else{
// 			newString2 += string[i];
// 		}
// 	}
// 	string3.push(newString, newString2)

// 	return string3
// }
// console.log(capitalize("holacomoestas"))

//EXERCISE 3

// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.


// let palindrome = string => {
// 	let newString = string.toLowerCase();
// 	let newString2 = newString.split("");
// 	let reverse = newString2.reverse();
// 	let join = reverse.join("");

// 	if(string === join){
// 		return `the ${string} and ${join} are palindrome`
// 	}else{
// 		return `the ${string} and ${join} are not palindrome`
// 	}
// }

// console.log(palindrome("madam"))


//EXERCISE 4

// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example:

// const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
// const array2 = ['a', 3, 4, 2]; // should return 4 
// const array3 = []; // should return 0



// let arrayNumber = []

// let biggestNumber = 0;
// let biggestNumberInArray = (arrayNumber) => {

// 	if(arrayNumber>biggestNumber){
// 		biggestNumber= arrayNumber  
// 	}
	
// 	return biggestNumber
// }
// arrayNumber.forEach(biggestNumberInArray)

// console.log(biggestNumberInArray(arrayNumber))


//EXERCISE 5

// Write a JS function that takes an array and returns a new array with only unique elements.

// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
let array = [1,2,3,3,3,3,4,5]

let newList = [];

for(let i=0; i<array.length;i++){
	if(array[i+1]!= array[i]){
		newList.push(array[i])
	}
}
console.log(newList)