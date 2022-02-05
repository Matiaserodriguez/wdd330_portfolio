function squareRoot(number) {
  "use strict";
  if (number < 0) {
    throw new RangeError("You can't find the square root of negative numbers");
  }
  return Math.sqrt(number);
}

function factorsOf(n) {
  const factors = [];
  for (let i = 1; i <= n; i++) {
    if (n / i === Math.floor(n / i)) {
      factors.push(i);
    }
  }
  return factors;
}

function amIOldEnough(age) {
  debugger;
  if (age <= 12) {
    return "No, sorry.";
  } else if (age > 12 && age < 18) {
    return "Only if you are accompanied by an adult.";
  } else {
    return "Yep, come on in!";
  }
}

function isPrime(n) {
  try {
    return factorsOf(n).length === 2;
  } catch (error) {
    return false;
  }
}

function willMyInstructorSeeThisFunction(value) {
  if (value === "yes") {
    return true;
  } else if (value === "no") {
    return false;
  } else {
    throw new Error(
      'This function only takes "yes" or "no" as values. (without quotation marks)'
    );
  }
}

it("should return true if value === yes", () => {
  expect(willMyInstructorSeeThisFunction("yes")).toBe(true);
});

it("should return false if value === no", () => {
  expect(willMyInstructorSeeThisFunction("no")).toBe(false);
});

it("should throw an exception if value is different than yes or no", () => {
  expect(() => willMyInstructorSeeThisFunction("maybe")).toThrow(Error);
});

test("non-numerical data returns not prime", () => {
  expect(isPrime("two")).toBe(false);
});

test("non-integer numbers return not prime", () => {
  expect(isPrime(1.2)).toBe(false);
});

test("negative numbers return not prime", () => {
  expect(isPrime(-1)).toBe(false);
});

test("12 years old return No, sorry", () => {
  expect(amIOldEnough(12)).toBe("No, sorry.");
});

test("Ages 13, 14, 15, 16, and 17 returns Only if you are accompanied by an adult.", () => {
  expect(amIOldEnough(13)).toBe("Only if you are accompanied by an adult.");
  expect(amIOldEnough(14)).toBe("Only if you are accompanied by an adult.");
  expect(amIOldEnough(15)).toBe("Only if you are accompanied by an adult.");
  expect(amIOldEnough(16)).toBe("Only if you are accompanied by an adult.");
  expect(amIOldEnough(17)).toBe("Only if you are accompanied by an adult.");
});

test("square root of 4 is 2", () => {
  expect(squareRoot(4)).toBe(2);
});

test("square root of negative number throws exception", () => {
  expect(() => squareRoot(-1)).toThrow(RangeError);
});

test("factors of 12", () => {
  expect(factorsOf(12)).toEqual([1, 2, 3, 4, 6, 12]);
});
