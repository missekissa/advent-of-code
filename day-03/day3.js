const fs = require("fs");

let input = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split('\n').map(line => line.replace("\r", ""));

console.log(input);

console.log(input[0]);

const part1 = () => {
    //let gammeRate = "";
    //let epsilonRate = "";

    const mostCommonBit = position => {
        let zero = 0;
        let one = 0;
        input.forEach(line => line[position] == "0" ? zero++ : one++);
        return zero >= one ? "0" : "1";
    }

    const leastCommonBit = position => mostCommonBit(position) == "0" ? "1" : "0";

    const gammaRate = () => {
        let gamma = "";
        for (let i = 0; i < input[0].length; i++) {
            gamma += mostCommonBit(i);
        }
        return gamma;
    }

    const epsilonRate = () => {
        let epsilon = "";
        for (let i = 0; i < input[0].length; i++) {
            epsilon += leastCommonBit(i);
        }
        return epsilon;
    }

    let gamma = gammaRate();
    let epsilon = epsilonRate();
    //console.log(mostCommonBit(0));
   // console.log(leastCommonBit(0));
    console.log("Gamma rate is: " + gamma);
    console.log("Epsilon rate is: " + epsilon);

    //Convert binary string to number
    gamma = parseInt(gamma, 2);
    epsilon = parseInt(epsilon, 2);

    console.log(gamma);
    console.log(epsilon);

    return gamma * epsilon

    //console.log(mostCommonBit(1));
}

console.log(part1());

