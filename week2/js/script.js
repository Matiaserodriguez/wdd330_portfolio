const myArray = [];

const newArray = new Array();

console.log(typeof myArray);
console.log(typeof newArray);

const heroesArray = [];

heroesArray[0] = "Iron-man";
heroesArray[1] = "Captain America";
heroesArray[3] = "Captain Marvel";
heroesArray[4] = "Spider Man";
heroesArray[6] = "Black-Cat";
heroesArray[7] = "Black Widow";

console.log(heroesArray); //indexes 2 and 5 should be undefined. When we do a console log, it says 'empy' though.

console.log(heroesArray[2]); // undefined
console.log(heroesArray[5]); // undefined

const popedLast = heroesArray.pop();

console.log(popedLast); // in this case Black Widow

heroesArray[2] = "Spider-Gwen";
heroesArray[5] = "Wanda";

console.log(heroesArray.join(" and "));

console.log(`The index of IronMan is: ${heroesArray.indexOf("Iron-man")}`);

const summer = ["Jun", "Jul", "Aug"];
const winter = ["Dec", "Jan", "Feb"];
const nested = [summer, winter];

console.log(nested);

const flat = [...summer, ...winter];

console.log(flat);

const viola = function arguments() {
  return arguments;
};

console.log(viola("hello", NaN));

function arr(...args) {
  return args;
}

console.log(arr(null, 2, NaN, 4, 5)); //(5) [null, 2, NaN, 4, 5]

const square = (x) => x * x;

console.log(square(6, 6)); //should be 36

const tax = (salary) => {
  let taxable = salary - 8000; //had to fix this, the example said 'const' instead of let
  const lowerRate = 0.25 * taxable;
  taxable = taxable - 20000;
  const higherRate = 0.4 * taxable;
  return lowerRate + higherRate;
};

console.log(tax(50000));

console.log([1, 2, 3, 4, 5].reduce((acc, val) => acc + val));
