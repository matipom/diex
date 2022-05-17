//Exercise 1 : Giphy API

// const lotrQuote = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
// $.ajax({
//     url: lotrQuote,
//     method: "GET"
//     }).then(function(response){
//         console.log(response);
//     })


let getInfo =  new XMLHttpRequest();

getInfo.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')

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


