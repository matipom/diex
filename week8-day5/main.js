let getInfo = new XMLHttpRequest();



class weatherCards{
	constructor({cityName, codeCountry, temp, icon, mainWeather, humidity}){
		this.cityName = cityName;
		this.codeCountry = codeCountry;
		this.temp = temp;
		this.icon = icon;
		this.mainWeather = mainWeather;
		this.humidity = humidity;
	}

	showInDom(){
	console.log(this.cityName)
	console.log(this.codeCountry)
	console.log(this.temp)
	console.log(this.icon)
	console.log(this.mainWeather)
	console.log(this.humidity)
	
	let cards = document.createElement("div");
	cards.className = "col card  cards"
	let logoinfo = document.createElement("img");
	let iconCode = this.icon;
	// let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
	logoinfo.src = iconCode;
	logoinfo.style.height = "50px";
	logoinfo.style.width = "50px";
	let cityName = document.createElement("p");
	cityName.textContent = this.cityName;
	let temp = document.createElement("p");
	temp.textContent = this.temp;
	let mainWeather = document.createElement("p");
	mainWeather.textContent = this.mainWeather;
	let humidity = document.createElement("p");
	humidity.textContent = this.humidity;
	let codeCountry = document.createElement("p");
	codeCountry.textContent = this.codeCountry;
	cards.append(cityName)
	cards.append(codeCountry)
	cards.append(temp)
	cards.append(logoinfo)
	cards.append(mainWeather)
	cards.append(humidity)
	let secContainer = document.getElementById("secondContainer")
	secContainer.append(cards)

	}
}


function reset(){
	document.getElementById("enterCity").value = "";
}

document.getElementById("send").addEventListener('click', (e)=> {
	e.preventDefault();
	let city = document.getElementById("enterCity").value;
	getInfo.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`);

	getInfo.responseType = 'json';

	getInfo.send();

	getInfo.onload = function(){
		if(getInfo.status != 200){
			console.log(`Error ${getInfo.status}: ${getInfo.statusText}`);
			document.getElementById("warn").innerHTML = 'Please enter a correct city'
		}else{
			console.log(getInfo.response)
			let data = getInfo.response
			let dataCard = {
				cityName: data.name,
				codeCountry: data.sys.country,
				temp: data.main.temp,
				icon: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
				mainWeather: data.weather[0].main,
				humidity: data.main.humidity
			}
			console.log(dataCard)
			let cardsInstances = new weatherCards({...dataCard})
			cardsInstances.showInDom();
			return cardsInstances;

		}
	}

	reset();

})


// If the user enters a correct city, you should display in the card:
// the name of the city, and the name of the country where the city is located
// the weather (ie. “clear”, “sunny” ect…)
// the icon of the weather. Check out this part of the documentation
// the temperature (Temperature in Kelvin is used by default), the humidity
