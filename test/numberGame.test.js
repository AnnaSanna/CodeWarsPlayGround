import { equal } from 'assert';
import * as numberGame from '../numberGame.js';

describe('User guessed the number', () => {
    it('On the first try', () => {
        const player = new numberGame.Guesser(12, 1);
        equal(player.guess(12), true);
    })

    it('On the last try', () => {
        const player = new numberGame.Guesser(5, 2);
        equal(player.guess(12), false);
        equal(player.guess(5), true);
    })
})

describe("Should throw an Error", () => {
    it('When there is negative number of guesses', () => {
        const player = new numberGame.Guesser(5, -1);
        try {
            player.guess(5);
            equal('Fail', 'For some reason the guess method did not throw an Error');
        } catch (error) {
            equal(error.message, numberGame.errorMessageNoGuessesLeft)
        }
    })

    it('When User did not guess the number within allocated attempts', () => {
        const player = new numberGame.Guesser(10, 3);
        equal(player.guess(1), false);
        equal(player.guess(2), false);
        equal(player.guess(3), false);
        try {
            player.guess(4);
            equal('fail', 'For some reason the guess method did not throw an Error');
        } catch (error) {
            equal(error.message, numberGame.errorMessageNoGuessesLeft)
        }
    })
})