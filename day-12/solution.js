const fs = require("fs");
const path = require("path");

const example1 = fs.readFileSync(path.join(__dirname, "/first-example.txt"), { encoding: "utf8" }).split("\n");

const createGraph = input => {
    const graph = new Map();

    for (line of input) {
        [cave, connectedToCave] = line.match(/[A-Za-z]+/g);

        if (!graph.has(cave))
            graph.set(cave, [connectedToCave]);
        else
            graph.get(cave).push(connectedToCave);
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

