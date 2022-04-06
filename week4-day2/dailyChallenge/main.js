// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

console.log('a \xa0\xa0\xa0 a');
console.log('a a')
let words = prompt("enter words separated by comma");

let array = words.split(",");
console.log(array);
let longestWord = '';
let frame = '';
let border = '';
let = frameWords = '';
function star(){
	for(let i=0; i<array.length;i++){
		if(array[i].length>longestWord.length){
			longestWord = array[i];
		}
		frameWords += `* ${array[i]} *\n`
	}
	for(i=0; i<longestWord.length*2; i++){
		border += '*';
 	}
 	return `${border}\n${frameWords}${border}`

}
let result = star();
console.log(result)

//I DID THE FRAM BUT DIDNT KNOW HOW TO PUT THE STARS AT THE END WITH THE SAME PADDING TO ALL THE WORDS