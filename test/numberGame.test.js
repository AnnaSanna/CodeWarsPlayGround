import { equal } from 'assert';
import * as main from '../numberGame.js';

it('User guessed the number on the first try', () => {
    const playOne = new main.Guesser(12, 1);
    equal(playOne.guess(12), true);
})

it('User guessed the number on the last  try', () => {
    const playOne = new main.Guesser(5, 2);
    equal(playOne.guess(12), false);
    equal(playOne.guess(5), true);
})

it('User did not guess the number', () => {
    const playOne = new main.Guesser(10, 3);
    equal(playOne.guess(1), false);
    equal(playOne.guess(2), false);
    equal(playOne.guess(3), false);
    try {
        playOne.guess(4);
        equal('fail', 'For some reason the guess method did not throw');
    } catch (error) {
        equal(error, main.noGuessesLeft)
    }
})