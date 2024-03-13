import input from 'input';

export const sumElementsErrorMessage = "All elements of array must be numbers";

function sumElementsInArray(array) {
    const resultSumElements = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0);
    return resultSumElements;
}

function checkAllArrayElementsNumbers(array) {
    const ifElementIsNumber = (element) => typeof element === 'number';
    if (!array.every(ifElementIsNumber)) throw new Error(sumElementsErrorMessage);
}

export function executeSumArrayElementsAndCheckAllElements(array) {
    checkAllArrayElementsNumbers(array);
    return sumElementsInArray(array);
}




// function countElementsInArray(array) {
//     let result = 0;
//     array.forEach((element) => { result = result + element });
//     return result;
// }



/*export const countMonkeysError = "The number of monkeys should be an integer value greater or equal zero."
export function monkeyCount(number) {
    const monkeys = [];
    if (number < 0 || typeof number === 'string') {
        return countMonkeysError;
        }
    for (let i = 1; i <= number; i++) {
    monkeys.push(i);
 }

  return monkeys;
}*/

 //let count = await input.text("Enter count of monkeys:");
 //console.log(monkeyCount(count))
   


// Checks a character in a string
/*export function countCharactersInWord(word, character) {
    let count = 0;
    for (let a = 0; a < word.length; a++) {

        if (word[a].toLowerCase() === character.toLowerCase()) {
            count++;
        }
    }
    return count
}*/
// const word = await input.text("Enter word:  ");
// const character = await input.text("Enter letter:  ");
// console.log(countCharactersInWord(word, character))
// console.log('111')



//Ckecks if a string is UpperCase
/*function myFunction(str) {
    return str === str.toUpperCase();
  }

  let text = await input.text ("Enter word: ");
  console.log(myFunction(text))*/



//Convert a String to a Number
/*function myFunction(str) {
    return Number(str)
}
let text = await input.text ("Enter word: ");
console.log(typeof myFunction(text))*/



// //Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// function myFunction(n, string) {
//     return string.repeat(n)
// }
// let number = await input.text ("Enter number: ");
// let text = await input.text ("Enter text: ");
//console.log(myFunction(number, text))
