	
let showStory = document.getElementById("story");

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



let count = 4;
document.getElementById("shuffle").addEventListener('click', () =>{
let randomNum = Math.floor(Math.random() * 3) + 1
let noun = document.getElementById("noun").value;
let adjective = document.getElementById("adjective").value;
let person = document.getElementById("person").value;
let verb = document.getElementById("verb").value;
let place = document.getElementById("place").value
if(randomNum == 1){
	showStory.display = 'hidden'
	showStory.innerHTML = `i usually go with ${person} with my ${noun} and i like to visit usually ${place} and ${verb} in the park that is very ${adjective}`
	count = count -1
}
	if(randomNum == 2){
	showStory.display = 'hidden'
	showStory.innerHTML = `i usually go with ${person} with my ${noun} and i ${verb} like to visit${adjective} usually ${place} and  in the park that is very ${adjective}`
	count = count -1
}
	if(randomNum == 3){
	showStory.display = 'hidden'
	showStory.innerHTML = `i usually go with ${noun}  with my  and i like to${person} visit usually ${place} and ${verb} in the park that is very ${adjective}`
	count = count -1
}
	


if(count == 0){
	alert('no more chances to shuffle')
		showStory.display = 'hidden'
	document.getElementById("noun").disabled = true;
	document.getElementById("adjective").disabled = true;
	document.getElementById("person").disabled = true;
	document.getElementById("verb").disabled = true;
	document.getElementById("place").disabled = true;
}
})