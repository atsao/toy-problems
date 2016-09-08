/*
Missing Numbers

Given an unsorted array with numbers 1 through n with one number missing, find the missing number.

Challenge:  Given an array with two numbers missing, find the numbers.
*/

const missingNumbers = (array) => {
  let sumArray = 0;
  let sumRange = 0;

  for (let i = 0; i < array.length; i++) {
    sumArray += array[i];
  }
  
  for (let i = 1; i <= array.length + 1; i++) {
    sumRange += i;
  }
  
  return sumRange - sumArray;
}

console.log(missingNumbers([1, 2, 3, 5])); // 4
console.log(missingNumbers([4, 3, 6, 8, 2, 1, 9, 5])); // 7