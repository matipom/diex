let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.



// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ? Because are after the change

// In the function, create a variable named shopping that is a copy of the groceries object.
//  (Tip : make the shopping variable equal to the groceries variable)

// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ? Because are after the change
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ? Because are after the change and also becase is an object inside an object
let displayGroceries = () => {
	console.log(groceries.fruits)
}
Object.entries(groceries).forEach(displayGroceries)

groceries.totalPrice = "35$"

groceries.other.payed = false
client = "Betty"


let cloneGroceries = () => {
	let user = client;
	console.log(user)
	let shopping = Object.assign({}, groceries)
	console.log(shopping)

}

cloneGroceries()
