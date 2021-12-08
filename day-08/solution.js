const fs = require("fs");
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, "/input.txt"), { encoding: "utf8" }).split("\n");

const part1 = (input) => {
    let output = input.map(line => line.split("| ")[1].split(" ")).flat();
    let count = 0;

    output.forEach(x => x.length == 2 || x.length == 4 || x.length == 3 || x.length == 7 ? count++ : 0);

    return count;
}

console.log(part1(input));
