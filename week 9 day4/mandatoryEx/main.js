//Exercise 1: Conversion



 // async function fetchStarship(){
 // 	let resp = await fetch("https://www.swapi.tech/api/starships/9/")
 // 	let data = await resp.json()
 // 	console.log(data)
 // }

 // fetchStarship()


 //Exercise 2: Analyze

 function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//Analyse the code provided above before executing it - what will be the outcome?

//it will shot first console.log('calling'); because comes before the await. 