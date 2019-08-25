const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// tuples structure
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Not so likes tuple because cannot see the key, idk what is going on. Better use objects instead
