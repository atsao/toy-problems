const spiralTraversal = (matrix) => {
  let traversed = [];
  let topBound = 0;
  let rightBound = matrix[0].length - 1;
  let bottomBound = matrix.length - 1;
  let leftBound = 0;

  while (topBound <= bottomBound && leftBound <= rightBound) {
    // Top
    for (let i = leftBound; i <= rightBound; i += 1) {
      traversed.push(matrix[topBound][i]);
    }
    topBound += 1;

    // Right
    for (let i = topBound; i <= bottomBound; i += 1) {
      traversed.push(matrix[i][rightBound]);
    }
    rightBound -= 1;

    // Bottom
    if (topBound <= bottomBound) {
      for (let i = rightBound; i >= leftBound; i -= 1) {
        traversed.push(matrix[bottomBound][i]);
      }
      bottomBound -= 1;
    }

    // Left
    if (leftBound <= rightBound) {
      for (let i = bottomBound; i >= topBound; i -= 1) {
        traversed.push(matrix[i][leftBound]);
      }
      leftBound += 1
    }
  }

  return traversed;
};

module.exports = spiralTraversal;
