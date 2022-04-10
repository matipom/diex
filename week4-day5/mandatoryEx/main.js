//EXERCISE 1

// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (li).
// Finally, append this updated list node to the unordered list above, using the appendChild method.


// document.getElementById("navBar").setAttribute("id","socialNetworkNavigation");


// let newLi = document.createElement("li");

// let textNode = document.createTextNode("Logout");

// newLi.append(textNode);

// console.log(newLi)

// document.getElementsByTagName("ul")[0].appendChild(newLi);


// // Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul).
// //  Display the text of each link. (Hint: use the textContent property).

// document.getElementsByTagName("ul")[0].setAttribute("id", "onlyUl");

// let firstChild = document.getElementById("onlyUl").firstElementChild.textContent;
// let lastChild = document.getElementById("onlyUl").lastElementChild.textContent;

// console.log(`${firstChild} \n ${lastChild}`);



//EXERCISE 2




// In the HTML above change the name “Pete” to “Richard”.

// let list = document.getElementsByClassName("list")[0];
// let listElement = list.lastElementChild;
// listElement.textContent = "Richard"
// console.log(list)
// console.log(listElement)


// // Change each first name of the two <ul>'s to your name.

// let changeFirstName1 = document.getElementsByClassName("list")[0].firstElementChild;
// let changeFirstName2 = document.getElementsByClassName("list")[1].firstElementChild;
// changeFirstName1.textContent = "Matias"
// changeFirstName2.textContent = "Matias"
// console.log(changeFirstName1, changeFirstName2)

// // At the end of each <ul> add a <li> that says “Hey students”.

// let newLi = document.createElement("li");
// let newLiContent = document.createTextNode("Hey Students")
// newLi.append(newLiContent);
// let newLi2 = document.createElement("li");
// let newLiContent2 = document.createTextNode("Hey Students")
// newLi2.append(newLiContent2);


// let lastLiUl1 = document.getElementsByClassName("list")[0];
// let lastLiUl2 = document.getElementsByClassName("list")[1];

// lastLiUl1.appendChild(newLi);
// lastLiUl2.appendChild(newLi2);


// // Delete the name Sarah from the second <ul>.

// document.getElementsByClassName("list")[1].setAttribute("id", "secondList");

// let sarah = document.getElementById("secondList")
// // console.log(sarah.removeChild(list.firstElementChild));

// sarah.removeChild(sarah.children[1]);
// //i dont know how to delete a element if i dont know the position. i tried to use some method of find and then 'Sarah' but couldnt



// // Bonus
// // Add a class called student_list to both of the <ul>'s.



// lastLiUl1.classList.add("student_list")
// lastLiUl2.classList.add("student_list")


// // Add the classes university and attendance to the first <ul>.

// lastLiUl1.classList.add("university", "attendance")


//EXERCISE 3



// Add a “light blue” background color and some padding to the <div>.

document.querySelector("div").style.backgroundColor = "lightblue"
// Do not display the first name (John) in the list.

document.querySelector("ul").firstElementChild.style.display = "none";
// Add a border to the second name (Pete).
document.querySelector("ul").lastElementChild.style.border = "1px solid";

// Change the font size of the whole body.

document.body.style.fontSize = "20px"
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
let x = document.querySelector("ul").firstElementChild.textContent;
let y = document.querySelector("ul").lastElementChild.textContent;
if(document.querySelector("div").style.backgroundColor = "lightblue"){
	alert(`hello ${x} and ${y}`)
}