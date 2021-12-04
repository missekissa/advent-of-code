const fs = require("fs");

let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split("\n\n");

let numbers, boards;
[numbers, ...boards] = input;

//Returns the numbers to draw from
const getNumbers = numbers => numbers.split(",");

//Return 2d array from given board
const getBoard = board => board.split("\n").map(x => x.split(" ").filter(x => x));

//Draw next number
const getNextNumber = nextNumber => getNumbers(numbers)[nextNumber];

const markBoard = (board, number) =>
    board.map((row) =>
        row.map((column) =>
            (column == getNextNumber(number) ? "x" : column)
        ));

const checkWinner = board => {
    let win = false;

    //Check for row winner 
    board.forEach((_row, i) => {
        if (board[i][0] == "x" && board[i][1] == "x" && board[i][2] == "x" && board[i][3] == "x" && board[i][4] == "x")
            win = true;
    });

    //Check for colum winner 
    board[0].forEach((_x, i) => {
        if (board[0][i] == "x" && board[1][i] == "x" && board[2][i] == "x" && board[3][i] == "x" && board[4][i] == "x")
            win = true;
    });

    return win;
}

const calculateResult = (board, i) => {
    let umarked = [].concat(...board).filter(x => x !== "x").map(n => Number(n));
    sum = umarked.reduce((x, n) => x + n);
    return sum * getNextNumber(i - 1);
}

const part1 = (numbers, boards) => {
    boards = boards.map(b => getBoard(b));

    let result = 0;
    let isFound = false;
    let i = 0;
    do {
        boards = boards.map(board => markBoard(board, i));

        boards.forEach((board) => {
            if (checkWinner(board) == true) {
                result = board;
                isFound = true;
            }
        });
        i++

    } while (!isFound)

    return calculateResult(result, i);
}

const part2 = (numbers, boards) => {
    boards = boards.map(b => getBoard(b));

    let result = 0;
    let found = false;
    let i = 0;
    do {
        boards = boards.map(board => markBoard(board, i));

        boards.forEach((board) => {

            if (boards.length == 1) {
                if (checkWinner(board) == true) {
                    found = true;
                    result = board;
                }
            }
            if (checkWinner(board) == true) 
                boards = boards.filter(x => x !== board);
        });
        i++

    } while (!found)

    return calculateResult(result, i);
}

console.log(part1(numbers, boards));
console.log(part2(numbers, boards));