// TODO: implement welcomeMsg function
function welcomeMsg(a, c, b) {
  return a + " " + c + " " + b;
}

let greeting = welcomeMsg("Welcome,", "Maria", "how are you today?");
console.log(greeting);

// TODO: implement calcGrossPrice function
function calcGrossPrice(a, b) {
  return a * b + a;
}

let result = calcGrossPrice(40, 0.16);
console.log(result);

// TODO: Implement the addPositive function
function addPositive(a, b) {
  return -a + -b;
}

let add = addPositive(-1, -8);
console.log(add);
