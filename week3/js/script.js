let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  console.log("Hello!");
};

console.log("-----Before calling the function sayHi()-----");
user.sayHi(); // Hello!

console.log("-----To verify how the functions was added to the object-----");
console.log(user);

let user2 = { name: "John" };
let admin = { name: "Admin" };

function sayName() {
  console.log("-----Before printing the name with the sayName() function-----");
  console.log(this.name);
}

user2.f = sayName;
admin.f = sayName;

// these calls have different this
// "this" inside the function is the object "before the dot"
user2.f(); // John  (this == user2)
admin.f(); // Admin  (this == admin)

admin["f"](); // Admin (dot or square brackets access the method – doesn't matter)

console.log("-----Calculator-----");

// let number1 = prompt("Please, type a number:");
// let number2 = prompt("Please, type a second number:");

let calculator = {
  first: Number(prompt("Please, type a number:")),
  second: Number(prompt("Please, type a second number:")),
  read() {
    console.log(`Your numbers are: ${this.first} and ${this.second}`);
  },

  sum() {
    return `The sum of your numbers are ${this.first + Number(this.second)}`;
  },

  mul() {
    return `The multiplication of your numbers are ${this.first * this.second}`;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    // shows the current step
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

const name = Symbol("name"); // if I change Symbol("name") just for a string called "name" it works anyways.
const supergirl = { [name]: "Supergirl" };

console.log(supergirl); // returns {Symbol(name): 'Supergirl'}
console.log(supergirl[name]); // returns Supergirl

const realName = Symbol("real name");
supergirl[realName] = "Kara Danvers";

console.log(supergirl);

// Are Symbols often used?

const daredevil = { [name]: "Daredevil", [realName]: "Matt Murdoch" };

console.log(daredevil);

alert("We'll generate a random number between two numbers now:");
const number1 = Number(prompt("Please, type the first number"));
const number2 = Number(prompt("Please, type the second number"));

const randomNumber = (number1, number2) =>
  Math.floor((number2 - number1 + 1) * Math.random() + number1);

const finalNum = randomNumber(number1, number2);

alert(`The random number is: ${finalNum}`);
console.log("-----The random number-----");
console.log(finalNum);

const localMainesUTC = new Date().getTimezoneOffset();
console.log(localMainesUTC);
