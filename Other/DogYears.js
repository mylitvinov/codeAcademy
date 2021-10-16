const myAge = 33
let earlyYears = 2
earlyYears = 10.5*earlyYears
let laterYears = myAge - 2
laterYears *= 4

// console.log(earlyYears)
// console.log(laterYears)

const myAgeInDogYears = earlyYears + laterYears
const myName = 'Maxim'.toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)