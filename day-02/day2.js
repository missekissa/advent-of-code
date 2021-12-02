const fs = require("fs");

let input = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split('\n');

//match returns array
let forward = input.filter(command => command.includes("forward")).map(line => line.match( /\d+/)[0]).map(n => Number(n));
let down = input.filter(command => command.includes("down")).map(line => line.match( /\d+/)[0]).map(n => Number(n));
let up = input.filter(command => command.includes("up")).map(line => line.match( /\d+/)[0]).map(n => Number(n));

const part1 = () => {
    const forward_sum = forward.reduce((previousValue, currentValue) => previousValue + currentValue);
    const down_sum = down.reduce((previousValue, currentValue) => previousValue + currentValue);
    const up_sum = up.reduce((previousValue, currentValue) => previousValue + currentValue);

    return forward_sum * (down_sum - up_sum);

    //console.log(forward_sum * );
}
console.log(part1());

//forward = forward.map(line => line.replace( /^\D+/g, ''));
//forward = forward.map(line => line.match( /\d+/)[0]).map(n => Number(n));


// console.log(input);

// console.log(forward);
// //part1();
// console.log(down);
// console.log(up);
