// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”. 
//For example, “The movie is not that bad, I like it”.

// Create a variable called wordNot where it’s value is the first appearance of the substring “not” (from the sentence variable).
// Create a variable called wordBad where it’s value is the first appearance of the substring “bad” (from the sentence variable).
// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.


let sentence = "The movie is not that bad, i like it";

let wordNot = "not";
let wordBad = "bad";

console.log(sentence.indexOf("not"))
console.log(sentence.indexOf("bad")+3)

if(sentence.indexOf("bad") > sentence.indexOf("not")){
	console.log(sentence.replace(sentence.slice(sentence.indexOf("not"), sentence.indexOf("bad")+3), "good"));
}else{
	console.log("The movie is not that bad, i like it");
};
