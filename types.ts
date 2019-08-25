// Type: Easy way to refer to the different properties + function that a value has. (TS tell me the error)

const today = new Date();
today.getMonth();

const person = {
  age: 20
};

class Color {}
const red = new Color();
// Error!
red.xcz;
