// //EXERCISE  1

// //Using a DOM property, retrieve the h1 and console.log it.


// let getH1 = document.querySelector("h1");
// console.log(getH1);

// //Using DOM methods, remove the last paragraph in the <article> tag.


// let x = document.querySelector("article");
// let p = x.lastElementChild;
// x.removeChild(p);

// //Add a event listener which will change the background color of the h2 to red, when it’s clicked on.



// let changeColorh2 = document.querySelector("h2");
// changeColorh2.addEventListener('click', function(){
// 	changeColorh2.style.backgroundColor = "red"
// });


// //Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// let h3NotDisplay = document.querySelector("h3");
// h3NotDisplay.addEventListener('click', function(){
// 	h3NotDisplay.style.display = "none";
// });



// // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// let btn = document.createElement("button");
// let text = document.createTextNode("Click Me");

// btn.appendChild(text);

// document.body.append(btn);
// let listp = document.querySelectorAll("p");
// document.querySelector("button").addEventListener('click', function(){
// 	for(let i=0; i<listp.length; i++){
// 		listp[i].style.fontWeight = "bold";
// 	}
// });


// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// getH1.addEventListener("mouseover", function(){
// 	getH1.style.fontSize = Math.floor(Math.random() * 100)+"px";
// })

// // BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// let p2 = document.querySelectorAll("p")[1];

// p2.addEventListener("mouseover", function(){
// 	p2.fadeIn()
// })


//EXERCISE 2

// Retrieve the form and console.log it.


// console.log(document.querySelector("form"));


// // Retrieve the inputs by their id and console.log them.

// console.log(document.getElementById("fname"), document.getElementById("lname"), document.getElementById("submit"));

// // Retrieve the inputs by their name attribute and console.log them.


// console.log(document.querySelectorAll('input[name=fname]'), document.getElementsByName("lname"))

// // When the user submits the form (ie. submit event listener)
// // get the values of the input tags,
// // make sure that they are not empty,
// // create an li per input value,
// // then append them to a the <ul class="usersAnswer"></ul>, below the form

// let clickForm = document.querySelector("form");
// console.log(clickForm)
// clickForm.addEventListener("submit", function(e){
// 	e.preventDefault()
// 	let valueInputName = document.getElementById("fname").value;
// 	let valueInputLName = document.getElementById("lname").value;
	
// 	let liName = document.createElement("li");
// 	let liLName = document.createElement("li");

// 	liName.append(valueInputName);
// 	liLName.append(valueInputLName);

// 	console.log(liName)
// 	console.log(liLName)
// 	let ul = document.getElementsByClassName("usersAnswer")[0]
// 	// let ul = document.querySelector(".usersAnswer")
// 	ul.append(liName)
// 	ul.append(liLName)
// 	ul.style.listStyle = "none";
// })




//Exercise 3 : Transform The Sentence


// Create a global variable named allBoldItems.

// var allBoldItems; 

// // Create a function called getBold_items() that takes no parameter.
// //  This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// function getBold_items(){
// 	 allBoldItems = document.getElementsByTagName("strong")
// 	console.log(allBoldItems)
// 	}


// getBold_items()


// // Create a function called highlight() that changes the color of all the bold text to blue.

// function highlight(){
// 	for (var i=0; i<allBoldItems.length; i++)
//    {                                                    
//     allBoldItems[i].style.color = "blue";
//     }
// }

// // Create a function called return_normal() that changes the color of all the bold text back to black.

// function return_normal(){
// 	for (var i=0; i<allBoldItems.length; i++)
//    {                                                    
//     allBoldItems[i].style.color = "black";
//     }
// }


// let elementP = document.querySelector("p");

// elementP.addEventListener('mouseover', function(){
// 	highlight()
// })

// elementP.addEventListener('mouseout', () => {
// 	return_normal()
// })

// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph),
//  and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example


//Exercice 4 : Volume Of A Sphere

// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

// document.getElementById("submit").addEventListener("click", (e) => {
// 	e.preventDefault();
// 	let radius = parseInt(document.getElementById("radius").value);
// 	let x = Math.PI;
// 	let result = 3/4*(x)*(radius**3)
// 	console.log(result);
// 	let volume = document.getElementById("volume");
// 	volume.value = result
// })

//Bonus Exercise 5 : Event Listeners

// Add as many events listeners as possible to one element on your webpage. 
// Each listener should do a different thing, for instance- change position x, change position y, change color, change the font size… and more.

let myButton = document.getElementById("manyEvents");
let myDiv = document.getElementById("myDiv");

myButton.addEventListener('click', ()=>{
	myDiv.style.backgroundColor = 'blue'
	myDiv.style.position = 'absolute';
	myDiv.style.left = "100px";
	myDiv.style.top = "250px";
})

myButton.addEventListener('mouseover', () => {
	myDiv.style.transform = "rotate(19deg)"
	myDiv.style.width = "150px"
	myDiv.style.height = "150px"
})

myButton.addEventListener('mouseout', () => {
	myDiv.style.transform = "none"
	myDiv.style.width = "50px"
	myDiv.style.height = "50px"
})