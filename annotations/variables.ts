// Type annotations: allocate type by ourself
// Type inference: TS predict type for value a function will return

let apples: number = 5;

apples = 10;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: {x: number; y: number} = {x: 10, y: 20};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations (When interface doesn't work)
// (1) Function that returns the 'any' type
// Avoid ANY as can as possible
// TS cannot predict type from json because json can use '' for all type.
const json = '{"x": 10, "y":20}';
// here!
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);  // >> {x: 10, y: 20}

// (2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
// here!
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// (3) Variable whose type cannot be inferred correctly
let numbers = [-10 - 1, 12];
// here!
let numbersAboveZero: boolean|number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[i];
  }
}
