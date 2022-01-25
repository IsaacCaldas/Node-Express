const _ = require('lodash'); // padrão usar underline para referenciar o lodash

// to create package.json in terminal: npm init -y (basic structure)

const foods = [
  {
    name: 'Banana',
    color: 'Yellow',
    price: 2.00
  },
  {
    name: 'Grape',
    color: 'Purple',
    price: 4.45
  },
  {
    name: 'Apple',
    color: 'Red',
    price: 2.20
  },
  {
    name: 'Watermelon',
    color: 'Green',
    price: 5.60
  },
  {
    name: 'Coconut',
    color: 'Brown',
    price: 3.70
  }
];

const total = _.sumBy(foods, 'price');
console.log(total);