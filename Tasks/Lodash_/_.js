const _ = {
  clamp(number, lower, upper) {
    let lowerClampValue = Math.max(number, lower);
    let clampValue = Math.min(lowerClampValue, upper);
    return clampValue;
  },

  isRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let inInRange = start <= number && number < end;
    return inInRange;
  },

  words(string) {
    const words = string.split(" ");
    return words;
  },

  pad(string, length) {
    if (string.length >= length) {
      return string;
    }
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString =
      " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key) {
    const hasValue = object[key];
    return hasValue != undefined ? true : false;
  },
  invert(object) {
    const invertedObject = {};
    for (const key in object) {
      const originalValue = object[key];
      invertedObject = { originalValue: key };
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (const key in object) {
      const value = object[key];
      const predicateValue = predicate(value);
      return predicateValue ? key : undefined;
    }
  },
  drop(array,n) {
    if( n === undefined) {
      n = 1
    }
    let droppedArray = array.slice(n,array.length)
    return droppedArray
  },

  dropWhile(array,predicate){
    const cb = (el,index) => {
      return !predicate(el,index,array)
    }
    let dropNumber = array.findIndex(cb)
    let droppedArray = this.drop(array,dropNumber)
    return droppedArray
  },
  
};
