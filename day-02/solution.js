const fs = require("fs");

let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split("\n");

const part1 = () => {
    let forward = input.filter(command => command.includes("forward")).map(line => line.match( /\d+/)[0]).map(n => Number(n));
    let up = input.filter(command => command.includes("up")).map(line => line.match( /\d+/)[0]).map(n => Number(n));
    let down = input.filter(command => command.includes("down")).map(line => line.match( /\d+/)[0]).map(n => Number(n));
    
    const forward_sum = forward.reduce((previousValue, currentValue) => previousValue + currentValue);
    const down_sum = down.reduce((previousValue, currentValue) => previousValue + currentValue);
    const up_sum = up.reduce((previousValue, currentValue) => previousValue + currentValue);
    
    return forward_sum * (down_sum - up_sum);
    
}

const part2 = () => {
    let aim = 0;
    let horizontal = 0;
    let depth = 0;
    
    //Parses the number from the line
    const value = line => Number(line.match(/\d+/)[0]);

    const forward = f => {
        horizontal += f;
        depth += f * aim;
    }

    const downUp = line => line.includes("down") ? aim += value(line) : aim -= value(line); 
    
    input.forEach(line => line.includes("forward") ? forward(value(line)): downUp(line));
    return horizontal * depth;
}

console.log(part1());
console.log(part2());
