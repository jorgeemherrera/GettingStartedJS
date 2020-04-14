let welcome = 'Welcome';

let price = 49.99;
let name = 'Hiking Boots';
let discounted = false;

let amount = 123;

// amount = amount.toString();

amount = Number.parseFloat('123.12');

let saved = true;

saved = !saved;

let savedNull;
let person = {
  firstName: 'Jorge',
  lastName: 'Muñoz'
};

// showMessage(typeof person);
// console.log(savedNull);

if (1 == "1") {
  showMessage('true');
} else {
  showMessage('False')
}

let message = (price > 10) ? 'expensive' : 'cheap';

showMessage(message);

// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }

// let count = 1;
// while (count < 5) {
//   console.log(count);
//   count++;
// }

let count = 1;

do {
  console.log(count);
  count++;
}
while (count < 5);

changePercentOff(30);

