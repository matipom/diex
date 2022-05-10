// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.


class Video{
	constructor(title, uploader, time){
		this.title = title;
		this.uploader = uploader;
		this.time = time;
	}
	watch(){
		console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}`)
	}
}


let video1 = new Video('lion king', 'jhon', 1800);

video1.watch()	

let video2 = new Video('titanic', 'grey', 2200);


video2.watch()

let video3 = new Video('abc', 'martin', 112);
let video4 = new Video('life', 'tom', 22);
let video5 = new Video('sing', 'rachel', 12);
// let array =[];
// array.push(video1, video2,video3, video4, video5)
// console.log(array)

let array = [{
	title:'a',
	uploader: 'jon',
	time: 123
},
{
	title:'b',
	uploader: 'lili',
	time: 321
},
{
	title:'c',
	uploader: 'frank',
	time: 22
},
{
	title:'d',
	uploader: 'tom',
	time: 11
},
{
	title:'e',
	uploader: 'li',
	time: 32

}]
let array2=[]
array2 = array.map(element => { 
	return new Video(element.title, element.uploader, element.time)})
console.log(array2)

//dont know if i did what the exercise asked me