import Board from './board';

const cells = Array.from(document.querySelectorAll('.cell'));
const board = new Board(cells);

document.addEventListener('DOMContentLoaded', () => {
  board.moveGoblin();
});
