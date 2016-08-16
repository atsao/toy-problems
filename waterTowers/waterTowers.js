/*
Water Between Towers

Given an input of tower heights, find the amount of water collected between the towers. Every tower has a width of 1.

Example:

Input = [5,3,7,2,6,4,5,9,1,2]
Output = 14

Example 2:

Input = [1, 4, 1, 1, 1, 2, 3, 5, 2]
Output = 9

Example 3:

Input = [1, 0, 3, 2]
Output = 1

*/

const waterTowers = (towerHeights) => {
  let waterCount = 0;
  let startPosition = 0;
  let endPosition = 0;

  for (let i = 0; i < towerHeights.length; i++) {
    if (towerHeights[i + 1] && towerHeights[i + 1] < towerHeights[i]) {
      // i is a peak position
      startPosition = i;
      for (let j = i + 2; j <= towerHeights.length; j++) {
        if (towerHeights[j] >= towerHeights[i]) {
          endPosition = j;
          break;
        }
      }

      console.log('start ht: ', towerHeights[startPosition]);
      console.log('end ht: ', towerHeights[endPosition]);

      if (endPosition > startPosition + 1) {
        waterCount += towerHeights[startPosition] * (endPosition - startPosition - 1);
        for (let k = startPosition + 1; k < endPosition; k++) {
          waterCount -= towerHeights[k];
        }
      }
    }
  }

  return waterCount;
}

let heights = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
let heights2 = [1, 4, 1, 1, 2, 3, 5, 2];
let heights3 = [1, 0, 3, 2];

console.log(waterTowers(heights)); // 14
console.log(waterTowers(heights2)); // 9
console.log(waterTowers(heights3)); // 1`


