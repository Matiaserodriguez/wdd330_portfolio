function square(n) {
  return n * n;
}

const result = square.call(null, 5);
const resultApply = square.apply(null, [9]);

console.log(result);
console.log(resultApply);

square.description = "Squares a number";

console.log(square.description);
console.log(square);

function party() {
  console.log("Wow this is amazing!");
  party = function () {
    console.log("Been there, got the T-Shirt");
  };
}

party();
party();

function ride() {
  if (window.unicorn) {
    ride = function () {
      // some code that uses the brand new and sparkly unicorn methods
      return "Riding on a unicorn is the best!";
    };
  } else {
    ride = function () {
      // some code that uses the older pony methods
      return "Riding on a pony is still pretty good";
    };
  }
  return ride();
}

console.log(ride());

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));

function wait(message, callback, seconds) {
  setTimeout(callback, seconds * 1000);
  console.log(message);
}

function selfDestruct() {
  console.log(
    "#############################---> ends the self-destruct. BOOOOM!"
  );
}

wait(
  "#############################---> Starts the wait() function... This tape will self-destruct in five seconds ... ",
  selfDestruct,
  5
);
console.log("Hmmm, should I accept this mission or not ... ?");

console.log("-----------------------------------------------");

const dice = {
  sides: 6,
  roll() {
    return Math.floor(this.sides * Math.random()) + 1;
  },
};

console.log("Before the roll");

const roll = new Promise((resolve, reject) => {
  const n = dice.roll();
  if (n > 1) {
    setTimeout(() => {
      resolve(n);
    }, n * 200);
  } else {
    setTimeout(() => reject(n), n * 200);
  }
});

roll
  .then((result) => console.log(`I rolled a ${result}`))
  .catch((result) => console.log(`Drat! ... I rolled a ${result}`));

console.log("After the roll");

console.log("-----------------------------------------------");

function closure() {
  const a = 1.8;
  const b = 32;
  return (c) => c * a + b;
}

const toFahrenheit = closure();

console.log(
  `----\nClosure function toFahrenheit(30) returns: ${toFahrenheit(30)}\n----`
);

function counter(start) {
  let i = start;
  return function () {
    return i++;
  };
}

// Starts at 1
const count = counter(1);

// should return 1
console.log(count());
// should return 2
console.log(count());
// should return 3
console.log(count());

// Generators
function* fibonacci(a, b) {
  let [prev, current] = [a, b];
  while (true) {
    [prev, current] = [current, prev + current];

    // yield keyword that is used to return a value.
    // The difference between the yield and the return keywords is that by using yield,
    // the state of the value returned is remembered the next time yield is called
    yield current;
  }
}

const sequence = fibonacci(1, 1);

// Returns 2
console.log(
  `### \Generator function sequence.next().value returns: ${
    sequence.next().value
  }\n### `
);

// Returns 3
console.log(
  `### \Generator function sequence.next().value  returns: ${
    sequence.next().value
  }\n### `
);

// Returns 5
console.log(
  `### \Generator function sequence.next().value returns: ${
    sequence.next().value
  }\n### `
);

for (n of sequence) {
  // stop the sequence after it reaches 50
  if (n > 50) break;
  console.log(n);
}

function reverse(string) {
  return string.split("").reverse().join("");
}

console.log(reverse("This is going to be weird"));

// Work with pokeAPI

let offset = 0;
let limit = 3;

let pokeApi = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const container = document.querySelector(".container");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const reset = () => {
  document.querySelector(".container").innerHTML = "";
};

next.addEventListener("click", () => {
  offset += 3;
  reset();
  pokeApi = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  callToPokeApi(pokeApi);
});

prev.addEventListener("click", () => {
  if (offset != 0) {
    offset -= 3;
    reset();
    pokeApi = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    callToPokeApi(pokeApi);
  } else {
    reset();
    pokeApi = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    callToPokeApi(pokeApi);
  }
});

function callToPokeApi(api) {
  fetch(api)
    .then((res) => res.json())
    .then((res) => {
      let list = res.results;
      list.forEach((element) => {
        const name = document.createElement("p");
        name.textContent = element.name;
        const url = document.createElement("a");
        url.setAttribute("href", element.url);
        url.textContent = element.url;
        container.appendChild(name);
        container.appendChild(url);
      });
    });
}

callToPokeApi(pokeApi);
