const size = 25;
let result;

if (size < 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// Implement a oddEven function.

function oddEven(a) {
  if (a % 2 === 0) {
    return "even";
  } else if (a % 2 !== 0) {
    return "odd";
  }
}

// TODO: Implement the oddEven function

console.log(oddEven(4)); //Das ist die Ausführung von der function
// result should be even

console.log(oddEven(12));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// Implement a oldYoung function.

function oldYoung(b) {
  if (b > 0 && b < 16) {
    return "children";
  } else if (b > 0 && b < 50) {
    return "young person";
  } else if (b > 50 && " ") {
    return "elder person";
  } else if (b < 0) {
    return "invalid parameter";
  } else if (isNaN(b)) {
    // if its not a number
    return "invalid parameter";
  }
}

// TODO: Implement the oldYoung function

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung("H"));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
