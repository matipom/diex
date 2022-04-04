//EXERCISE 1

// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.


function infoAboutMe(){
	console.log("My name is matias, im 32 years old. And my hobbies are playing football and watch movies")
}

infoAboutMe();


// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


function infoAboutPerson(personName, personAge, personFavoriteColor){
	console.log(`Your name is ${personName}, you are ${personAge} years old and your favorite color is ${personFavoriteColor}`);
}


infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


//EXERCISE 2

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, ask John for the amount of the bill.
// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function

// function calculateTip(){
// 	let bill = parseInt(prompt("how much was the bill"))
// 	if(bill < 50){
// 		let tip = bill*(1.2)
// 		console.log(`The final bill with the 20% of tip is ${tip}`)
// 	}if(bill >= 50 && bill <=200){
// 		let tip = bill*1.15
// 		console.log(`The final bill with the 15% of tip is ${tip}`)
// 	}if(bill>200){
// 		tip = bill*(1.1)
// 		console.log(`the final bill with the 10% of tip is ${tip}`)
// 	}
// }

// calculateTip();





//EXERCISE 3

// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum



// function isDivisible(divisor){
// 	let sum = Number();
// 	let sum1 = Number();

// 	for(let i=0; i<=500; i++){
// 		if(i%23==0){
// 			console.log(i)
// 			sum = sum +i
// 		}
// 	}
// 	console.log(`La suma total es ${sum}`);	

// 	for(let i=0; i<=500; i++){
// 		if(i%divisor==0){
// 			console.log(i)
// 			sum1 = sum1 + i
// 		}
// 	}
// console.log(`La suma total es ${sum1}`);
// }

// //isDivisible();
// //isDivisible(3);
// isDivisible(45)


//EXERCISE 4

// Add the stock and prices objects to your js file.

// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 


// // Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// let shoppingList = ["banana", "orange", "apple"]

// // Create a function called myBill() that takes no parameters.

// // The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// // The item must be in stock.
// // If the item is in stock find out the price in the prices object.

// // Call the myBill() function.

// // Bonus: If the item is in stock, decrease the item’s stock by 1



// function myBill(){
// 			if(stock['apple']){
// 				var priceApple = prices['apple'];
// 				stock['apple'] = stock['apple']-1;
// 				console.log(`The price for one apple is ${prices['apple']}`)
// 			}else{
// 				priceApple = 0;
// 			}
// 			if(stock['banana']){
// 				var priceBanana = prices['banana'];
// 				stock['banana'] = stock['banana']-1;
// 				console.log(`The price for one banana is ${prices['banana']}`)
// 			}else{
// 				priceBanana = 0;
// 			}
// 			if(stock['orange']){
// 				var priceOrange = prices['orange'];
// 				stock['orange'] = stock['orange']-1;
// 				console.log(`The price for one orange is ${prices['orange']}`)
// 			}else{
// 				priceOrange = 0;
// 			}
// 			return console.log(`The total price or your shopping list is ${priceApple+priceOrange+priceBanana}`);
// }

// myBill();

// console.log(stock['banana'])//one less in stock
// console.log(stock['orange'])//one less in stock
// console.log(stock['apple'])//one less in stock/there was 0


// myBill();
// let result = shoppingList.filter(myBill)


//EXERCISE 5

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.



// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false


// function changeEnough(itemPrice, amountOfChange){
// 		let quarter = amountOfChange[0]*0.25;
// 		let dimes = amountOfChange[1]*0.1;
// 		let nickel = amountOfChange[2]*0.05;
// 		let penny = amountOfChange[3]*0.01;

// 		amountOfChange = quarter + dimes + nickel + penny;

// 	if(amountOfChange >= itemPrice){
// 		return true;
// 	}else{
// 		return false;
// 	}

// }	
// // A quarters is 0.25
// // A dimes is 0.10
// // A nickel is 0.05
// // A penny is 0.01

// var resultado = changeEnough(4.25, [25, 20, 5, 0])
// console.log(resultado);


//EXERCISE 6


// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.


function hotelCost(){
	let nights = prompt("How many nights would you like to stay");
		if(nights == 'string'){
		nights = prompt("How many nights would you like to stay");
		}
	let totalPrice = 140*nights
	return totalPrice; 
}

let totalPrice = hotelCost();
console.log(totalPrice)

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// // All other destination : 300$
let destination = ["London", "Paris"]
let price = Number;
function planeRideCost(){
	let destination = String(prompt("Which destination would you like to go"));
	// if(destination != 'string'){
	// 	destination = prompt("Which destination would you like to go");
	// }
	switch(destination){
		case "London":
		`The price for London is ${price = 183}`;
		break;
		case "Paris":
		`The price for Paris is ${price = 220}`;
		break;
		default:
		`The price for all other destination is ${price = 300}`;
		break;
	}
	return price;
}

let destinationFinal = planeRideCost();
console.log(destinationFinal);



// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.


function rentalCarCost(){
	let days = prompt("How many days you want to rent the car");
	let cost = days*40;
	let totalPrice;
	if(days > 10){
		let discount = cost-(days*2);
		return totalPrice = discount;
	}else{
		return totalPrice = cost;
	}
}

let totalRent = rentalCarCost();
console.log(totalRent);


// Define a function called totalVacationCost() that returns the total cost of the user’s vacation
// by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, 
// only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

function totalVacationCost(){
	return `The hotel cost${hotelCost()}, the plane tickets is ${planeRideCost()} and the car cost  ${rentalCarCost()}`;

}

let totalVacation = totalVacationCost();
console.log(totalVacation);