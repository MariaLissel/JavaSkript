//  Copy the following complete code block to your script.js file and try to spot and fix the errors.

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  let result = name.length;
  return result;
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

// Implement a isString function.

/*
function isString(a) {
  return a;
}
*/

const isString = function (a) {
  return typeof a === "string";
};

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false
