// TODO: Implement the oddNumbers function

/* Iterate alle Nummern zwischen der erstsen und der zweiten nummer 
Bsp. a = 0 und b = 4 Result ist 1,2,3
Speichere alle ungerade Zahlen als string und gib sie von Kommas getrennt aus und return den string
Bsp. 1,3
*/

function oddNumbers(a, b) {
  if (a < 0 || b < 0) {
    return "must be non-negative.";
  }
  let result = ""; // ein Container/Speicher für den String als Leeraum

  for (let inumber = a; inumber <= b; inumber++) {
    if (inumber % 2 !== 0) {
      if (result.length > 0) {
        result = result += inumber + ",";
      }
      result = result + inumber;
    }
  }
  return result;
}

/* 
1. inumber starts at a
2. inumber ist kleiner als b und stoppt wenn es ein Wert unter b ist
3. inumber bekommt in jeder iteration einen Wert +
*/

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11
