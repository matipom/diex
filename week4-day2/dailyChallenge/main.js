// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:


let words = prompt("enter words separated by comma");

let array = words.split(",");
console.log(array);
var longestWord = '';
let frame = '';
let border = '';
let frameWords = '';
let difSpaces = '';

function star(){
	for(let i=0; i<array.length;i++){
		if(array[i].length>longestWord.length){
			longestWord = array[i];
		}
	}

	for(i=0; i<longestWord.length*3-1; i++){
		border += '*';
 	}
 	let borderLength = border.length;
 	let wordLine;
	for(let i = 0; i<array.length; i++){
		wordLine = borderLength - array[i].length;
		frameWords += `* ${" ".repeat(wordLine/2)}${longestWord.replace(longestWord.substr(longestWord[0]),array[i])}${" ".repeat(wordLine/2)} *\n`
	}
	// for(let i = 0; i < array.length; i++){
	// 		// console.log((longestWord.length - array[i].length)/2)

	// 	difSpaces = (longestWord.length-array[i].length)/2+1;
	// 	// difSpaces1 = difSpaces.repeat(" ")
	// 	frameWords += `*${" ".repeat(difSpaces)}${array[i]}${" ".repeat(difSpaces)}*\n`

	// }	
	
 	return `${border}\n${frameWords}${border}`

}
let result = star();
console.log(result)

//I DID THE FRAM BUT DIDNT KNOW HOW TO PUT THE STARS AT THE END WITH THE SAME PADDING TO ALL THE WORDS