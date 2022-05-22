// https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// The gif should be appended with a DELETE button next to it.
//  Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.

let getInfo = new XMLHttpRequest();

function showInDom(param){
	let mainDiv = document.createElement("div");
	mainDiv.setAttribute("class", "a");
	let image = document.createElement("img");
	image.src = param.images.fixed_height_small.url;
	let button = document.createElement("button");
	button.textContent = 'DELETE'

	button.addEventListener('click', (e)=>{
		e.preventDefault();
		mainDiv.remove()
	})

	mainDiv.append(image)
	mainDiv.append(button)
	let container = document.getElementById("container")
	container.append(mainDiv)

};
	
	
document.getElementById("deleteAll").addEventListener('click', (e)=>{
	e.preventDefault();
	document.getElementById("container").innerHTML = '';
})
	

document.getElementById("btn").addEventListener('click', (e)=>{
	e.preventDefault();
	let randonNum = Math.floor(Math.random() * (50 - 0)) + 0;
	let category = document.getElementById("category").value;
	getInfo.open('GET', `https://api.giphy.com/v1/gifs/search?q=${category}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&offset=${randonNum}&limit=1`);
	getInfo.responseType = 'json';
	getInfo.send();
	getInfo.onload = function() {
	  if (getInfo.status != 200) {
	    console.log(`Error ${getInfo.status}: ${getInfo.statusText}`);
	  } else {
	    console.log(getInfo.response);
	    console.log(getInfo.response.data)
		// getInfo.response.data.forEach(response=>{
		//showInDom(response)
		// })
		showInDom(getInfo.response.data[0])
	 }
	};
	console.log(randonNum)

})