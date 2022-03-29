/* PART I*/

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

;
console.log(myWatchedSeries, myWatchedSeries.length);

//let myWatchedSeriesSentence = myWatchedSeries.toString(" ");

let myWatchedSeriesSentence = myWatchedSeries.join(", ");


console.log(`i watched ${myWatchedSeries.length} series that are: ${myWatchedSeriesSentence}`);


console.log(`i watched ${myWatchedSeries.length} series that are: ${myWatchedSeries.slice(0, myWatchedSeries.length-1)} and ${myWatchedSeries[myWatchedSeries.length-1]}`);
