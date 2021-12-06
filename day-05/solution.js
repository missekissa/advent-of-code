const fs = require("fs");

let input = fs.readFileSync("./example.txt", { encoding: "utf8" }).split("\n");
//let input = fs.readFileSync("./day-05/example.txt", { encoding: "utf8" }).split("\n");
//let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split("\n");

//let input = fs.readFileSync("./test.txt", { encoding: "utf8" }).split("\n");

//console.log(input);

const createEntry = (line) => {
    let array = line.match(/\d+/g).map(n => Number(n));
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

//Return array of cover points of entry
const createCoverPoints = (obj) => {
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
    };

    if (obj["y1"] === obj["y2"]) {
        let max = Math.max(obj["x1"], obj["x2"]);
        let min = Math.min(obj["x1"], obj["x2"]);
        for (max; min <= max; max--) {
            result.push({
                x: max,
                y: obj["y1"]
            })
        }
        return result;
    };
}

const Diagnonal = (obj) => {


    console.log("Dialog Func called!");
    //console.log(obj);
    let result = [];

    //1,1 -> 3,3
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
        //return result;
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
        //return result;
    }

    //1,1 -> 1,3
    else if (obj["x1"] == obj["x2"]) {
        let max = Math.max(obj["y1"], obj["y2"]);
        let min = Math.min(obj["y1"], obj["y2"]);
        for (min; min <= max; min++) {
            result.push({
                x: obj["x1"],
                y: min
            })
        }
        // return result;
    }

    //9,7 -> 7,7
    else if (obj["y1"] == obj["y2"]) {
        //console.log("FOUND!");
        let max = Math.max(obj["x1"], obj["x2"]);
        let min = Math.min(obj["x1"], obj["x2"]);
        for (max; min <= max; max--) {
            result.push({
                x: max,
                y: obj["y1"]
            })
        }
        // return result;
    };


    

    return result;

}



const foo = (coverPoints) => {
    //console.log(coverPoints);
    //ToDO find Duplicate values!
    console.log("Lenghts is:");
    console.log(coverPoints.length);
    //let test = coverPoints.map(entry => entry.values(entry).join(""));

    //ATTEMP 5
    const counts = {};

    coverPoints.forEach((x) =>
        counts[Object.entries(x)] = (counts[Object.entries(x)] || 0) + 1
    );
    console.log(counts);

    let result = 0;
    Object.values(counts).forEach(n => n > 1 ? result++ : 0);
    return result;
    //return counts;
    //let test = coverPoints.map(entry => [entry["x"], entry["y"]].join(":"));
    // console.log("Test is:")


    /*
    let unique = [...new Set(test)];
    /* ATTEMPT 4
    
    console.log(test.length);
    console.log(unique.length);

    return test.length - unique.length;
    */
    /*
    //ATTEMPT 3
    const counts = {};
    
    test.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    //console.log(counts)
    //console.log(counts)

    let result = 0;
    Object.values(counts).forEach(n => n == 2 ? result++: 0);

    
    //console.log(result);
    return result;
    */

    /*ATTEMPT 2
    console.log("Get duplicates:")
    let dup = test.filter((c, index) => {
        return test.indexOf(c) !== index;
    });

    console.log(dup);
    console.log("Count is:");
    console.log(dup.length);

    return dup.length;

    */
    //coverPoints.foreach(entry => console.log(entry));


    //console.log(test);
    //const unique = [...new Map(coverPoints.map(item => [item[key ], item])).values()]
    //console.log(unique.length);
    /*
    let xArray = coverPoints.map(x => x["x"]);
    let yArray = coverPoints.map(y => y["y"]);
    
    let X = Math.max(...xArray);
    let Y = Math.max(...yArray);

    //console.log(xArray);
    console.log(X);
    console.log(Y); */

    //let dia = new Array(Y).fill(0);

}


const part1 = (input) => {
    console.log(input);
    //console.log(input[400]);
    console.log(input.length);
    filtered = input.filter(obj => obj["x1"] === obj["x2"] || obj["y1"] === obj["y2"]);

    console.log(filtered.length);
    let coverPoints = filtered.map(entry => createCoverPoints(entry)).flat();


    //console.log(filtered.length);
    //console.log(input[0]["x2"]); //9
    //return createEntry(input[0]);
    //return coverPoints;
    //console.log(coverPoints);
    return foo(coverPoints);
    //return foo(coverPoints);
}

const part2 = (input) => {
    //console.log(input[400]);
    console.log("Part2:")
    console.log(input.length);
    console.log(input);

    //filtered = input.filter(obj => obj["x1"] === obj["x2"] || obj["y1"] === obj["y2"]);
    filtered = input.filter(
        obj => obj["x1"] === obj["x2"] || obj["y1"] === obj["y2"] || obj["x1"] === obj["y1"] && obj["x2"] === obj["y2"] || obj["x1"] === obj["y2"] && obj["y1"] === obj["x2"]);

    //console.log(filtered.length);
    let coverPoints = filtered.map(entry => Diagnonal(entry)).flat();

    //console.log(coverPoints.length);
    console.log(coverPoints);

   // coverPoints = coverPoints.filter(x => x !== undefined);

    //console.log(coverPoints.length);
    console.log(coverPoints);


    //console.log(filtered.length);
    //console.log(input[0]["x2"]); //9
    //return createEntry(input[0]);
    //return coverPoints;
    //console.log(coverPoints);
    return foo(coverPoints);
    //return foo(coverPoints);
}


const entries = input.map(line => createEntry(line));
//console.log(part1(entries));;
console.log(part2(entries));;


console.log("----DEBUG----");

let testEntry1 = {
    x1: 9,
    y1: 7,
    x2: 7,
    y2: 9
}

let testEntry2 = {
    x1: 7,
    y1: 9,
    x2: 9,
    y2: 7
}


let testEntry3 = {
    x1: 1,
    y1: 1,
    x2: 3,
    y2: 3
}

let testEntry4 = {
    x1: 3,
    y1: 3,
    x2: 1,
    y2: 1
}

//console.log(Diagnonal(testEntry3));
//console.log(Diagnonal(testEntry4));
console.log(Diagnonal(testEntry1));
console.log(Diagnonal(testEntry2));


/*
let testEntry1 = {
    x1: 1,
    y1: 1,
    x2: 1,
    y2: 3
}

let testEntry2 = {
    x1: 9,
    y1: 7,
    x2: 7,
    y2: 7
}

console.log(testEntry1);
console.log(createCoverPoints(testEntry1));
console.log("\n");
console.log(testEntry1);
console.log(createCoverPoints(testEntry2));
 */

module.exports = {
    createEntry,
    createCoverPoints,
    foo,
    part1
}