const fs = require("fs");

let input = fs.readFileSync("./example.txt", { encoding: "utf8" }).split("\n");
//let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split("\n");

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

    if (obj["x1"] == obj["x2"]) {
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

    if (obj["y1"] == obj["y2"]) {
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

const foo = (coverPoints) => {
    //console.log(coverPoints);
    //ToDO find Duplicate values!
    // console.log("Lenghts is:");
    // console.log(coverPoints.length);
    //let test = coverPoints.map(entry => entry.values(entry).join(""));

    let test = coverPoints.map(entry => [entry["x"], entry["y"]].join(":"));
    // console.log("Test is:")
    
    /* ATTEMPT 4
    let unique = [...new Set(test)];
    
    console.log(test.length);
    console.log(unique.length);

    return test.length - unique.length;
    */

    //ATTEMPT 3
    const counts = {};
    
    test.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    //console.log(counts)
    console.log(counts)

    let result = 0;
    Object.values(counts).forEach(n => n > 1 ? result++: 0);
    //console.log(result);
    return result;
    

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

    /*Bad idea
    //One liner to create array.
    let dia = Array.from(Array(Y), () => new Array(X).fill(0));

    coverPoints.forEach(element => {
        let x = element["x"];
        console.log("x is:")
        console.log(x);
        let y = element["y"];
        dia[x][y] = 1;
        console.log(dia);
        //let value = dia[x][y]

        
    });

    //console.log(dia);
    return dia; */
}

//console.log(input);

const part1 = (input) => {
    filtered = input.filter(obj => obj["x1"] == obj["x2"] || obj["y1"] == obj["y2"]);
    let coverPoints = filtered.map(entry => createCoverPoints(entry)).flat();



    //console.log(filtered.length);
    //console.log(input[0]["x2"]); //9
    //return createEntry(input[0]);
    //return coverPoints;
    //console.log(coverPoints);
    return foo(coverPoints);
    //return foo(coverPoints);
}


const entries = input.map(line => createEntry(line));
console.log(part1(entries));;

/*
console.log("----DEBUG----");

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