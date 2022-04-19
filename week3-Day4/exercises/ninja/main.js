// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

// EXERCISE 1

// let year1 = 2002; 
// let year2 = 2000;
// const d = new Date();
// let year = d.getFullYear();
// if(year1 < year2){
// 	let ageOlder = year - year1;
// 	let ageToFind = ageOlder/2;
// 	let yearToBorn = year2 + ageToFind
// 	console.log(yearToBorn);
// }else{
// 	let ageOlder = year - year2;
// 	let ageToFind = ageOlder/2;
// 	let yearToBorn = year1 + ageToFind
// 	console.log(yearToBorn);
// }


// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length

// let zipUser = prompt("enter your 5 digits of your zip code");

// switch(true){
// 	case isNaN(zipUser):
// 	console.log('Error');
// 	break;
// 	case (zipUser.indexOf(" ")>=0):
// 	console.log('Error');
// 	break;
// 	case zipUser.length > 5 || zipUser.length < 5:
// 	console.log('Error');
// 	break;
// 	default:
// 	console.log('Success')

// }


//EXERCISE 3

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result

let word = prompt("Enter a word");

let str = word.replace(/[aeiou]/gi, '');

console.log(str);

let str2 = word.replace(/[aeiou]/gi, '#');
console.log(str2);

let asd = ''
for(let i = 0; i<word.length; i++){
	let str3 = word[i].replace(/[aeiou]/gi, i);
	asd += str3
}
console.log(asd)