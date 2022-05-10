//exercise 1

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//prediction
// i am john doe from vancouver, canada, latitude 49.2827, longitude 12.1207

//Exercise 2: Display Student Info

// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// Destructure the parameter inside the function and return a string as the example seen below:
// displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
// // output : 'Your full name is Elie Schoppik'`


// function displayStudentInfo(studentObject){
// 	let {first, last} = studentObject
// 	console.log(`Your full name is ${first} ${last}`)
// }


// displayStudentInfo({first: 'Elie', last:'Schoppik'})

//Exercise 3: User & Id
//Using methods taught in class, turn the users object into an array:
// const users = { user1: 18273, user2: 92833, user3: 90315 }



// const usersAsArray = Object.entries(users)
// console.log(usersAsArray);

// //Modify the outcome of part 1, by multipling the user’s ID by 2.	

// let users2 = []
// usersAsArray.map(element => {
// 	users2.push([element[0],element[1]*2])
// })
// console.log(users2)


// Exercise 4 : Person Class

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);

//
// //object

// Exercise 5 : Dog Class


// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };


//  // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };//no extends correctly, miss super

//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }//extends correctly
// };

//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };//no extends correctly, miss name in parameter

//  // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };//no extends correctly, name has to be parameter of super


// Exercise 6 : Challenges

// Evaluate these (ie True or False)

// console.log([2] === [2] )
// console.log({} === {})

// //true
// //is false/


// What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)//4 modify because is pass by reference

// console.log(object3.number)//4 modify because is pass by reference
// console.log(object4.number)//5 u assigned the property so is saved in different memory


// Create a class Animal with the attributes name, type and color

// Create a class Mamal that extends from the Animal class.

//  It has a method called sound().
//  This method takes a parameter: the sound the animal makes, 
 // and returns the details of the animal (name, type and color) as well as the sound it makes.

 class Animal{
 	constructor(name, type, color){
 		this.name = name;
 		this.type = type;
 		this.color = color;
 	}

 }

 class Mamal extends Animal{
 	constructor(name, type, color){
 		super(name, type, color)
 	}
 	sound(sound){
 		console.log(`Name: ${this.name}, Type: ${this.type}, Color: ${this.color} and his sound is ${sound}`)
 	}
 }

// Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color.
let cow = new Mamal('lily', 'aberdeen', 'black and white')

cow.sound('moo')



