const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

for (const fruit of fruits) {
  console.log(fruit);
}

while (fruits.length > 0) {
  console.log(fruits.pop());
}

do {
  console.log(fruits.pop());
} while (fruits.length > 0);

const Numbs = [1,2,3,4,5,6,7,8,9,10];

for (const num of Numbs) {
  if(num % 2 === 0) {
    console.log(num);
  }
}

const names = ['Batman'];

names.push('Joker');
names.unshift('Bane');

if(!names.includes('Alfred')) {
  names.push('Alfred');
}
if(names.includes('Batman')) {
  names.splice(names.indexOf('Batman'), 1);
}
console.log('Current names array:', names);

function sumInput() {
  const userArray = [];
  let input;
  do {
    input = prompt('Enter a number: ');
    if (input !== null && input !== '' && !isNaN(input)) {
      userArray.push(Number(input));
    }
  } while (input !== null && input !== '');

  let sumAllNumbers = 0;
  for (const num of userArray) {
    sumAllNumbers = sumAllNumbers + num;
  }
  console.log('Sum of all numbers:', sumAllNumbers);
  return sumAllNumbers;
}
sumInput();

const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
const findMiddleIdElement = Math.floor(styles.length / 2);
styles[findMiddleIdElement] = 'Classics';
const deletedFirstElement = styles.shift();
console.log('Deleted first element:', deletedFirstElement);
styles.unshift('Rap');
styles.unshift('Reggae');
console.log('Current styles array:', styles);