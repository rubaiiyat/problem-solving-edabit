// Buggy Code (Part 5) created an infinite loop

function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}
const result = printArray(10);
console.log(result);
