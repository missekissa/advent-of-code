const fs = require("fs");
const path = require("path");

const testcase = fs.readFileSync(path.join(__dirname, "/example.txt"), { encoding: "utf8" }).split("\n");
const input = fs.readFileSync(path.join(__dirname, "/input.txt"), { encoding: "utf8" }).split("\n");

const chunks = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">"
}

const points = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137
}

const part1 = input => {
    let score = 0;

    input.forEach(line => {
        let stack = [];
        for (character of line) {
            if (chunks.hasOwnProperty(character))
                stack.push(chunks[character]);
            else if (stack.pop() != character)
                score += points[character];

        }
    });

    return score;
}

console.log(part1(input));