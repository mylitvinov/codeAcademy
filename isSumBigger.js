function isSumBigger(number1, number2, total) {
  const sum = number1 + number2;
  return sum > total ? true : false;
}

// Should return true
console.log("isSumBigger(1, 3, 2) returns: " + isSumBigger(1, 3, 2));

// Should return false
console.log("isSumBigger(1, 3, 5) returns: " + isSumBigger(1, 3, 5));
