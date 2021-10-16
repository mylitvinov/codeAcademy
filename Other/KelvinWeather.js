// create kelvin
const kelvin  = 293;
//create celsius
const celsius = kelvin - 273;
// create fahrenheit 
let fahrenheit =  celsius * (9/5) + 32;
//  to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit )

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)