const fs = require("fs");
const path = require("path");

const parseEnergyLevels = input => input.map(line => line.match(/\d/g).map(n => Number(n)));

const testcase = fs.readFileSync(path.join(__dirname, "/example.txt"), { encoding: "utf8" }).split("\n");
const input = fs.readFileSync(path.join(__dirname, "/input.txt"), { encoding: "utf8" }).split("\n");

const adjacent = (x, y, levels) => {
    let array = levels;

    //Loop adjacent
    for (dx = -1; dx <= 1; ++dx) {
        for (dy = -1; dy <= 1; ++dy) {
            if (array?.[x + dx]?.[y + dy] !== undefined && array?.[x + dx]?.[y + dy] !== 0) {
                array[x + dx][y + dy] = array[x + dx][y + dy] + 1;
            }
        }
    }

    return levels;

    let arr = [
        levels?.[x - 1]?.[y],
        levels?.[x + 1]?.[y],
        levels?.[x]?.[y - 1],
        levels?.[x]?.[y + 1],
        levels?.[x - 1]?.[y - 1], //Dialogical
        levels?.[x - 1]?.[y + 1],
        levels?.[x + 1]?.[y + 1],
        levels?.[x + 1]?.[y - 1]
    ];

    return arr.filter(n => n !== undefined);
}

const increaseEnergy = levels => levels.map(row => row.map(column => column + 1));


//TODO increases the energy level of all adjacent octopuses by 1 after flash
const foo = (levels) => {
    let flash = false;
    let x, y;

    levels = levels.map((row, i) => {
        return row.map((level, j) => {
            if (level > 9 && flash == false) {
                flash = true;
                console.log("Called!")
                x = i;
                y = j;
                return 0;
            } else {
                return level;
            }
        });
    });

    if (flash == true) {
        levels = adjacent(x, y, levels);
    }


    return flash == true ? foo(levels) : levels; //Recursive call
}

const part1 = (input) => {
    let flashes = 0;

    console.log(input?.[0][0]);
    console.log(input?.[-1]?.[0]);

    return input;
}

let energyLevels = parseEnergyLevels(testcase);

//console.log(part1(parseEnergyLevels(testcase)));

console.log("---DEBUG---");
//console.log(adjacent(0, 0, energyLevels));
//console.log(energyLevels);
//console.log("After:");
//console.log(increaseEnergy(energyLevels));
console.log("Before any steps:");
console.log(foo(energyLevels));
console.log("Increase energy by one:");
energyLevels = increaseEnergy(energyLevels);
console.log(foo(energyLevels));

