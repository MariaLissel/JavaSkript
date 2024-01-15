/* 
1. Parameter = Array = a 
2. Parameter = Number = b

Die Number soll im Arrays bei 1 anfangen zu zählen für das erste Item anstatt bei 0 (default)
Lösche Das item und wiederhole das array
stelle sicher, dass sich das originale array nicht verändert hat
*/

function removeItem(array, number) {
  const arrayShallowCopy = array.slice(); // erstellt eine Kopie von dem Original Array
  const result = arrayShallowCopy.splice(number - 1, 1); // wendet splice (löschen) auf die Kopie an (Variable number - 1 (weil es eins anstatt bei Null anfangen soll), 1 (für ein Item lang - also sich selbst))

  // return result; = welches Item heraus genommen wird
  return arrayShallowCopy;
}

// TODO: Implement the removeItem function

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]
