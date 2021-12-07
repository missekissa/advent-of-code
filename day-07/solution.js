const fs = require("fs");
const path = require('path');
const { median } = require('mathjs');

//const input = fs.readFileSync(path.join(__dirname, "/example.txt"), { encoding: "utf8" }).split(",").map(n => Number(n));
const input = fs.readFileSync(path.join(__dirname, "/input.txt"), { encoding: "utf8" }).split(",").map(n => Number(n));

const cheapestPosition = median(input);

const fuelCost = (position) => {
    let min = Math.min(position, cheapestPosition);
    let max = Math.max(position, cheapestPosition);
    return max - min;
}

const part1 = (input) => {
    return input.reduce((sum, crab) => sum + fuelCost(crab), 0);
}

console.log(cheapestPosition);
console.log(part1(input));