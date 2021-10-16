let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 17;
if (age>18 && registeredEarly) {
  raceNumber +=1000
}

if (age>18 && registeredEarly) {
  console.log(`Race will begin at 9:30,
  your race number: ${raceNumber} `)
} else if (age>18 && !registeredEarly) {
  console.log(`Late adults run at 11:00 am`);
} else if (age <=18) {
  console.log(`Race will begin at 12:30,
  your race number: ${raceNumber} `);
}