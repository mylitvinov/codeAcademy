let colors = ['blue','red','purple'];

// Destructure here
const [color1,color2,color3] = colors

console.log(color1, color2, color3); // blue red purple

//**********************************************************************
let planets = { x: 'Saturn', y: 'Mars', z: 'Neptune' };

// Destructure here
const {x,y,z} = planets

console.log(x, y, z); // Saturn Mars Neptune

//**********************************************************************

let prairieRose = {
  name: 'Prairie Rose',
  scientificName: 'Rosa arkansana',
  kingdom:	'Plantae',
  genus:	'Rosa',
  use: 'ornamental'
};

const printPlantInfo = ({name,scientificName,kingdom}) => {
console.log(`The ${name}, or ${scientificName}, is in the kingdom ${kingdom}`)
};

//The Prairie Rose, or Rosa arkansana, is in the kingdom Plantae