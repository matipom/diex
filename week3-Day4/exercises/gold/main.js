// Hint: Use Switch Case





// EXERCISE 1
// Ask the user which language they speak.

// // Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement.
// // For example “english” or “English” or “ENGlish” ect…”

// let lanUserSpeaks = prompt("Which language do you speak");
// let lanLowerCase = lanUserSpeaks.toLowerCase();

// console.log(lanUserSpeaks, lanLowerCase);

// // Create a few conditions :
// // If the user speaks French : display “Bonjour”
// // If the user speaks English : display “Hello”
// // If the user speaks Hebrew : display “Shalom”
// // If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’

// switch(lanLowerCase){
// 	case "french":
// 		alert("Bonjour");
// 		break;
// 	case "english":
// 		alert("Hello");
// 		break;
// 	case "hebrew":
// 		alert("Shalom");
// 		break;
// 	default:
// 		alert("01110011 01101111 01110010 01110010 01111001");
// }




//EXERCISE 2
// Ask the user for their grade.
// let gradeUser = prompt("Which is your grade");

// // If the grade is bigger than 90, console.log “A”

// // If the grade is between 80 and 90 (included), console.log “B”

// // If the grade is between 70(included) and 80 (included), console.log “C”
// // If the grade is lower than 70, console.log “D”

// switch(true){
// 	case gradeUser > 90: 
// 	console.log("Your grade is A");
// 	break;
// 	case (gradeUser > 80 && gradeUser <= 90): 
// 	console.log("Your grade is B");
// 	break;
// 	case (gradeUser >= 70 && gradeUser <= 80): 
// 	console.log("Your grade is C");
// 	break;
// 	default:
// 	console.log("Your grade is D");
// }


//EXERCISE 3

// Prompt the user for a string. It must be a verb.

let verbUser = prompt("Please enter a verb");

let final3words = verbUser.slice(-3);
let verbLength = verbUser.length;
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.

switch(true){
	case (verbLength >= 3)&&(final3words != "ing"):
	console.log(verbUser+"ing");
	break;
	case (verbLength >= 3)&&(final3words == "ing"):
	console.log(verbUser.substr(0,verbUser.length-3)+"ly");
	break;
	default:
	console.log(verbUser);
}

