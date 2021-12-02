const fs = require("fs");

let input = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split('\n').map(n => Number(n));

//Remove the whitespace from the end
input.pop();

const current = input.slice(1);
const previous = input.slice(0, -1);

const part1 = () => {
    let count = 0;

    current.map((element, i) => element > previous[i] ? count++ : count);

    return count;

}

const part2 = () => {
    let count = 0;
}



/*
const current = input.slice(1);
const previous = input.slice(0, -1);
let count = 0;

current.map((element, i) => element > previous[i] ? count++ : count); */

console.log(part1());
