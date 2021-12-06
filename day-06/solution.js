const fs = require("fs");

//let input = fs.readFileSync("./example.txt", { encoding: "utf8" }).split(",").map(n => Number(n));
let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split(",").map(n => Number(n));

const newInternalTimer = 8;
const existingInternalTimer = 6;

const simulateDay = (array) => {
    let spawns = [];
    //array = array.map(n => n == 0 ? spawns.push(newInternalTimer) : n - 1 );
    array = array.map(n => {
        if (n == 0) {
            spawns.push(newInternalTimer)
            return existingInternalTimer;
        } else {
            return n - 1;
        }
    });

    return spawns.length > 0 ? array.concat(spawns) : array;
    //return array;
}

const part1 = (input, days) => {
    for (let i = 0; i < days; i++) {
        input = simulateDay(input);
    }
    return input.length;
}

//console.log(part1(input, 18));
console.log(part1(input, 80));


/*
console.log("----DEBUG----");
console.log("Initial State: " + input);
input = simulateDay(input);
console.log("After 1 day: " + input);
input = simulateDay(input);
console.log("After 2 day: " + input);
input = simulateDay(input);
console.log("After 3 day: " + input);


console.log(input);
console.log(newInternalTimer);
console.log(existingInternalTimer);
*/

//console.log(part1(input));
