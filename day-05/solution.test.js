const fs = require("fs");
const path = require('path');

const testcase = fs.readFileSync(path.join(__dirname, "/example.txt"), { encoding: "utf8" }).split("\n");

const { createEntry, createCoverPoints, part1, part2 } = require("./solution.js");

const entries = testcase.map(line => createEntry(line));

const testLine1 = "1,1 -> 1,3";
const testEntry1 = { x1: 1, y1: 1, x2: 1, y2: 3 };

test("Format is x1,y1 -> x2,y2", () => {
    expect(createEntry(testLine1)).toEqual(testEntry1)
});

const coversPoints1 = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }];
test("An entry like 1,1 -> 1,3 covers points 1,1, 1,2, and 1,3", () => {
    expect(createCoverPoints(testEntry1, false)).toEqual(coversPoints1)
});

const testEntry2 = { x1: 9, y1: 7, x2: 7, y2: 7 };
const coversPoints2 = [{ x: 9, y: 7 }, { x: 8, y: 7 }, { x: 7, y: 7 }];

test("An entry like 9,7 -> 7,7 covers points 9,7, 8,7, and 7,7", () => {
    expect(createCoverPoints(testEntry2, false)).toEqual(coversPoints2)
});

test("Part 1: The number of points where at least two lines overlap is 5", () => {
    expect(part1(entries)).toBe(5);
});

const testEntry3 = { x1: 1, y1: 1, x2: 3, y2: 3 };
const coversPoints3 = [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }];

test("An entry like 1,1 -> 3,3 covers points 1,1, 2,2, and 3,3", () => {
    expect(createCoverPoints(testEntry3, true)).toEqual(coversPoints3)
});

const testEntry4 = { x1: 9, y1: 7, x2: 7, y2: 9 };
const coversPoints4 = [{ x: 9, y: 7 }, { x: 8, y: 8 }, { x: 7, y: 9 }];
test("An entry like 9,7 -> 7,9 covers points 9,7, 8,8, and 7,9", () => {
    expect(createCoverPoints(testEntry4, true)).toEqual(coversPoints4)
});

test("Part 2: The number of points where at least two lines overlap is 12", () => {
    expect(part2(entries)).toBe(12);
});
