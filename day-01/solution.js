const fs = require("fs");

let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split('\n').map(n => Number(n));

const part1 = (input) => {
    const current = input.slice(1);
    const previous = input.slice(0, -1);
    let count = 0;

    current.forEach((element, i) => element > previous[i] ? count++ : count);

    return count;
}

const part2 = (input) => {
    let count = 0, current, previous;
    
    for (let i = 1; i < input.length - 2; i++) {
        current = input.slice(i, i + 3).reduce((previousValue, currentValue) => previousValue + currentValue);
        previous = input.slice(i - 1, i - 1 + 3).reduce((previousValue, currentValue) => previousValue + currentValue);
        current > previous ? count++ : 0;
    }
    return count;
}

console.log(part1(input));
console.log(part2(input));