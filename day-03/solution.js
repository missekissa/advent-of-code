const fs = require("fs");

let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split("\n").map(line => line.replace("\r", ""));

console.log(input);

//console.log(input[0]);

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
    //let gammeRate = "";
    //let epsilonRate = "";

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
            
            console.log("Loop " + i + " "+array);
        }

        return array;
    }

    const scrubberRating = input => {
        let array = input;

        for (let i = 0; i < input[0].length; i++) {
            if (array.length > 1) 
                array = filterByLeastCommon(i, array);   
            
            console.log("Loop " + i + " "+array);
        }

        return array;
    }



    let test1 = mostCommonBit(0, input);
    console.log(test1);

    return parseInt(generatorRating(input), 2) * parseInt(scrubberRating(input), 2);
    //return filterByMostCommon(0, input);

    //return input.filter(x => x[0] == test1);

    /*
    const generatorCriteria = (position, array) => {
        
        //let bit = mostCommonBit(position, array);
        //return array.filter(x => x[position] == bit);
        //array.filter(x => x)

    }
    console.log(generatorCriteria(0, input)); */
};

//console.log("Part 1 answer is: " + part1(input));
console.log("debug:")
console.log(part2(input));


