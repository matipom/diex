//EXERCISE 1

// Write a program to check whether a string is blank or not.

// function isBlank(p1){
// 	if(p1===""){
// 		return true
// 	}else{
// 		return false
// 	}
// };


// console.log(isBlank(''))


//EXERCISE 2

// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."


// function abbrevName(p1){
// 	let shortName = p1.substring(0, p1.indexOf(" ")+2);
// 	return `${shortName}.`
// }


// console.log(abbrevName("Matias Pomerantz"));


//EXERCISE 3

// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.

// function swapLetters(letters){
// 	let newLetters = ''
// 	for(let i=0; i<letters.length;i++){
// 		if(letters[i]==letters[i].toLowerCase()){
// 		 	newLetters+=letters[i].toUpperCase();
// 		}else{
// 			newLetters+=letters[i].toLowerCase();
// 		}
// 	}
// 	return newLetters;
// }


// console.log(swapLetters("Hello HoW ArE yOU"));


//EXERCISE 4

// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Examples

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false




let isOmnipresent = (array) => {
	for(let i=0; i<array.length; i++){
		console.log(array)
	}
}


let array = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]];

let result = array.forEach(isOmnipresent)