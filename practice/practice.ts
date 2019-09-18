const sum = (a: number, b: number): number => {
  return a + b;
};

const answer = sum(5, 5);
console.log(answer);

let isCool: boolean = true;
let age: number = 56;
let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm not old, I'm only ${age}`;

let pets: string[] = ['cat', 'dog', 'pig'];

let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

let wizard: object = {
  a: 'John',
  b: 'Aya',
  c: 'Snow'
};

let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3
}
// >> Medium
let sizeName: string = Size[2];
// >> 1
let sizeName2: number = Size.Small;

// void
let sing = (): void => {
  console.log('lalalala');
};

// never
// no return, never `true` (Type guard)
let error = (): never => {
  throw Error('Error!!!');
};

// interface
// can takes as customize Type
// Type RobotArmy = {} : Also can, but interface is better
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('Fight');
};

// type assertion
interface CatArmy {
  count: number;
  type: string;
  magic?: string;
}

let dog = {} as CatArmy;
dog.count;

// Function
let fightRobotArmyFunction = (robots: RobotArmy): void => {
  console.log('Fight');
};

// Class
class Animal {
  public sing: string = 'lalalalala';
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `Hello, ${this.sing}`;
  }
}

let lion = new Animal('RAAAAWWA!');
// >> Hello, RAAAAWWA!
lion.greet();

// Union
let confused: string | number = 'hello';
