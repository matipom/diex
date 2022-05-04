	
let showStory = document.getElementById("story");
	let noun = document.getElementById("noun");
	let adjective = document.getElementById("adjective");
	let person = document.getElementById("person");
	let verb = document.getElementById("verb");
	let place = document.getElementById("place");
document.getElementById("lib-button").addEventListener('click', ()=>{

let noun = document.getElementById("noun").value;
let adjective = document.getElementById("adjective").value;
let person = document.getElementById("person").value;
let verb = document.getElementById("verb").value;
let place = document.getElementById("place").value;

if(noun == "" || adjective == "" || person == "" || verb == "" || place == ""){
	alert('must fill out all the inputs')
}else{
	showStory.innerHTML = `my name is ${person} and i like to visit usually ${place} only with my ${noun} that is very ${adjective} and also ${verb} by the beach`

}
});


document.getElementById("shuffle").addEventListener('click', () =>{
	let noun = document.getElementById("noun").value;
let adjective = document.getElementById("adjective").value;
let person = document.getElementById("person").value;
let verb = document.getElementById("verb").value;
let place = document.getElementById("place").value
	showStory.display = 'hidden'
	showStory.innerHTML = `i usually go with ${person} with my ${noun} and i like to visit usually ${place} and ${verb} in the park that is very ${adjective}`

})