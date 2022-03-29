//Prompt the user for a number

let number = prompt("enter a number");

if(number <= 2 && number%0){
	console.log("boom!");
}
if(number <= 2){
	console.log("boom");
}
if(number >=2 && number%0){
	console.log("b"+"o".repeat(number)+"m!");
}
if(number >= 2){
	console.log("b"+"o".repeat(number)+"m");
};
