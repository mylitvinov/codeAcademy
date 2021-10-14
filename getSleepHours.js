const getSleepHours = (day) => {
  switch (day) {
    case "понедельник":
      return 8;
    case "вторник":
      return 7;
    case "среда":
      return 7;
    case "четверг":
      return 7;
    case "пятница":
      return 7.5;
    case "суббота":
      return 8;
    case "воскресенье":
      return 8;
    default:
      break;
  }
};

const week = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];
const getActualSleepHours = () => {
  let sum = 0
  for (const day of week) {
    sum += getSleepHours(day)
  }
  return sum
};

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('Идеально');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('Многовато спишь');
  } else {
    console.log('Недосып и как следствие проблемы(');
  }
};

calculateSleepDebt()
