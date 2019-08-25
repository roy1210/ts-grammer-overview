const carMakers = ['ford', 'toyota', 'nissan'];
const dates = [new Date(), new Date()];

// string[][]
// const carsByMake = [['f150'], ['corolla'], ['reef']];
const carsByMake: string[][] = [];

// Prevent incompatible values, error!
carMakers.push(100);

// Help with `map` and autocomplete
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible types
const importantDates: (Date|string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-11-11');
importantDates.push(new Date());
