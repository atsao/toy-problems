/*
Conway's Game of Life

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated".

Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by over-population.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

TO DO:
Implement the automaton algorithm. Use helper functions as needed.

*/

const automaton = (board) => {
  let cellsToToggle = [];

  // Collect cell positions to toggle
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let count = countLiveNeighbors(i, j, board);
      
      // Live cell with < 2 live neighbors - dies
      if (count < 2 && board[i][j] === 1) {
        cellsToToggle.push([i, j]);
      }
      
      // Live cell with > 3 live neighbors - dies
      if (count > 3 && board[i][j] === 1) {
        cellsToToggle.push([i, j]);
      }
      
      // Dead cell with 3 live neighbors - re-animates
      if (count === 3 && board[i][j] === 0) {
        cellsToToggle.push([i, j]);
      }
    }
  }
  
  // Iterate through cells to toggle to kill/re-animate
  for (let i = 0; i < cellsToToggle.length; i++) {
    let y = cellsToToggle[i][0];
    let x = cellsToToggle[i][1];
    
    if (board[y][x] === 1) {
      board[y][x] = 0;
    } else {
      board[y][x] = 1;
    }
  }
  
  return board;
};

const countLiveNeighbors = (y, x, board) => {
  let liveNeighbors = 0;
  
  // Top
  if (board[y - 1] !== undefined) {
    // Top neighbor
    if (board[y - 1][x] === 1) {
      liveNeighbors += 1;
    }

    // Top-left neighbor
    if (board[y - 1][x - 1] !== undefined && board[y - 1][x - 1] === 1) {
      liveNeighbors += 1;
    }

    // Top-right neighbor
    if (board[y - 1][x + 1] !== undefined && board[y - 1][x + 1] === 1) {
      liveNeighbors += 1;
    }
  }
  
  // Bottom
  if (board[y + 1] !== undefined) {
    // Bottom neighbor
    if (board[y + 1][x] === 1) {
      liveNeighbors += 1;
    }

    // Bottom-left neighbor
    if (board[y + 1][x - 1] !== undefined && board[y + 1][x - 1] === 1) {
      liveNeighbors += 1;
    }

    // Bottom-right neighbor
    if (board[y + 1][x + 1] !== undefined && board[y + 1][x + 1] === 1) {
      liveNeighbors += 1; 
    }
  }
  
  // Left
  if (board[y][x - 1] !== undefined && board[y][x - 1] === 1) {
    liveNeighbors += 1;
  }
  
  // Right
  if (board[y][x + 1] !== undefined && board[y][x + 1] === 1) {
    liveNeighbors += 1;
  }
  
  return liveNeighbors;
}

let test = [
  [1, 0, 0, 0],
  [0, 1, 1, 0],
  [1, 0, 0, 0]
];

console.log(automaton(test));