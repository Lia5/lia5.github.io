'use strict';

const message1 = 'Hello';
const message2 = 'JavaScript';
alert(`${message1}, ${message2}!`);
let x;
let y;
x = prompt(`Введи значення змінної x`);
y = prompt(`Введи значення змінної y`);


alert(`Сума значень x та y: ${Number(x) + Number(y)}`);

const number = 3;
const userNumber = Number(prompt(`Вгадай число`));
if (userNumber === number) {
  alert(`Congratulations, You did it!`);
} else if (userNumber > number) {
  alert(`The number is too long`);
} else if (userNumber < number) {
  alert(`The number is short`);
} else {
  alert(`Спробуйте ще раз. Загадане число було ${number}.`);
}

const mondayday = ['monday', 'понеділок'];
const friday = ['П\'ятниця', 'Friday'];
const userDay = prompt(`Введи назву дня тижня`);
if (mondayday.includes(userDay.toLowerCase())) {
  alert(`Start of the work week!`);
} else if (friday.includes(userDay.toLowerCase())) {
  alert(`End of the work week!`);
} else {
  alert(`A regular day`);
}

switch (userDay.toLowerCase()) {
  case 'monday':
  case 'понеділок':
    alert(`Start of the work week!`);
    break;
  case 'friday':
  case 'п\'ятниця':
    alert(`End of the work week!`);
    break;
  default:
    alert(`A regular day`);
}

const score = (Number(prompt(`Введи свій бал`)));
switch (true) {
  case score < 50:
    alert(`призначаємо тобі ступінь 'F'`);
    break;
  case score < 70:
    alert(`призначаємо тобі ступінь 'D'`);
    break;
  case score < 80:
    alert(`призначаємо тобі ступінь 'C'`);
    break;
  case score < 90:
    alert(`призначаємо тобі ступінь 'B'`);
    break;
  default:
    alert(`призначаємо тобі ступінь 'A'`);
    break;
}