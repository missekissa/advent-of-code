const fs = require("fs");
const path = require("path");

const testcase = fs.readFileSync(path.join(__dirname, "/example.txt"), { encoding: "utf8" }).split("\n");
const input = fs.readFileSync(path.join(__dirname, "/input.txt"), { encoding: "utf8" }).split("\n");

const parseHeightmap = input => input.map(line => line.match(/\d/g).map(n => Number(n)));

const getAdjacent = (y, x, arr) => {
    let adjacent = [];
    let maxY = arr.length - 1;
    let maxX = arr[0].length - 1;

    y > 0 ? adjacent.push(arr[y - 1][x]) : 0; //Top
    y < maxY ? adjacent.push(arr[y + 1][x]) : 0; //Bottom
    x > 0 ? adjacent.push(arr[y][x - 1]) : 0; //Left
    x < maxX ? adjacent.push(arr[y][x + 1]) : 0; //Right

    return adjacent;
}

const part1 = input => {
    let heightmap = parseHeightmap(input);

    let riskLevels = heightmap.map((row, i) =>
        row.filter((column, j) => getAdjacent(i, j, heightmap).every(x => column < x)))
        .flat()
        .map(n => n + 1);

    return riskLevels.reduce((p, c) => p + c);
}

console.log(part1(testcase));
console.log(part1(input));