const fs = require("fs");

let input = fs.readFileSync("./example.txt", { encoding: "utf8" }).split("\n\n");

let numbers, boards;

[numbers, ...boards] = input;

//Returns values as numbers in array
const getNumbers = numbers => numbers.split(",").map(n => Number(n));

const getBoard = board => {
    return board.split("\n");
    //return board.split("\r\n");
}

//input = input.split("\r\n");
//input = input.split("");

//console.log(input);

console.log("------DEBUG-------");
console.log(input.length);

console.log(numbers);

console.log("Numbers array:");
console.log(getNumbers(numbers));

console.log("------");
console.log(boards[0]);
console.log(getBoard(boards[0]));
//console.log(numbers.length);

//console.log(boards[0]);
//console.log(boards.length);

const part1 = () => {

}