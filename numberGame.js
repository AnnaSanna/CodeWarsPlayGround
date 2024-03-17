export const noGuessesLeft = 'No guesses left';
export class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(number) {
        if (this.lives === 0) throw noGuessesLeft;
        if (number === this.number) return true
        else {
            this.lives = this.lives - 1;
            return false;
        }
    }
}