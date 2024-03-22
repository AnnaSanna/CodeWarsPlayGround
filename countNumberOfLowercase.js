export const typeOfArgumentErrorMessage = "There should be a string!"

export function countNumberOfLowercase(string) {
    let count = 0;
    if (typeof string != "string") { throw new Error(typeOfArgumentErrorMessage) } else {
        for (let i = 0; i < string.length; i++) {
            if (string[i] >= 'a' && string[i] <= 'z') {
                count++;
            }
        }
    }
    return count;
}