// Display / UI
import { createBoard } from './minesweeper.js';

const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 2;

// populate the board with tiles/mines
const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElement = document.querySelector('.board');

board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
    });
});
boardElement.style.setProperty('--size', BOARD_SIZE)

// left click on tiles >> reveal tiles


// right click on tiles >> mark tiles


// check for win/lose


