console.log(typeof(15))
// Prediction: number
// Actual: number

console.log(typeof(5.5))
// Prediction: number
// Actual: number

console.log(typeof(NaN))
// Prediction: NaN
// Actual: number

console.log(typeof("hello"))
// Prediction: string
// Actual: string

console.log(typeof(true))
// Prediction: boolean
// Actual: string

console.log(typeof(1 != 2))
// Prediction: true didnt see typeof. =P
// Actual: string

console.log("hamburger" + "s")
// Prediction: hamburgers
// Actual:hamburgers

console.log("hamburgers" - "s")
// Prediction: undefined
// Actual: NaN

console.log("1" + "3")
// Prediction: 13
// Actual:13

console.log("1" - "3")
// Prediction: NaN
// Actual: -2

console.log("johnny" + 5)
// Prediction:undefined
// Actual: johnny5

console.log("johnny" - 5)
// Prediction:undefined
// Actual: NaN

console.log(99 * "hello")
// Prediction:undefined
// Actual:NaN

console.log(1 != 1)
// Prediction:false
// Actual: false

console.log(1 == "1")
// Prediction:true
// Actual: true 

console.log(1 === "1")
// Prediction:false
// Actual: false