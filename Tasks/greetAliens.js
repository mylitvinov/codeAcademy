function greetAliens(arr) {
  for (const alien of aliens) {
   console.log(`Oh powerful ${alien}, we humans offer our unconditional surrender! `);
  }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender!
// Oh powerful Glamyx, we humans offer our unconditional surrender!
// Oh powerful Wegord, we humans offer our unconditional surrender!
// Oh powerful SpaceKing, we humans offer our unconditional surrender!

/*
const greetAliens = arr => {
      for (let i = 0; i < arr.length; i++) {
            console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
      }
}

/*
// Alternate solutions:

// Using string interpolation
const greetAliens = arr
for (let i = 0; i<arr.length; i++){
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
}

// As a function declaration:
function greetAliens(arr) {
for (let i = 0; i<arr.length; i++){
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
}
}

*/

