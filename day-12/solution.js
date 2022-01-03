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

let graph = createGraph(example1);

const dfs = (graph, start = "start", visited = new Set()) =>{
    visited.add(start);
    const destinations = graph.get(start);
    
    for (destination of destinations) {
        if (destination == "end") {
            console.log("Found the end!");
            return;
        }

        if (!visited.has(destination)) {
            dfs(graph, destination, visited);
        }
    }

    return visited;
}


const part1 = () => {

}

console.log("--DEBUG--");
console.log(example1);
console.log("Graph: ");
//let graph = createGraph(example1)
console.log(graph);

console.log("dfs:")
console.log(dfs(graph));
