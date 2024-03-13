const messagePlayerOneWon = 'Player 1 won!';
const messagePlayerTwoWon = 'Player 2 won!';
const messageDraw = 'Draw!';
const errorMessageRPS = 'Player one or Player two gave wrong value!'

function rockPaperScissors(playerOne, playerTwo) {
    if (playerOne === playerTwo) return messageDraw;
    const winPairs = {
        paper: 'rock',
        scissors: 'paper',
        rock: 'scissors'
    }
    return winPairs[playerOne] === playerTwo ? messagePlayerOneWon : messagePlayerTwoWon;
}

function checkAllElementsAreRPC(playerOne, playerTwo) {
    const ifElementIsRPS = (element) => ['rock', 'paper', 'scissors'].includes(element);
    if ((!ifElementIsRPS(playerOne)) || (!ifElementIsRPS(playerTwo))) throw new Error(errorMessageRPS);
}

export function RPCAndCheckValues(playerOne, playerTwo) {
    checkAllElementsAreRPC(playerOne, playerTwo);
    return rockPaperScissors(playerOne, playerTwo);
}

console.log(RPCAndCheckValues('rock', 'scissors'));