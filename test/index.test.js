import { deepEqual, equal } from 'assert';
//import { monkeyCount, countMonkeysError } from '../index.js';
import * as main from '../index.js';

it('Integer negative, zero, positive and fractional number in array', () => {
   equal(main.executeSumArrayElementsAndCheckAllElements([-1, 0, 5, 3.3]), 7.3);
})


it('One element in array', () => {
   equal(main.executeSumArrayElementsAndCheckAllElements([-5.1]), -5.1);
})


it('Null in array', () => {
   equal(main.executeSumArrayElementsAndCheckAllElements([]), 0);
})

it('String in array', () => {
   try {
      main.executeSumArrayElementsAndCheckAllElements(['asd', 1])
      equal(true, "For some reason function didn't throw an error")
   } catch (error) {
      equal(error.message, main.sumElementsErrorMessage);
   }
})

it('String "1" in array', () => {
   try {
      main.executeSumArrayElementsAndCheckAllElements([1, '2'])
      equal(true, "For some reason function didn't throw an error")
   } catch (error) {
      equal(error.message, main.sumElementsErrorMessage);
   }
})




/*
 it('Integer positive number of monkeys', () => {
    deepEqual(main.monkeyCount(5), [1, 2, 3, 4, 5]);
 })

 it('Zero number of monkeys', () => {
    deepEqual(main.monkeyCount(0), []);
 })

 it('Negative number of monkeys', () => {
     equal(main.monkeyCount(-10), main.countMonkeysError);
 })

 it('String instead of number of monkeys', () => {
   equal(main.monkeyCount('string'), main.countMonkeysError);
})
*/



// it('should return -1 when the value is not present', function () {
//     equal([1, 2, 3].indexOf(4), -1);
// })

// it('UpperCase character in a word', () => {
//     equal(countCharactersInWord('WoOd', 'O'), 2);
// });

// it('No matches between character and word', () => {
//     equal(countCharactersInWord('WoOd', 'a'), 0);
// });

// it('Empty word and character', () => {
//     equal(countCharactersInWord('', ''), 0);
// });

