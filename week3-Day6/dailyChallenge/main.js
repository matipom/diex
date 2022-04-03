// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops
// 	 (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.

let array = ["*"];
let string = array.join(" ");

let sum = string;
// for(i=0; i<5; i++){
// 	sum = sum+" *"
// 	console.log(sum)
// }

for(i=0; i<6; i++){
		console.log(sum)

	sum = sum+" *"
}