/* PART I*/

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];




/* PART II*/

//Change the series “the big bang theory” to “friends”. Hint : 
let bgtPlace = myWatchedSeries.indexOf('the big bang theory');	
myWatchedSeries.splice(bgtPlace, 1, "friends");
console.log(myWatchedSeries);

//Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("lost");
console.log(myWatchedSeries);

//Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("breaking bad");

console.log(myWatchedSeries);

//Delete the series “black mirror”.
let bmPlace = myWatchedSeries.indexOf('black mirror');
myWatchedSeries.splice(bmPlace, 1);
console.log(myWatchedSeries);


//Console.log the third letter of the series “money heist”.

let mhPlace = myWatchedSeries.indexOf('money heist');
console.log(`the thirs letter of money heiste is: ${myWatchedSeries[mhPlace].at(2)}`);

//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

console.log(myWatchedSeries);