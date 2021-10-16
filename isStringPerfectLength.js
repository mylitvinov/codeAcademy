function isStringPerfectLength(string, minLength, maxLength) {
  const stringLength = string.length;
  
  return stringLength > minLength && stringLength < maxLength 
  ? true
  : false;
  
} 

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));