const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "/input.txt"), { encoding: "utf8" }).split("\n");

const chunks = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">"
}

const part1 = input => {

    const points = {
        ")": 3,
        "]": 57,
        "}": 1197,
        ">": 25137
    }

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

const part2 = input => {
    let scores = [];

    const points = {
        ")": 1,
        "]": 2,
        "}": 3,
        ">": 4
    }

    input.forEach(line => {
        let corrupted = false;
        let stack = [];
        let score = 0;
        for (character of line) {
            if (chunks.hasOwnProperty(character))
                stack.push(chunks[character]);
            else if (stack.pop() != character)
                corrupted = true;
        }
        if (corrupted == false) {
            for (character of stack.reverse()) {
                score = score * 5 + points[character];
            }
            scores.push(score);
        }
    });

    scores = scores.sort(function (a, b) {
        return a - b;
    });

    return scores[Math.floor((scores.length - 1) / 2)];
}

console.log(part1(input));
console.log(part2(input));