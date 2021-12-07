const fs = require("fs");
const path = require('path');

let input = fs.readFileSync(path.join(__dirname, "/input.txt"), { encoding: "utf8" }).split("\n");

const createEntry = (line) => {
    let array = line.match(/\d+/g).map(n => Number(n));
    return {
        x1: array[0],
        y1: array[1],
        x2: array[2],
        y2: array[3]
    }
}

//Return array of cover points of entry
const createCoverPoints = (obj, diagonal) => {
    let result = [];

    if (obj["x1"] === obj["x2"]) {
        let max = Math.max(obj["y1"], obj["y2"]);
        let min = Math.min(obj["y1"], obj["y2"]);
        for (min; min <= max; min++) {
            result.push({
                x: obj["x1"],
                y: min
            })
        }
        return result;
    }
    else if (obj["y1"] === obj["y2"]) {
        let max = Math.max(obj["x1"], obj["x2"]);
        let min = Math.min(obj["x1"], obj["x2"]);
        for (max; min <= max; max--) {
            result.push({
                x: max,
                y: obj["y1"]
            })
        }
        return result;
    }
    else if (diagonal == true) {
        if (obj["x1"] == obj["y1"] && obj["x2"] == obj["y2"]) {
            //console.log("FOUND!");
            let max = Math.max(obj["x1"], obj["x2"]);
            let min = Math.min(obj["y1"], obj["y2"]);
            for (min; min <= max; min++) {
                result.push({
                    x: min,
                    y: min
                })
            }
            return result;
        }
        //9,7 -> 7,9
        else if (obj["x1"] == obj["y2"] && obj["y1"] == obj["x2"]) {
            let max = Math.max(obj["x1"], obj["x2"]);
            let min = Math.min(obj["x1"], obj["x2"]);
            for (let i = 0; i <= max - min; i++) {
                result.push({
                    x: max - i,
                    y: min + i
                })
            }
            return result;
        }
    }
}

const calculateOverlap = (coverPoints) => {

    const counts = {};

    coverPoints.forEach((x) =>
        counts[Object.entries(x)] = (counts[Object.entries(x)] || 0) + 1
    );

    let result = 0;
    Object.values(counts).forEach(n => n > 1 ? result++ : 0);
    return result;

}

const part1 = (input) => {
    filtered = input.filter(obj => obj["x1"] === obj["x2"] || obj["y1"] === obj["y2"]);

    let coverPoints = filtered.map(entry => createCoverPoints(entry, false)).flat();

    return calculateOverlap(coverPoints);
}

const part2 = (input) => {

    filtered = input.filter(
        obj => obj["x1"] === obj["x2"] || obj["y1"] === obj["y2"] || obj["x1"] === obj["y1"] && obj["x2"] === obj["y2"] || obj["x1"] === obj["y2"] && obj["y1"] === obj["x2"]);
    let coverPoints = filtered.map(entry => createCoverPoints(entry, true)).flat();

    return calculateOverlap(coverPoints);
}

const entries = input.map(line => createEntry(line));

console.log(part1(entries));
console.log(part2(entries));


module.exports = {
    createEntry,
    createCoverPoints,
    calculateOverlap,
    part1,
    part2
}