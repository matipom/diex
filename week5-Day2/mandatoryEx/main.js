// //EXERCISE 

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


console.log(document.querySelector("form"));


// Retrieve the inputs by their id and console.log them.

console.log(document.getElementById("fname"), document.getElementById("lname"), document.getElementById("submit"));

// Retrieve the inputs by their name attribute and console.log them.

console.log(document.getElementsByName("fname"), document.getElementsByName("lname"))

// When the user submits the form (ie. submit event listener)
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form

let clickForm = document.querySelector("form");
console.log(clickForm)
clickForm.addEventListener("submit", function(){
	let valueInputName = document.getElementById("fname").value;
	console.log(valueInputName);
	let valueInputLName = document.getElementById("lname").value;
	console.log(valueInputLName)
	let liName = document.createElement("li");
	console.log(liName)
	let liLName = document.createElement("li");
	console.log(liLName)
	let liNameFinal = liName.appendChild(valueInputName);
	let liLNamefinal = liLName.appendChild(valueInputLName);
	document.getElementsByClassName("usersAnswer").append(liNameFinal);

})