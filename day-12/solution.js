const fs = require("fs");
const path = require("path");

const example1 = fs.readFileSync(path.join(__dirname, "/first-example.txt"), { encoding: "utf8" }).split("\n");

const createGraph = input => {
    const graph = new Map();

    for (line of input) {
        [caveA, caveB] = line.match(/[A-Za-z]+/g);

        if (!graph.has(caveA))
            graph.set(caveA, [caveB]);
        else
            graph.get(caveA).push(caveB);

        if (!graph.has(caveB))
            graph.set(caveB, [caveA]);
        else
            graph.get(caveB).push(caveA);

    }
    return graph;
}

const part1 = () => {

}

console.log("--DEBUG--");
console.log(example1);
console.log("Grap: ");
let grap = createGraph(example1)
console.log(grap);

