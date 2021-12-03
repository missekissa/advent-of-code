const fs = require("fs");

let input = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split('\n');
//let input = fs.readFileSync('./example.txt', { encoding: 'utf8' }).split('\n');
input.pop();
console.log("Last elements is: "+ input[input.length-1]);

const part1 = () => {
    //match returns array
    let forward = input.filter(command => command.includes("forward")).map(line => line.match( /\d+/)[0]).map(n => Number(n));
    let up = input.filter(command => command.includes("up")).map(line => line.match( /\d+/)[0]).map(n => Number(n));
    let down = input.filter(command => command.includes("down")).map(line => line.match( /\d+/)[0]).map(n => Number(n));
    
    const forward_sum = forward.reduce((previousValue, currentValue) => previousValue + currentValue);
    const down_sum = down.reduce((previousValue, currentValue) => previousValue + currentValue);
    const up_sum = up.reduce((previousValue, currentValue) => previousValue + currentValue);
    
    return forward_sum * (down_sum - up_sum);
    
    //console.log(forward_sum * );
}

const part2 = () => {
    let aim = 0;
    let horizontal = 0;
    let depth = 0;
    
    //Parses the value from the line
    const value = line => Number(line.match(/\d+/)[0]);

    const forward = f => {
        horizontal += f;
        depth += f * aim;
    }

    const downUp = line => line.includes("down") ? aim += value(line) : aim -= value(line); 
    
    //console.log(value("forward 5"))
    input.forEach(line => line.includes("forward") ? forward(value(line)): downUp(line));
    return horizontal * depth;
}

console.log(part1());
console.log(part2());

//forward = forward.map(line => line.replace( /^\D+/g, ''));
//forward = forward.map(line => line.match( /\d+/)[0]).map(n => Number(n));



// console.log(forward);
// //part1();
// console.log(down);
// console.log(up);
