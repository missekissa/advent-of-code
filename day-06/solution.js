const fs = require("fs");

const input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split(",").map(n => Number(n));

const timerLength = 9; //0 is valid timer value
const timerReset = 6; //lanternfish that creates a new fish resets its timer to 6

const fishCount = (day, input) => {
    let fishes = [...Array(timerLength).map((_, i) => i)].fill(0);

    for (let fish in input) {
        fishes[input[fish]]++;
    }

    let state;
    for (let i = 0; i < day; i++) {
        state = fishes.slice(1).concat(fishes[0]).map((n, i) => i == timerReset ? n + fishes[0] : n);    
        fishes = state.slice();
    }

    return fishes.reduce((previousValue, currentValue ) => previousValue + currentValue);
}

console.log(fishCount(80, input)); //365131
console.log(fishCount(256, input)); //1650309278600