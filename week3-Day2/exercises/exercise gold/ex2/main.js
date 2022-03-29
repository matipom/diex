// Create 2 variables

let str1 = "mix";
let str2 = "pod";


// Slice out and swap the first 2 characters of the two strings from part 1.

let newStr1 = str1.substr(0,2);

let newStr2 = str2.substr(0,2);

let newWord1 = newStr1 + str2.substr(-1);

let newWord2 = newStr2 + str1.substr(-1);

console.log(newWord1 +" " + newWord2);


//Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).

let str3 = str1.concat(" ", str2);

//Finally console.log the new concatenated string.


console.log(str3);

