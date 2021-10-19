function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(6))

/*
let inputNum = prompt("please enter and integer");
let total = 1;
for(let i = inputNum; i > 1; i--){
 total *= i;
}
console.log(total);

******************************
let total = 1;

for (let i = 0; i < inputNumber; i++){
    total = total * (inputNumber - i);
}

*****************************

let total = 1;

for (let i = 1; i <= inputNumber; ++i){
total = total * i;
}

console.log(inputNumber + '! = ' + total);

*/