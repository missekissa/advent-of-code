const fs = require("fs");

let input = fs.readFileSync("./example.txt", { encoding: "utf8" }).split("\n");
//let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split("\n");

const createEntry = (line) => {
    let array = line.match( /\d+/g);
    //let array = [...line.matchAll(/\d+/g)];
    //console.log(array);
    return {
        x1: array[0],
        y1: array[1],
        x2: array[2],
        y2: array[3]
    }
    /*
    console.log(array[0][0]);
    console.log(array[1][0]);
    console.log(array[2][0]);
    console.log(array[3][0]); */

}

const foo = (obj) => {
    if (obj["x1"] == obj["x2"]) {
        let max = Math.max(obj["y1"], obj["y2"]);
        let min = Math.min(obj["y1"], obj["y2"]);

    };
}


//console.log(input);

const part1 = (input) => {
    filtered = input.filter(obj => obj["x1"] == obj["x2"] || obj["y1"] == obj["y2"]);

    console.log(filtered.length);
    //console.log(input[0]["x2"]); //9
    //return createEntry(input[0]);
    return filtered;
}


const entries = input.map(line => createEntry(line));
console.log(part1(entries));;
