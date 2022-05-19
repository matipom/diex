//Exercise 1 : Giphy API

// const lotrQuote = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
// $.ajax({
//     url: lotrQuote,
//     method: "GET"
//     }).then(function(response){
//         console.log(response);
//     })


let getInfo =  new XMLHttpRequest();

let params = {
	q : 'hilarious',
	rating : 'g',
	api_key : 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'


}

getInfo.open('GET', `https://api.giphy.com/v1/gifs/search?q=${params.q}&rating=${params.rating}&api_key=${params.api_key}`)
// getInfo.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')

// getInfo.setRequestHeader('Content-Type', 'application/json');
getInfo.responseType = 'json';

getInfo.send();

getInfo.onload = function() {
  if (getInfo.status != 200) {
    // analyze HTTP status of the response
    // e.g. 404: Not Found
    console.log(`Error ${getInfo.status}: ${getInfo.statusText}`);
  } else { // show the result
    // response is the server response
    // console.log(`Done, got ${xhr.response.length} bytes`);
    console.log(getInfo.response);
  }
};


//Exercise 2 : Giphy API


// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object

let getInfo2 =  new XMLHttpRequest();

let params2 = {
	q : 'sun',
	rating : 'g',
	api_key : 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
	offset : 2,
	limit : 10

}

getInfo2.open('GET', `https://api.giphy.com/v1/gifs/search?q=${params2.q}&rating=${params2.rating}&api_key=${params2.api_key}&offset=${params2.offset}&limit=${params2.limit}`)
getInfo2.responseType = 'json';

getInfo2.send();

getInfo2.onload = function() {
  if (getInfo2.status != 200) {
    // analyze HTTP status of the response
    // e.g. 404: Not Found
    console.log(`Error ${getInfo2.status}: ${getInfo2.statusText}`);
  } else { // show the result
    // response is the server response
    // console.log(`Done, got ${xhr.response.length} bytes`);
    console.log(getInfo2.response);
  }
};