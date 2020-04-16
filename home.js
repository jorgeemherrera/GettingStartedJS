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
// let person = {
//   firstName: 'Jorge',
//   lastName: 'Muñoz'
// };

// showMessage(typeof person);
// console.log(savedNull);

if (1 == "1") {
  showMessage('true');
} else {
  showMessage('False')
}

let message = (price > 10) ? 'expensive' : 'cheap';

//showMessage(message);

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

let mySymbol = Symbol();

let person = {
  name: 'Jorge',
  age: 29,
  parTime: false,
  [mySymbol]: 'secretInformation',
  showInfo: function(realAge) {
    showMessage(this.name + ' is ' + realAge);
  }
}

function incrementAge(person) {
  person.age++;
}

incrementAge(person)

console.log(person.age);

console.log(typeof person.showInfo)

person.showInfo(30);

const header = document.getElementById('message');
header.style.color = 'red';
header.style.fontWeight = '100';

const button = document.getElementById('see-review');

button.addEventListener('click', function() {
  //console.log('click');
  const review = document.getElementById('review');

  //Toggle 

  if (review.classList.contains('d-none')) {
    review.classList.remove('d-none');
    button.textContent = 'CLOSE REVIEW';
  } else {
    review.classList.add('d-none');
    button.textContent = 'SEE REVIEW';
  }
 
});

const values = ['a', 'b', 'c'];

values.push('d', 'e', 'f');

//let last = values.pop();
//let first = values.shift();
values.unshift('y', 'z');

const newValues = values.slice(1,4)
values.splice(2, 1, 'Hello');
console.log(values);
console.log(newValues);
console.log(values.indexOf('z'));

const set = values.filter(function(item) {
  console.log('item: ', item);
  return item > 'c';
});

console.log('set: ', set);

const valuesFind = ['a', 'bbb', 'c'];

const found = valuesFind.find(function(item) {
  return item.length > 1
});

console.log('found: ', found);


values.forEach(function(item) {
  console.log('forEach: ', item)
});

const containers = document.getElementsByClassName('container');
containers[1].classList.add('test-class');
console.log(containers);

//Global Scope
const app = {
  productId: 12345
}

function showProductId() {
  console.log(app.productId)
}

showProductId();

//Function Scope

function showProductIdFS() {
  let productId = 9876;
  function fix() {
    let productId = 4567890;
    console.log('in fix: ', productId)
  }
  fix();
  console.log('in showProductIdFS: ', productId)
}
// console.log(productId) --> undefined
showProductIdFS();
