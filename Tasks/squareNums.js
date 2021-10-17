const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

// Write your code here:

const squareNums = (arr) => {
  return arr.map((n) => {
    return toSquare(n);
  });
};

console.log(squareNums(numbers)); // [ 4,   49,   81, 29241, 2704, 1089, 196]
