import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle-id');
const guessesEl = document.querySelector('#guess-id');
let game1;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();
})

const render = () => {
    puzzleEl.innerHTML = '';
    guessesEl.innerHTML = game1.statusMessage;
    game1.puzzle.split('').forEach(element => {
        const span = document.createElement('span');
        span.innerHTML = element;
        puzzleEl.appendChild(span);
    });
}

const startGame = async () => {
    const puzzle = await getPuzzle(1);
    game1 = new Hangman(puzzle, 10);
    render();
}

document.querySelector('#reset-id').addEventListener('click', startGame);

startGame();

export { game1 as default }
