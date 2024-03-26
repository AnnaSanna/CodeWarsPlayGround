import { equal } from 'assert';
import { notStringTypeErrorMessage, countNumberOfLowercase } from '../countNumberOfLowercase.js';

describe('Lowercase letters', () => {
    it('At the beginning and end', () => {
        equal(countNumberOfLowercase('zxcGHJ123bnm'), 6);
    })

    it('At the middle', () => {
        equal(countNumberOfLowercase('ASD!gggggOKL7'), 5);
    })

    it('Everywhere', () => {
        equal(countNumberOfLowercase('zxcpo'), 5);
    })

    it('Nowhere', () => {
        equal(countNumberOfLowercase('ABC123!%^&*()_-+=|'), 0);
    })
})

it('Mix of lowercase letters, uppercase letters, numbers and symbols in a string', () => {
    equal(countNumberOfLowercase('abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~'), 3);
})

it('Empty string', () => {
    equal(countNumberOfLowercase(''), 0);
})

it('Should throw an Error when the type of argument is not a String', () => {
    try {
        countNumberOfLowercase([123, 1])
        equal(true, "For some reason function didn't throw an error")
    } catch (error) {
        equal(error.message, notStringTypeErrorMessage);
    }
})