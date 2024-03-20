export const typeOfArgumentErrorMessage = 'The type argument is not a string!'

function removeExclamationMarks(string) {
    return string.replaceAll('!', '')
}

function checkArgumentType(string) {
    if (typeof string != "string") throw new Error(typeOfArgumentErrorMessage)
}

export function executeRemoveExclamationMarksAndCheckArgumentType(string) {
    checkArgumentType(string);
    return removeExclamationMarks(string);
}

console.log(executeRemoveExclamationMarksAndCheckArgumentType('1!!!1'))