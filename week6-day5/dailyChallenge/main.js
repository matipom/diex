function Alltruthy(p1, p2, p3){
	if(!!p1 && !!p2 && !!p3){
		return true
	}else{
		return false
	}
}

console.log(Alltruthy(5,0,1))
console.log(Alltruthy(false,true,true))
console.log(Alltruthy(true, true, true))