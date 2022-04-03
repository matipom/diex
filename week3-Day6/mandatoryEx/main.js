// //EXERCISE 1

// //PART I

// let people = ["Greg", "Mary", "Devon", "James"];

// //Write code to remove “Greg” from the people array.
// people.splice(people.indexOf("Greg"), 1);
// console.log(people);

// //Write code to replace “James” to “Jason”.

// people.splice(people.indexOf("James"), 1, "Jason");
// console.log(people);

// //Write code to add your name to the end of the people array.

// people.push("Matias");
// console.log(people);

// //Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// console.log(`The index of Mary is: ${people.indexOf("Mary")}`);

// // Write code to make a copy of the people array using the slice method.
// // The copy should NOT include “Mary” or your name.
// // Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// // Hint: Check out the documentation for the slice method


// let peopleLength = people.length;
// let indexMary = people.indexOf("Mary");
// let newArray = people.slice(indexMary+1,peopleLength);
// console.log(newArray);

// //Write code that gives the index of “Foo”. Why does it return -1 ?

// console.log(people.indexOf("Foo"));
// //gives -1 because it doesnt find it.


// //Create a variable called last which value is the last element of the array.
// // Hint: What is the relationship between the index of the last element in the array and the length of the array?
// let last = people.slice(peopleLength-1);
// console.log(last)

// //the length of a array is the amount of elements in an array
// //and the index of the last element is the position that is that element, because this starts in 0, the index
// //of the last element always will be one number less than the length of the array


// //PART II

// //Using a loop, iterate through the people array and console.log each person.

// for(let i=0; i<peopleLength; i++){
// 	console.log(people[i]);
// }


// //Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// //Hint: take a look at the break statement in the lesson.

// for(let i=0;i<peopleLength; i++){
// 	if(people[i] === "Jason"){
// 		break;
// 	}
// 	console.log(people[i]);
// };


// //EXERCISE 2

// //Create an array called colors where the value is a list of your five favorite colors.

// let colors = ["blue", "red", "green", "yellow", "black"];
// let suffix = ["1st", "2nd", "3rd", "4th", "5th"];
// //Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect…
// let colorsLength = colors.length;
// for(let i=0;i<colorsLength;i++){
// 	let suffix;
// 	switch(i){
// 		case 0:
// 		suffix = 'st';
// 		break;
// 		case 1: 
// 		suffix = 'nd';
// 		break;
// 		case 2:
// 		suffix = 'th';
// 		break;
// 		default:
// 		suffix = 'th';

// 	}
// 	console.log(`My #${i+1}${suffix} choice is ${colors[i]}`);

// }

//Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//Hint : create an array of suffixes to do the Bonus


// for(let i=0;i<colorsLength;i++){
// 	console.log(`My ${suffix[i]} choice is ${colors[i]}`);
// }

//EXERCISE 3

//Prompt the user for a number.
//Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// var number = Number(prompt("please enter a number"));
// console.log(typeof number);

//While the number is smaller than 10 continue asking the user for a new number.
//Tip : Which while loop is more relevant for this situation?

// while(number < 10){
// 	number = parseInt(prompt("please enter a number"));
// };

//EXERCISE 4

// let building = {
//     numberOfFloors : 4,
//     numberOfAptByFloor : {
//         firstFloor : 3,
//         secondFloor : 4,
//         thirdFloor : 9,
//         fourthFloor : 2,
//     },
//     nameOfTenants : ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan :  [4, 1000],
//         david : [1, 500],
//     },
// };

// //Console.log the number of floors in the building.

// console.log(`the number of floors are: ${building.numberOfFloors}`);

// //Console.log how many apartments are on the floors 1 and 3.

// console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);

// //Console.log the name of the second tenant 

// console.log(building.nameOfTenants[1])

// //and the number of rooms he has in his apartment.

// console.log(`he has ${building.numberOfRoomsAndRent.dan[0]} rooms`)

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

// let sumSarah = building.numberOfRoomsAndRent.sarah[1];
// let sumDavid = building.numberOfRoomsAndRent.david[1]
// let sumDan = building.numberOfRoomsAndRent.dan[1]

// if((sumSarah+sumDavid)> sumDan){
// 	building.numberOfRoomsAndRent.dan[1]=1200;	
// }
// console.log(building.numberOfRoomsAndRent.dan);

// //EXERCISE 5

// // Create an object called family with a few key value pairs.
// // Using a for loop, console.log the keys of the object.
// // Using a for loop, console.log the values of the object.


// let family = {
// 	familyMembers: ["dad", "mom", "son", "daughter"],
// 	city: "buenos aires",
// 	ageOfMembers: {
// 		dad: 50,
// 		mom: 49,
// 		son: 14,
// 		daughter: 16
// 	}
// }
// // for(let i=0; i<)

// familyKeys = Object.keys(family);
// familyvalues = Object.values(family);
// familyKeysValues = Object.entries(family);
// console.log(familyKeys, familyvalues, familyKeysValues);
// for(let i=0; i<family.familyMembers.length; i++){
// console.log(familyKeys, familyvalues, familyKeysValues);
// }


//EXERCISE 6

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

let detailsKeys = Object.keys(details)
let detailsValues= Object.values(details)
var sentence = "";
for(let i=0; i<Object.values(details).length;i++){
	 sentence = sentence +  `${detailsKeys[i]} ${detailsValues[i]} `
}
console.log(sentence)

//EXERCISE 7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];


// A group of friends have decided to start a secret society. 
// The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
let namesTogether="";
for(let i=0; i<names.length; i++){
	namesTogether = namesTogether + names.at(i).charAt(0);
}
console.log(`The name sorted is: ${namesTogether.split("").sort().join("")}`)

