// UpperCase
// Reusable code
// Can use on different objects, functions
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);

/*
General Strategy for reusable code in TS

(1) Create functions that accept arguments that are typed with interface

(2) Objects/classes can decide to 'implement' a giving interface to work with a function

*/
