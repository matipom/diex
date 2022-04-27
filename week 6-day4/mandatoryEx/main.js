// Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.



// let sum = (a, b) => {return a+b}


// console.log(sum(2,3))


// Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.

// function kgToGrams(p1){
// 	console.log(p1*1000)
// }

// kgToGrams(5)
// Then, use function expression and invoke it.

// let kgToGrams = function(p1){
// 	console.log(p1*1000)
// }

// kgToGrams(3)
// Write in a one line comment, the difference between function declaration and function expression.

//in function expression you save the result in a variable, so then you can use it just calling that variable and create an anonymous function


// Finally, use a one line arrow function and invoke it.


// let kgToGrams = p1 => console.log(p1*1000)

// kgToGrams(2)


// Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like 
// "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// let amountChildren = 2;
// let geographicLocation = 'Buenos Aires';
// let jobTitle = 'programmer';
// let partnerName = 'Julia';

// (function (p1, p2, p3, p4){
// 	document.body.innerHTML = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${amountChildren} kids`;

// }(geographicLocation, amountChildren, jobTitle, partnerName));


// Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

// let userName = "Marcus";

// (function (userName){
// 	let newDiv = document.createElement("div");
// 	newDiv.classList.add("nav-item");
// 	let image = document.createElement('img');
// 	image.src = "https://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg"
// 	newDiv.append(userName, image)
// 	document.getElementById("mainDiv").append(newDiv);
// }(userName));



//Exercise 5 : Juice Bar

// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.



// The inner function named addIngredients receives 3 ingredients, and displays on the DOM 
// a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".



// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.



// Create a new inner function named displayJuice that displays on the DOM a sentence like 
// The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.



// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE.
//  Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.


function makeJuice(size){
	let ingredients = [];
	function addIngredients(p1, p2, p3){
		// document.body.innerHTML = `The client wants a ${size} juice, containing ${p1}, ${p2}, ${p3}`
		ingredients.push(p1, p2, p3)
		console.log(ingredients)
		function displayJuice(ingredients){
		document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredients}`	
		}
		ingredients.forEach(displayJuice)
		displayJuice(ingredients);
		// ingredients.forEach(displayJuice(ingredients))
	}
	addIngredients('lemon', 'apples', 'oranges');
	addIngredients('cucumber', 'pear', 'melon');

}

makeJuice('small');





