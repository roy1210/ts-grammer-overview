var sum = function (a, b) {
    return a + b;
};
var answer = sum(5, 5);
console.log(answer);
var isCool = true;
var age = 56;
var eyeColor = 'brown';
var favouriteQuote = "I'm not old, I'm only " + age;
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
var wizard = {
    a: 'John',
    b: 'Aya',
    c: 'Snow'
};
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
// >> Medium
var sizeName = Size[2];
// >> 1
var sizeName2 = Size.Small;
// void
var sing = function () {
    console.log('lalalala');
};
// never
// no return, never `true` (Type guard)
var error = function () {
    throw Error('Error!!!');
};
var fightRobotArmy = function (robots) {
    console.log('Fight');
};
var dog = {};
dog.count;
// Function
var fightRobotArmyFunction = function (robots) {
    console.log('Fight');
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello, " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAAAWWA!');
// >> Hello, RAAAAWWA!
lion.greet();
// Union
var confused = 'hello';
