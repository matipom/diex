//EXERCISE 1

// Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

// When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
// Where will the sent data appear?


//i dont know if is correct what i did, so the sent data appear in the name of the http of the browser
//for example i entered name Matias and comments: hi! im a comment and the result was
// file:///C:/Users/matias/Desktop/diex/week8-day%202/mandatoryEx/index.html?name=matias&comments=Hi%21+im+a+comment%09%09%0D%0A%09


//EXERCISE 2

// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab

//the information appear in network - header, but only see POST and cant see the info i introduce in the inputs in the network tab

//EXERCISE 3
// Convert this JS object into a JSON object. What happens to the nested objects ?
// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
//THE NESTED OBJECT WERE MOVE ALPHABETICALLY
let marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}


let jsonObj = JSON.stringify(marioGame)
let toParse = JSON.parse(jsonObj)
console.log(marioGame)
console.log(jsonObj)
console.log(toParse)



// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.

//dont know how to do it
