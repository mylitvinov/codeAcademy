const _ = {
  clamp (number,lower,upper) {
    let  lowerClampValue = Math.max(number, lower);
    let clampValue = Math.min(lowerClampValue,upper);
    return clampValue
  },

  isRange (number,start,end) {
if(end === undefined) {
  end = start
  start = 0
} if (start > end) {
  let temp = end
  end = start
  start = temp 
}
let inInRange = start <= number && number < end
return inInRange
  },

  words (string) {
const words = string.split(' ')
return words;
  },

  pad(string,length) {
    if(string.length >= length) {
      return string
    };
    const startPaddingLength = Math.floor((length - string.length)/2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString
  },
  

};

// console.log(_.clamp(4,1,6))


// Do not write or modify code below this line.
// module.exports = _;