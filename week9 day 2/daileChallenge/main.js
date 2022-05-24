//1rst Daily Challenge

// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.


// function makeAllCaps(array){
// 	let arrayUpper = []
// 	return new Promise((resolve, reject)=> {
// 		let toResolve = array.every(element => {
// 			if(typeof element === 'string'){
// 				arrayUpper.push(element.toUpperCase())
// 				return true
// 			}else{
// 				return false
// 			}
// 		});
// 	if(toResolve){
// 		resolve(arrayUpper)
// 	}else{
// 		reject("all are not string")
// 	}
// 	})

// }

// function sortWords(arrayUpper){
// 	return new Promise((resolve, reject)=>{
// 		if(arrayUpper.length > 4){
// 			resolve(arrayUpper.sort())
// 		}else{
// 			reject('Fail. the length of the array is not bigger than 4')
// 		}
// 	})
	
// }

// makeAllCaps(['pear','orange','string', 'apple', 'kiwi'])

// 	.then(sortWords)
// 	.then(result => console.log(result))
// 	.catch(error => console.log(error))


	//DOESNT SHOW ME THE REJECT OF THE FIRST FUNCTION, DONT KNOW IF IS OK



//2nd Daily Challenge

let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`


function toJs(morse){
	return new Promise((resolve, reject)=>{
		if(morse === ''){
			reject('Error')
		}else{
			let morseJSON = JSON.parse(morse)
			resolve(morseJSON)
		}
	})
}



function toMorse(morseJS){
	return new Promise((resolve, reject) =>{
		let userAnswer = prompt("enter a word or sentence").toLowerCase().split("");
		let toResolve = userAnswer.map(letter => {
			if(!Object.keys(morseJS).includes(letter)){
				reject('sorry at least one word doestn exist in the morse')
			}else{
				return morseJS[letter]
			}
		})
		resolve(toResolve)
	})
	
}

function joinWords(morseTranslation){
	morseTranslation.forEach(letter => {
		let div = document.createElement("div");
		let p = document.createElement("p");
		p.textContent = letter;
		div.append(p)
		document.getElementById("container").append(div)
	})
}

toJs(morse)
	.then(toMorse)
	.then(joinWords)
	.catch(error => console.log(error))


