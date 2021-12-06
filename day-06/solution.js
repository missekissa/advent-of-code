const fs = require("fs");

//let input = fs.readFileSync("./example.txt", { encoding: "utf8" }).split(",").map(n => Number(n));
let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split(",").map(n => Number(n));

const newInternalTimer = 8;
const existingInternalTimer = 6;

const fishCount = (day, input) => {
    let fishes = [...Array(9).map((_, i) => i)].fill(0);
    let array = fishes.slice();
    // console.log(input);
    // console.log(fishes);
    // console.log(array);

    for (let fish in input) {
        fishes[input[fish]]++;
    }

    for (let i = 0; i < day; i++) {
        array = fishes.slice(1);
        array.push(fishes[0]);
        array[6] += fishes[0];

        fishes = array.slice();

    }

    return fishes.reduce((previousValue, currentValue ) => previousValue + currentValue, 0);
}

console.log(fishCount(80, input)); //365131
console.log(fishCount(256, input)); //1650309278600

