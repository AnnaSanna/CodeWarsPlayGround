export const notStringTypeErrorMessage = "There should be a string!"

export function countNumberOfLowercase(string) {
    if (typeof string !== "string") { throw new Error(notStringTypeErrorMessage) }
    return string.replace(/[^a-z]/g, "").length;
}