function reverseArray(sentence) {
let arr =[];
  for (const el of sentence) {
    arr.unshift(el)
  }
  return arr
}
const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));
// Should return ['This', 'will', 'all', 'make', 'sense.'];

// OR
//function reverseArray(arr) {
//   let revArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     revArr.push(arr[i]);
//   }
//   return revArr;
// }
