// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). 
// You then have to check the validity of the user’s number :

// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 
// (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.


let playTheGame = () => {
	let doYouWantToPlay = confirm("Would you like to play the game");
	if(doYouWantToPlay==true){
		var userNumber = Number(prompt("Please enter a number between 0 and 10"));
		if(isNaN(userNumber) || userNumber == String() || userNumber == undefined){
		alert("Sorry not a number, Goodbye")
		}else if(userNumber<0 || userNumber>10){
			alert("Sorry, is not a good number")
		}else if(userNumber>=0 || userNumber<=10){
			let computerNumber = Math.floor(Math.random() * 11);
			console.log(userNumber, computerNumber)
			return {userNumber, computerNumber}
			
		}
		
	}else{
		alert("No problem, Goodbye")
	}
			
}


let test = (userNumber,computerNumber) => {
	console.log(userNumber, computerNumber)
}
// Outside of the playTheGame() function, create a new function named test(userNumber,computerNumber)
//  that takes 2 parameters : userNumber and computerNumber

// The point of this function is to check if the userNumber is the same as the computerNumber:
// If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again”
//  (Hint: use the built-in prompt() function to ask the user for a new number).

// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again”
//  (Hint: use the built-in prompt() function to ask the user for a new number).

// If the user guessed more than 3 times, alert “out of chances” and exit the function.













// let checkValue = (value) => {
// 	 if (isNaN(value)) {
//     console.log(value)
//     return "Sorry Not a number, Goodbye" /*type string*/
//   } else if (value <= 0 || value >= 10) {
//     console.log(value)
//     return "Sorry it’s not a good number, Goodbye" /*type string*/
//   }
//   return value //type number
// }

// let askForNumberToStart = () => {
// 	let numberFromUser = Number(prompt("Enter a number between 0 and 10"));
// 	let testResult = checkValue(numberFromUser);
	
// }

// let playTheGame = () => {		
// 	let doYouWantToPlay = confirm("Would you like to play the game");
// 	if(doYouWantToPlay){
// 			let computerNumber = Math.round(Math.random() * (10-0)+0);

// 		}else{
// 			alert("No problem, Goodbye");
// 		}	
// };


// let test = (userNumber, computerNumber) => {
// 	if(userNumber === computerNumber){
// 		return "winner";
// 	}else if(userNumber > computerNumber){
// 		return "Your number is bigger than the computer's"
// 	}else{
// 		return "Your number is smaller than the computer’s"
// 	}
// }

// check the validity of the users number

// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is
//  a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.
 


// let checkvalue = (value) => {
//   // check if value is nan
//   //else value >0 and value<10
//   if (isNaN(value)) {
//     console.log(value)
//     return "Sorry Not a number, Goodbye" /*type string*/
//   } else if (value <= 0 || value >= 10) {
//     console.log(value)
//     return "Sorry it’s not a good number, Goodbye" /*type string*/
//   }
//   return value //type number
// }


// let test = (userNumber, computerNumber) => {
//   /*equality winner*/
//   /*user> Your number is bigger then the computer’s*/
//   /*Your number is smaller then the computer’s*/
//   if (userNumber === computerNumber) {
//     return "winner"
//   }
//   else if (userNumber > computerNumber) {
//     return "Your number is bigger then the computer’s"
//   } else {
//     return "Your number is smaller then the computer’s"
//   }
// }


// let testLoop = (testResult, numbersOfTest, computerNumber) => {
//   if (testResult === "winner") {
//     alert("you Won")
//     return
//   } else {
//     console.log(testResult, numbersOfTest)
//     alert(testResult)
//     if (numbersOfTest < 3) {
//       numbersOfTest++
//       userCheckAndGameLauncher(computerNumber, numbersOfTest)
//     } else {
//       alert(`out of Chance the number was ${computerNumber}`)
//     }
//   }
// }



// let userCheckAndGameLauncher = (computerNumber, numbersOfTest) => {
//   //checkvalue and do smthing else
//   let numberFromUser = Number(prompt("give me a number between 0 and 10"))
//   let testResult = checkvalue(numberFromUser)
//   if (typeof testResult === "string") {
//     alert(testResult)
//     userCheckAndGameLauncher(computerNumber, numbersOfTest)
//     // return false
//   } else {
//     //continueTheGame
//     console.log(testResult)
//     let testR = test(numberFromUser, computerNumber)
//     testLoop(testR, numbersOfTest, computerNumber)
//     // return true
//   }
// }
// let playTheGame = () => {
//   let ndoesHeWantToPlay = confirm("do you wanna play")
//   let numbersOfTest = 1
//   if (ndoesHeWantToPlay) {
//     let computerNumber = Math.round(Math.random() * (10 - 0) + 0);
//     userCheckAndGameLauncher(computerNumber, numbersOfTest)
//   } else {
//     alert("goodBye")
//   }
// }