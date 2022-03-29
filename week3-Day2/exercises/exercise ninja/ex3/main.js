//Ask the user to give you a sentence containing the word “Nemo”

let sentence = prompt("Write a sentence containing the word Nemo");

//Find the word “Nemo”
//Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".



if (sentence.indexOf("Nemo")!=undefined && sentence.indexOf("Nemo")!= -1){
	console.log("i found Nemo at the position: "+sentence.indexOf("Nemo"));	
}else{
	console.log("i cant find Nemo");
};