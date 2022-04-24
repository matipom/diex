//Exercise 1 : Scope


// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
// // prediction a = 3
// // run in the console:
// q1()

//#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
//     console.log(a)
// }


// // run in the console:
// q22() // prediction a=0
// q2()// prediction a=5 
// q22()// prediction a=0 ??

// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }
// // prediction

// // run in the console:
// q3() // prediction hello
// q32()// prediction  nothing
//#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }



// // run in the console:
// q4() // prediction test

//#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);

// prediction alert 5
// prediction alert 5


//Exercise 2 : Ternary Operator


// function winBattle(){
//     return true;
// }

// // Transform the winBattle() function to an arrow function.
// let winBattle = () => {return true}

// // console.log(winBattle())

// // // Create a variable called experiencePoints.

// // // Assign to this variable, a ternary operator. If winBattle() is true,  
// // //the experiencePoints variable should be equal to 10, else the variable should be equal to 1.

// let experiencePoints = winBattle() ? "10" : "1"
// console.log(experiencePoints)
// //
// Console.log the experiencePoints variable.


//Exercise 3 : Is It A String ?

// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
// Example:

// function isString(p1){
//     if(typeof p1 == 'string'){
//         return true
//     }else{
//         return false
//     }
// }

// let isString = p1 => typeof p1 == 'string' ? true : false


// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


//Exercise 4 : Colors

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// //Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

// // colors.forEach((element,index) => { 
// //     console.log(`My ${index+1}# choice is ${element}`)
// // })


// //Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")


// // colors.some(value=> { 

// //     if(value == "Violet"){
// //         return console.log("Yeah")
// //     }else{
// //         return console.log("No...")
// //     }
// // });

// console.log(colors.some((value)=> { return (value == "Violet"); }))


//Exercise 5 : Colors #2

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];

// // Write a JavaScript program that displays the colors in the following order :
// // “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…

// // Hint : Use the array methods taught in class and ternary operator.

// let result =''
// color.forEach((element,index) => {
//  if(index==0){
//    result+=`My ${index+1}st choice is ${element},\n`
//  }else if(index==1){
//     result+=`My ${index+1}nd choice is ${element},\n`
//  }else if(index==2){
//     result+=`My ${index+1}rd choice is ${element},\n`
//  }else{
//     result+=`My ${index+1}th choice is ${element}.\n`
//  }
    
//  })
// console.log(result)

//Exercise 6 : Bank Details

// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
let bankAmount = 1800;
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const percentajeAmount = 17;
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
let details = ["+200", "-100", "+146", "+167", "-2900"];
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]

// Create a program that modifies the expenses (ie. the positive AND the negative expenses)
// so that they will include taxes (multiply each expense by the VAT).
 let newDetails = [];
details.forEach(element => {
     
    newDetails.push(element-element*percentajeAmount/100)
})
console.log(newDetails)
// Display your current bankAccount standing at the end of the month.


let totalSpend = newDetails.reduce((total, currentValue)=>{
    return total + currentValue
})

console.log(`My current bank amount at the end of the month is ${bankAmount + totalSpend}`)
