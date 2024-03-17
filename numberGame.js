export const noGuessesLeft = 'No guesses left';
export class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (this.lives === 0) throw noGuessesLeft;
        if (n === this.number) return true
        else {
            this.lives = this.lives - 1;
            return false;
        }
    }
}


// const playOne = new Guesser(12, 3);
// console.log(playOne.guess(13));
// console.log(playOne.guess(13));
// console.log(playOne.guess(13));
// console.log(playOne.guess(13))

