// Display / UI
import { TILE_STATUSES, createBoard, markTile, revealTile } from './minesweeper.js';

const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 10;

// populate the board with tiles/mines
const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElement = document.querySelector('.board');
const minesLeftText = document.querySelector('[data-mine-count]');

// console.log(board);

board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element);
        tile.element.addEventListener('click', () => {
            revealTile(board, tile);
        })
        tile.element.addEventListener('contextmenu', e => {
            e.preventDefault();
            markTile(tile);
            listMinesLeft();
        });
    });
});
boardElement.style.setProperty('--size', BOARD_SIZE);
minesLeftText.textContent = NUMBER_OF_MINES;

function listMinesLeft() {
    const markedTilesCount = board.reduce((count, row) => {
        return count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
    }, 0);

    minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount
}




// left click on tiles >> reveal tiles


// right click on tiles >> mark tiles


// check for win/lose


