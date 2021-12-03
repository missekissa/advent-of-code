const fs = require("fs");

let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split("\n").map(line => line.replace("\r", ""));

//Returns most common bit in the corresponding position
const mostCommonBit = (position, array) => {
        let zero = 0;
        let one = 0;
        array.forEach(line => line[position] == "0" ? zero++ : one++);
        return zero > one ? "0" : "1";
    }

//Returns least common bit in the corresponding position
const leastCommonBit = (position, array) => mostCommonBit(position, array) == "0" ? "1" : "0";

const part1 = input => {

    const gammaRate = () => {
        let gamma = "";
        for (let i = 0; i < input[0].length; i++) {
            gamma += mostCommonBit(i, input);
        }
        return gamma;
    }

    const epsilonRate = () => {
        let epsilon = "";
        for (let i = 0; i < input[0].length; i++) {
            epsilon += leastCommonBit(i, input);
        }
        return epsilon;
    }

    return parseInt(gammaRate(), 2) * parseInt(epsilonRate(), 2);

};

const part2 = input => {

    //Returns numbers with the most common value in the corresponding position
    const filterByMostCommon = (position, array) => array.filter(x => x[position] == mostCommonBit(position, array));

    //Returns numbers with the least common value in the corresponding position
    const filterByLeastCommon = (position, array) => array.filter(x => x[position] == leastCommonBit(position, array));

    const generatorRating = input => {
        let array = input;

        for (let i = 0; i < input[0].length; i++) {
            if (array.length > 1) 
                array = filterByMostCommon(i, array);               
        }

        return array;
    }

    const scrubberRating = input => {
        let array = input;

        for (let i = 0; i < input[0].length; i++) {
            if (array.length > 1) 
                array = filterByLeastCommon(i, array);               
        }
        return array;
    }

    return parseInt(generatorRating(input), 2) * parseInt(scrubberRating(input), 2);
   
};

console.log(part1(input));
console.log(part2(input));


