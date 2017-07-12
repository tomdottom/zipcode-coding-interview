/*
    Conway's Game of Life
    =====================

    Rules:
      - Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
      - Any live cell with two or three live neighbours lives on to the next generation.
      - Any live cell with more than three live neighbours dies, as if by overpopulation.
      - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

      https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
*/

let board;

console.reset = function () {
  return process.stdout.write('\x1Bc');
}

/* Convenience method for clearing and repainting terminal */
console.display = function(obj) {
    console.reset();
    console.log(obj)
}

function initBoard() {
    board = Array(10).fill(1).map(
      () => Array.from({length: 10}, () => Math.random() > 0.2 ? 0 : 1));
}

function getState(x, y) {
    return 'TODO';
}

function getNeighbours(x, y) {
    return 'TODO';
}


function step() {
    for(let i=0; i<100; i++ ) {
      for(let x=0; x<10; x++) {
        for(let y=0; y<10; y++) {
                let cellState = getState(x, y);
                let cellNeighbours = getNeighbours(x, y);
                // What next???
            }
        }
        console.display(board);
    }
}

initBoard();
setInterval(step, 1000);

module.exports = {
    board: board,
    getState: getState,
    getNeighbours, getNeighbours
};
