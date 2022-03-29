//Prompt the user for a number

let number = prompt("enter a number");

switch(true){
	case number > 2:
	case number %2 ==0:
	console.log("B"+'o'.repeat(number)+"m!");
	break;
	case number > 2:
	case number %5 ==0:
	console.log("B"+'o'.repeat(number)+"m");
	break;
	case number < 2:
	console.log("Boom");
	break;

}