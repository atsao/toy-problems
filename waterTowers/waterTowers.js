/*
Water Between Towers

Given an input of tower heights, find the amount of water collected between the towers. Every tower has a width of 1.

Example:

Input = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]
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

  let i = 0;
  while (i < towerHeights.length) {
    startPosition = i;
    endPosition = startPosition;

    for (let j = endPosition; j < towerHeights.length; j++) {
      if (towerHeights[j] >= towerHeights[i] && j !== i) {
        endPosition = j;
        break;
      }
    }

    if (endPosition === i) {
      if (towerHeights[i + 2] > towerHeights[i + 1]) {
        endPosition = towerHeights.length - 1;
      } else {
        break;
      }
    }

    let startHeight = towerHeights[startPosition];
    let endHeight = towerHeights[endPosition];

    // Start with total blocks of water: height * width
    waterCount += Math.min(startHeight, endHeight) * (endPosition - startPosition - 1);
    
    // For each tower in between start and end, remove heights
    for (let k = startPosition + 1; k < endPosition; k++) {
      waterCount -= towerHeights[k];
    }
    if (towerHeights[i + 1] === undefined) {
      break;
    }
    i = endPosition;
  }

  return waterCount;
}

let heights = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
let heights2 = [1, 4, 1, 1, 2, 3, 5, 2];
let heights3 = [1, 0, 3, 2];

console.log(waterTowers(heights)); // 14
console.log(waterTowers(heights2)); // 9
console.log(waterTowers(heights3)); // 1`


