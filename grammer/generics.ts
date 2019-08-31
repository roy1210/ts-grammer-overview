class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// new ArrayOfAnything<string>(['a', 'b', 'c']);
// Type inference: TS knows string type because [] with string character
const arr = new ArrayOfAnything(['a', 'b', 'c']);

// Example generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Don't do: printAnything<string[]> -> to avoid pass two[] like `string[][]`
// <string>: Can omit
printAnything<string>(['a', 'b', 'c']);

// Generic Constraints
class Car {
  print() {
    console.log("I'm a car");
  }
}
class House {
  print() {
    console.log("I'm a house");
  }
}

interface Printable {
  print(): void;
}

// interface can promise we can use the method indicated i interface
function printHousesOrCars<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
printHousesOrCars<House>([new House()]);
