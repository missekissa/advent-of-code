const fs = require("fs");
const path = require('path');
const { median, mean } = require('mathjs');

const input = fs.readFileSync(path.join(__dirname, "/input.txt"), { encoding: "utf8" }).split(",").map(n => Number(n));

const _median = median(input);
const meanCeil = Math.ceil(mean(input));
const meanFloor = Math.floor(mean(input));

const fuelCost = (position, cheapestPosition) => Math.abs(position - cheapestPosition);

const part1 = input => input.reduce((sum, crab) => sum + fuelCost(crab, _median), 0);

const triangularNumber = x => x * (x + 1) / 2;

const part2 = input => {
    let floorResult = input.reduce((sum, crab) => sum + triangularNumber(fuelCost(crab, meanFloor)), 0);
    let ceilResult = input.reduce((sum, crab) => sum + triangularNumber(fuelCost(crab, meanCeil)), 0);
    return [floorResult, ceilResult];
}

console.log("Part 1 answer is:")
console.log(part1(input));
console.log("Part 2 answer is either:")
console.log(part2(input));