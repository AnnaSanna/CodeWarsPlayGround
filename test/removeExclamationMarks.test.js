import { equal } from 'assert';
import { typeOfArgumentErrorMessage, executeRemoveExclamationMarksAndCheckArgumentType } from '../removeExclamationMarks.js';

it('Exclamation Marks at the beginning, middle and end of the line', () => {
    equal(executeRemoveExclamationMarksAndCheckArgumentType('!string !quer!ty 123!'), 'string querty 123');
})

it('There are only exclamation marks in the line', () => {
    equal(executeRemoveExclamationMarksAndCheckArgumentType('!!!'), '');
})

it('Type of Argument is not String', () => {
    try {
        executeRemoveExclamationMarksAndCheckArgumentType(123)
        equal(true, "For some reason function didn't throw an Error")
    } catch (error) {
        equal(error.message, typeOfArgumentErrorMessage);
    }
})