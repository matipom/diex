//1st Challenge

// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// const promise1 = new Promise((resolve,reject)=>{
// 	resolve(30)
// }) 

// const promise2 = 3;

// const promise3 = new Promise((resolve,reject)=>{
// 	resolve('im a promise')
// 	reject('i failed')
// })

// Promise.all([promise1, promise2, promise3])
// 	.then(values => {
// 		console.log(values)})
// 	.catch(() => console.log('Some of the promises are not a promise'))

	//everything is ok and take the array but the promise2 is just a variable. and work...shouldnt work using promise.all ?

//2nd Challenge


let myForm = document.getElementById("myForm")
async function fetchCities(){

	let longCity1 = document.getElementById("long1").value;
	let latCity1 = document.getElementById("lat1").value;
	let longCity2 = document.getElementById("long2").value;
	let latCity2 = document.getElementById("lat2").value;
	let data = await fetch(`https://api.sunrise-sunset.org/json?lat=${longCity1}&lng=${latCity1}`)
	let resp = await data.json();
	let data2 = await fetch(`https://api.sunrise-sunset.org/json?lat=${longCity2}&lng=${latCity2}`)
	let resp2 = await data2.json(); 
	Promise.all([resp, resp2])
		.then(result => result)
		.then(resp => showInDom(resp))
		.catch(error=>console.log(error))

}
let toShow = document.getElementById("info")
function showInDom(resp){
	for(let i=0; i<resp.length;i++){
		let p = document.createElement("p")
		p.textContent = `The sunrise is at: ${resp[i].results.sunrise}`
		toShow.append(p)
	}
	

}



myForm.addEventListener('submit', (e)=>{
	e.preventDefault()
	
	fetchCities()
})

