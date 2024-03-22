import { equal } from 'assert';
import { typeOfArgumentErrorMessage, countNumberOfLowercase } from '../countNumberOfLowercase.js';

it('Mix of lowercase letters, uppercase letters, numbers and symbols in a string', () => {
    equal(countNumberOfLowercase('abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~'), 3);
})

it('Just lowercase letters in a string', () => {
    equal(countNumberOfLowercase('zxcpo'), 5);
})

it('No lowercase letters in a string', () => {
    equal(countNumberOfLowercase('ABC123!%^&*()_-+=|'), 0);
})

it('Empty string', () => {
    equal(countNumberOfLowercase(''), 0);
})

it('Should throw an Error when the type of argument is not a String', () => {
    try {
        countNumberOfLowercase([123, 1])
        equal(true, "For some reason function didn't throw an error")
    } catch (error) {
        equal(error.message, typeOfArgumentErrorMessage);
    }
})