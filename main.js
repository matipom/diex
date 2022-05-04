

//!MVC

//Vue
let button = document.querySelector('#rand')
let quote = document.querySelector("#quote")
let author = document.querySelector("#author")
let quoteId = document.querySelector("#quoteId")
function feedAuthor(str) {
  author.textContent = str
}

function feedQuote(str) {
  quote.textContent = str
}
function feedQuoteID(str) {
  quoteId.textContent = str
}
//Model

let quotes = [
  {
    id: 0,
    author: "mj",
    quote: "abc"
  },
  {
    id: 1,
    author: "bn",
    quote: "def"
  },
  {
    id: 5,
    author: "doc",
    quote: "ghj"
  }

]

let accessToQuote = (id) => {
  let quote = quotes.find((element) => element.id === id)
  return quote
}

let getRandId = () => {
  let ids = quotes.map(function(element) {
    return element.id
  })
  let randId = ids[Math.floor(Math.random() * ids.length)]

  while (randId == quoteId.textContent) {
    randId = ids[Math.floor(Math.random() * ids.length)]
  }

  return randId
}
//Controller

button.addEventListener(
  "click",
  function(event) {
    let randid = getRandId()
    let currentQuote = accessToQuote(randid)
    console.log(currentQuote.id)
    feedAuthor(currentQuote.author)
    feedQuote(currentQuote.quote)
    feedQuoteID(currentQuote.id)
  }
)

