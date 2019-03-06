import game1 from './index'

class Hangman {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = guesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}.`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return `Great work! You guessed the word.`
        }
    }
    assignStatus() {
        let finished = this.word.filter((letter) => {
            return this.guessedLetters.includes(letter) || letter === ' ';
        })

        if (this.remainingGuesses === 0) {
            this.status = 'failed';
        } else if (this.remainingGuesses > 0 && finished.length === this.word.length) {
            this.status = 'finished';
        } else {
            this.status = 'playing';
        }
    }
    makeGuess(guessedLetter) {
        if (this.status === 'playing') {
            guessedLetter = guessedLetter.toLowerCase();
            const isUnique = !this.guessedLetters.includes(guessedLetter);
            const isBadGuess = !this.word.includes(guessedLetter);
            if (isUnique) {
                this.guessedLetters.push(guessedLetter);
            }

            if (isUnique && isBadGuess) {
                this.remainingGuesses--;
            }
            game1.assignStatus();
        }
    }
    get puzzle() {
        let puzzle = [];
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle.push(letter);
            } else {
                puzzle.push('*');
            }
        })
        return puzzle.join('');
    }
}

export { Hangman as default }