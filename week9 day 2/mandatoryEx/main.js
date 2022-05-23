//Exercise 1 : Comparison

// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.


// function compareToTen(num){
// 	return new Promise((resolve, reject) => {
// 		if(num < 10){
// 			resolve(`SUCESS. The ${num} is less than 10`)
// 		}else{
// 			reject(`FAILURE. The ${num} is bigger than 10`)
// 		}
		
// 	})
	
// }

// compareToTen(2)
// 	.then(result => console.log(result))
// 	.catch(error => console.log(error))



// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


//Exercise 2 : Promises.

// Create a promise that resolves itself in 4 seconds and returns a “success” string.


// let newPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('succes')
// 	}, 4000)
// })

// newPromise.then(result => console.log(result))

// // How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?

// let promise = Promise.resolve('succes');
 
// promise.then(function(val) {
//     console.log(val);
// });


//DONT KNOW IF THIS IS WHAT ASKED ME


// // Add code to catch errors and console.log ‘Ooops something went wrong’.



// let newPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if(3===4){
// 			resolve('succes')
// 		}else{
// 			reject('fail')
// 		}
		
// 	}, 4000)
// })

// newPromise.then(result => console.log(result))
// newPromise.catch(error => console.log(`Ooops something went wrong, ${error}` ));


//Exercise 3 : Resolve & Reject


//Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.



let x = Promise.resolve(3)

x.then(result => console.log(result))

//IS OK THIS?

// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

let y = Promise.reject('Boo!')

y.catch(error => console.log(error))