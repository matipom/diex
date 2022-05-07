
// let inventory = [
//   { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//   { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//   { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//   { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//   { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
// ];

// //PART 1

// function getCarHonda(carInventory){
// 	let findCar = inventory.find(element => {
// 		if(element.car_make === 'Honda'){
// 			//return element
// 			return element
// 		}
// 	})
// 	return `This is a ${findCar.car_make} ${findCar.car_model} from ${findCar.car_year}`
// }

// let result = getCarHonda(inventory);


// console.log(result)

//PART 2

let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];


function sortCarInventoryByYear(carInventory){
	let sortByYear = inventory.sort((a,b)=> {
		return a.car_year - b.car_year
	})
	return sortByYear
}


let result = sortCarInventoryByYear(inventory)
console.log(result)