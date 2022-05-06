// //Exercise 1 : Analyzing

// //------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);//prediction ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']


// //------2------
// const country = "USA";
// console.log([...country]);//prediction ['usa']
// //['u','s','a']

// //------Bonus------
// let newArray = [...[,,]];
// console.log(newArray); //prediction undefined
// //two elements but undefined

//Exercise 2 : Employees

// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// //Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// let welcomeStudents =[]
// users.map(val=>{
//  welcomeStudents.push(`Hello ${val.firstName}`)
// })

// console.log(welcomeStudents)


// Using the filter() method, create a new array, containing only the Full Stack Residents.       

// let fullStackResidents = [];

// users.filter((val,i) => {
//   if(val.role == 'Full Stack Resident'){
//     fullStackResidents.push(users[i])
//   }
// })

// console.log(fullStackResidents)


//Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.




// let fullStackResidents = [];
// let fullStackResidentsLastName =[]

// users.filter((val,i) => {
//   if(val.role == 'Full Stack Resident'){
//     fullStackResidents.push(users[i])
//   }
// })

// fullStackResidents.map(val => {
//   fullStackResidentsLastName.push(val.lastName)
// })


// console.log(fullStackResidents)
// console.log(fullStackResidentsLastName)


//Exercise 3 : Star Wars


// let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// let result = ''
// epic.reduce((acc,val) => {
//   result = result +" "+ val
// },0)

// console.log(result)



//Exercise 4 : Employees #2

let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let approved = []

students.filter(element => {
  if(element.isPassed){
    return approved.push(element)
  }
})

console.log(approved)
let congrats = ''
approved.forEach(element=> {
    congrats +=`Good job ${element.name}, you passed the course in ${element.course}.`
})

console.log(congrats)