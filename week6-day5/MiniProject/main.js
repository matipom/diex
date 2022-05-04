// In the Javascript file, create an array of objects.
//  Each object has 3 keys : id, author and quote. 
//  The id must start at 0, and is incremented for every new quote.
//   So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…
// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object),
//  and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.


  let quotes = [
  		{
  			id: '',
  			author:'Robert Frost',
  			quote:'No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.',
  			likes: 0
  		},
  		{
  			id: '',
  			author:'Saul Bellow',
  			quote:'You never have to change anything you got up in the middle of the night to write',
  			likes: 0
  		},
  		{
  			id:'',
  			author:'Toni Morrison',
  			quote:'If theres a book that you want to read, but it hasnt been written yet, then you must write it',
  			likes: 0
  		},
  		{
  			id: '',
  			author:'Mark Twain',
  			quote:'Substitute damn every time youre inclined to write very; your editor will delete it and the writing will be just as it should be',
  			likes: 0
  		},
  		{
  			id: '',
  			author:'Anaïs Nin',
  			quote:'We write to taste life twice, in the moment and in retrospect.',
  			likes: 0
  		},
  		{
  			id:'' ,
  			author:'Stephen King',
  			quote:'If you dont have time to read, you dont have the time (or the tools) to write. Simple as that',
  			likes: 0
  		},
  		{
  			id:'' ,
  			author:'Henry David Thoreau',
  			quote:'How vain it is to sit down to write when you have not stood up to live',
  			likes: 0
  		},
  		{
  			id: '',
  			author:'Ray Bradbury',
  			quote:'You must stay drunk on writing so reality cannot destroy you',
  			likes: 0
  		},
  ]





function feedAuthor(str) {
  author.textContent = `${str}`
}

function feedQuote(str) {
  quote.textContent = `${str}`
}
function feedQuoteID(str) {
  id.textContent = `${str}`
}

function showQuote(id){
	let quote = quotes.find((element)=>  {return element.id === id}  )//puedo sacar el return y los curly brackets

return quote;

};


function giveLikes(str){
	
	let likeQuote = document.getElementById("like");
	let count = 0;
	for(let i=0; i<quotes.length;i++){
		
		if(quotes[i].id == str){

			count+=1;
			console.log(count)
			quotes[i].likes.textContent = count;
			document.getElementById("like").innerHTML = count
		}
	}
	
}


function getRandomNum(){
	let randNum = quotes.map(function(element){
		return element.id
	})

	let randId = randNum[Math.floor(Math.random() * randNum.length)]
	while(randId == id.textContent) {
		randId = randNum[Math.floor(Math.random() * randNum.length)]
	}
	return randId
}


function numWords(string){
	let str = string.split(" ");
	let str2 = str.length;
	document.getElementById("showWords").value = str2;
}


function countCharactersNoSpace(string){
	let str = string.replace(/ /g, "");//replaceAll(" ","")
	let str2 = str.length;
	document.getElementById("showCharNoSpace").value = str2;
}


function countCharactersSpace(string){
	let str = string.length
	document.getElementById("showCharSpace").value = str;	
}

//find an author by search button
function searchQuote(string){
	quotes.forEach((element)=>  {
		if(element.author.includes(string)){
			document.getElementById("quoteAuthorSearched").innerHTML = element.author
			document.getElementById("quoteSearched").innerHTML = element.quote
		}
	})
}

function showPrev(string){
	quotes.forEach((element) => {
		
			if(element.author === string){
				let prevIdAuthor = element.id-1;
				if(prevIdAuthor<0){
					prevIdAuthor = 1
				}else{
					let prevAuthor = element.prevIdAuthor;
					document.getElementById("quoteAuthorSearched").innerHTML = quotes[prevIdAuthor].author;
					document.getElementById("quoteSearched").innerHTML = quotes[prevIdAuthor].quote
				}
			}
	})
}

function showNext(string){
	quotes.forEach((element) => {
		
			if(element.author === string){
				let nextIdAuthor = element.id+1;
				if(nextIdAuthor==quotes.length){
					nextIdAuthor = quotes.length-1
				}else{
					let nextAuthor = element.nextIdAuthor;
					document.getElementById("quoteAuthorSearched").innerHTML = quotes[nextIdAuthor].author;
					document.getElementById("quoteSearched").innerHTML = quotes[nextIdAuthor].quote
				}
			}
	})
}



document.getElementById('myButton').addEventListener('click', (e) => {
document.getElementById("like").textContent = 
e.preventDefault()

	for(let i=0; i<quotes.length; i++){
		quotes[i]['id'] = i
		if(quotes[i]['id'] < 0){
			quotes[i]['id'] = 0
		}
		console.log(quotes[i])
		
		}

	let randomNum = getRandomNum();
	let quoteToShow = showQuote(randomNum)
	console.log(randomNum)
	feedAuthor(quoteToShow.author)
	feedQuote(quoteToShow.quote)
	feedQuoteID(quoteToShow.id)
	document.getElementById("like").textContent = quoteToShow.likes
})


document.getElementById("addQuote").addEventListener('click', (e) => {
	let newQuotes = {
	id: '',
	author: '',
	quote:''
}
	e.preventDefault()
	 newQuotes.author = document.querySelector("#authorInput").value
	 newQuotes.quote = document.querySelector("#quoteInput").value
	console.log(newQuotes)
	quotes.push(newQuotes)
	console.log(quotes)
	if(newQuotes){
		newQuotes.id = quotes.length-1
	}
})

document.getElementById("numCharSpaces").addEventListener("click", (e) => {
	e.preventDefault();
	let charSpaces = document.getElementById("quote").textContent;
	
	countCharactersSpace(charSpaces)
})

document.getElementById("numCharNotSpaces").addEventListener("click", (e) => {
	e.preventDefault();
	let charSpaces = document.getElementById("quote").textContent;
	
	countCharactersNoSpace(charSpaces)
})

document.getElementById("numWords").addEventListener("click", (e) => {
	e.preventDefault();
	let words = document.getElementById("quote").textContent;
	
	numWords(words)
})


document.getElementById("likes").addEventListener('click', (e) => {
	e.preventDefault()	

	let newNumber = document.getElementById("id").textContent
	var number = parseInt(newNumber)
	
	giveLikes(number)

})



document.getElementById("buttonSearch").addEventListener('click', (e) => {
	e.preventDefault();
	let searchAuthor = document.getElementById("search").value
	console.log(searchAuthor)
	searchQuote(searchAuthor)

})


document.getElementById("prev").addEventListener('click', (e) => {
	e.preventDefault();
	let author = document.getElementById("quoteAuthorSearched").textContent
	showPrev(author)
})

document.getElementById("next").addEventListener('click', (e) => {
	e.preventDefault();
	let author = document.getElementById("quoteAuthorSearched").textContent
	showNext(author)
})

//I COULDNT DO THE FUNCTION OF ADDING LIKES
//TO DO THE PREV AND NEXT YOU HAVE TO DO FIRST GENERATE QUOTES, SEARCH AND THEN PREV OR NEXT