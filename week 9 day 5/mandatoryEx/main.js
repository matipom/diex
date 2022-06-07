


function getDataFromApi(){
    let randomNumber = Math.floor(Math.random()*83)+1
    console.log(randomNumber)
    fetch(`https://www.swapi.tech/api/people/${randomNumber}/`)
        .then(resp => resp.json())
        .then(function(resp){
           console.log(resp.result)
           return resp.result.properties
    })
        .then(resp => loading(resp))
        .catch(error => 
        {
            let errorP = document.createElement("p")
            errorP.textContent = `Oh no! That person isnt available`
            document.getElementById("toPutInfo").append(errorP)
            document.querySelector("p").innerHTML = ''
            console.log(error)
        })
}

let loader = document.getElementById("icon");

function loading(resp){
    let loading = document.createElement("p")
    loading.textContent = "Loading..."
    document.getElementById("toPutInfo").innerHTML = ''
    document.getElementById("toPutInfo").append(loading)
    // loader.classList.add("display")
    setTimeout(()=> {
        showInDom(resp)
    }, 2000)
}
function showPlanet(resp){
   let pla = document.getElementById("planet")
       pla.textContent = `Home Planet: ${resp}`

}

function showInDom({name, height, gender, birth_year, homeworld}){
    document.getElementById("toPutInfo").innerHTML = ''
    fetch(`${homeworld}`)
    .then(resp => resp.json())
    .then(function(resp){
        return resp.result.properties.name
        
     })
    .then(resp=>showPlanet(resp))
    let nameP = document.createElement("p")
    nameP.textContent = `Name: ${name}`;
    let heightP = document.createElement("p")
    heightP.textContent = `Height: ${height}cms`;
    let genderP = document.createElement("p")
    genderP.textContent = `Gender: ${gender}`
    let birthDayP = document.createElement("p")
    birthDayP.textContent = `Birth Date: ${birth_year}`
    let homeWorldP = document.createElement("p")
    homeWorldP.setAttribute("id", "planet")
    let allP = [nameP, heightP, genderP, birthDayP, homeWorldP]
    console.log(allP)
    allP.forEach(element => {
        console.log(element)
    document.getElementById("toPutInfo").append(element)
    })
}
document.getElementById("find").addEventListener('click', (e) => {
    e.preventDefault()
    getDataFromApi()
    // loading()

})


//I PUT THE HOMEWORLD.URL BUT DOESNT WORK. IF I DONT PUT URL IT SHOWS ME THE LINK TO THE PLANET BUT NEVER CAN FIND THE NAME OF THE PLANET
//ALSO COULDNT FIND HOW TO ADD THE ICON OF LOADING