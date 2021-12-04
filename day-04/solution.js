const fs = require("fs");
const { exit } = require("process");

//let input = fs.readFileSync("./example.txt", { encoding: "utf8" }).split("\n\n");
let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split("\n\n");

let numbers, boards;

[numbers, ...boards] = input;

//Returns values as numbers in array
//const getNumbers = numbers => numbers.split(",").map(n => Number(n));

//Returns values as string in array
const getNumbers = numbers => numbers.split(",");


//Return 2d number array from given goard
//const getBoard = board => board.split("\n").map(x => x.split(" ").filter(x => x).map(n => Number(n)));

//Return 2d array from given goard
const getBoard = board => board.split("\n").map(x => x.split(" ").filter(x => x));



//return board.split("\n").map(x => x.split(" "));
//
//return board.split("\r\n");

//console.log(input);


//Return the winning numbers
const getNextNumber = (nextNumber) => {
    return getNumbers(numbers)[nextNumber];
}



//Transform array
const markBoard = (board, number) =>
    board.map((row) =>
        row.map((column) =>
            (column == getNextNumber(number) ? "x" : column)
        ));


//check board for if it has won
const checkWinner = (board) => {
    let isWin = false;

    //Check for row winner (WORKS)
    board.forEach((_row, i) => {
        if (board[i][0] == "x" && board[i][1] == "x" && board[i][2] == "x" && board[i][3] == "x" && board[i][4] == "x") {
            isWin = true;
        }

        /*
        let test= row.join("");
       // console.log(test);
        if (row == "xxxxx") {
            isWin = true;
        } */
    });

    //Check for colum winner (WORKS)
    board[0].forEach((_x, i) => {
        if (board[0][i] == "x" && board[1][i] == "x" && board[2][i] == "x" && board[3][i] == "x" && board[4][i] == "x") {
            isWin = true;
        }
    });

    return isWin;
}


const calculateResult = (board, i) => {
        let result = [].concat(...board);
        result = result.filter(x => x !== "x");
        result = result.map(n => Number(n));
        sum = result.reduce((x, n) => x + n);
        console.log("Calculated result is: ");
        //console.log(sum);
        console.log(getNextNumber(i));
        return sum * getNextNumber(i - 1);
    }


const part1 = (numbers, boards) => {
    console.log("------DEBUG-------");

    //console.log(boards);

    boards = boards.map(b => getBoard(b));

    let result = 0;
    let isFound = false;
    let i = 0;

    do {
        boards = boards.map(board => markBoard(board, i));

        boards.forEach((board) => {
            if (checkWinner(board) == true) {
                //console.log("Result is:");
                //console.log(board);
                result = board;
                isFound = true;
            }

        });
        i++

    } while (!isFound)


    return calculateResult(result, i);

}


const part2 = (numbers, boards) => {
    console.log("------DEBUG-------");
    //console.log(boards);

    //console.log(boards.keys(boards).length);

    boards = boards.map(b => getBoard(b));

    console.log(boards.keys.length);
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
            //console.log(board);
            if (checkWinner(board) == true) {
                console.log("Found!")
                boards = boards.filter(x => x !== board);

                console.log(boards.length);
                
    
                //console.log("Result is:");
                //console.log(board);
                //result = board;
                //isFound = true;
            }

        });
        i++

    } while (!found)

    return calculateResult(result, i);


    //console.log(boards[0][0].lenght)
    //console.log(boards[0].lenght);
    //return calculateResult(boards, i);
    //return boards;
    //console.log(boards);
    //return calculateResult(result, i);

}



//console.log(part1(numbers, boards));

//console.log(boards.length);

console.log(part2(numbers, boards));



//console.log("Result is: ")

/*
console.log(input.length);

console.log(numbers);

console.log("Numbers array:");
console.log(getNumbers(numbers));

console.log("------");
console.log(boards[0]);
console.log("Board 2d array:");
console.log(getBoard(boards[0]));

 console.log(result);

    console.log("Size");
    console.log(dimension);
    //console.log(row_count);
    //console.log(colum_count);


    console.log("First winning number: ");
    console.log(getNextNumber(0));

    console.log("Mark board:")
    console.log(markBoard(boards[0], 0));

    console.log("Check for the winner: ");
    checkWinner(boards[0]);
*/