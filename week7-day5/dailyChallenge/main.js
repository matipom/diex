function anagram(string1, string2){
	return true;
	return false;
}


function anagram(p1, p2){
	let toUpper1 = p1.toUpperCase();
	let toUpper2 = p2.toUpperCase();
	let noSpace1 = toUpper1.replace(/\s/g, "");
	let noSpace2 = toUpper2.replace(/\s/g, "");
	let toArr1 = noSpace1.split("");
	let toArr2 = noSpace2.split("");
	let order1 = toArr1.sort()
	let order2 = toArr2.sort()
	
	if(order1.join()===order2.join()){
		return true
	}else{
		return false
	}
}

console.log(anagram('School master', 'The classroom'));

