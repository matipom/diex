/* PART I*/

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];




/* PART II*/

//Change the series “the big bang theory” to “friends”. Hint : 	
myWatchedSeries.splice(2, 1, "hint");
console.log(myWatchedSeries);

//Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("lost");
console.log(myWatchedSeries);

//Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("breaking bad");

console.log(myWatchedSeries);

//Delete the series “black mirror”.
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);


//Console.log the third letter of the series “money heist”.

console.log(myWatchedSeries[1].at(2));

//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

console.log(myWatchedSeries)