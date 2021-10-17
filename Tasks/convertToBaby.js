function convertToBaby(arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    newArr.push(`baby ${el}`);
  }
  return newArr
}

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals));
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
