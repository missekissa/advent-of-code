const fs = require("fs");

//let testcase = fs.readFileSync("./example.txt", { encoding: "utf8" }).split("\n");
let testcase = fs.readFileSync("./day-05/example.txt", { encoding: "utf8" }).split("\n");

const { createEntry, createCoverPoints, foo, part1 } = require("./solution.js");

const entries = testcase.map(line => createEntry(line));

const testLine1 = "1,1 -> 1,3";
const testLine2 = "9,7 -> 7,7";

const testEntry1 = { x1: 1, y1: 1, x2: 1, y2: 3 };
test("An entry like 1,1 -> 1,3 covers points 1,1, 1,2, and 1,3", () => {
    expect(createCoverPoints(testEntry1)).toEqual(
        [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }]
    )
});

const testEntry2 = { x1: 9, y1: 7, x2: 7, y2: 7 };
test("An entry like 9,7 -> 7,7 covers points 9,7, 8,7, and 7,7", () => {
    expect(createCoverPoints(testEntry2)).toEqual(
        [{ x: 9, y: 7 }, { x: 8, y: 7 }, { x: 7, y: 7 }]
    )
});


/*
test("Answer is 5", () => {
    expect(part1(entries)).toBe(5);
}); */

//const solution = require("./solution.js");

