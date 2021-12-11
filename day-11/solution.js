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
}

const increaseEnergy = levels => levels.map(row => row.map(column => column + 1));

const foo = (levels, count) => {
    let flash = false;
    let num = count;
    let x, y;

    levels = levels.map((row, i) => {
        return row.map((column, j) => {
            if (column > 9 && flash == false) {
                flash = true;
                num+=1;
                //console.log("Called!")
                x = i;
                y = j;
                return 0;
            } else {
                return column;
            }
        });
    });

    if (flash == true) {
        levels = adjacent(x, y, levels);
    }

    return flash == true ? foo(levels, num): [levels, num]; //Recursive call
}

const part1 = (input) => {
    let count = 0;
    let energyLevels = input;
    for (let i = 0; i < 100; i++) {
        energyLevels = increaseEnergy(energyLevels);
        [energyLevels, count] = foo(energyLevels, count);
    }

    return count;
}

let energyLevels = parseEnergyLevels(testcase);

let initialLevels = parseEnergyLevels(input);

//console.log(part1(parseEnergyLevels(testcase)));

console.log(part1(initialLevels));
/*
console.log("---DEBUG---");
//console.log(adjacent(0, 0, energyLevels));
//console.log(energyLevels);
//console.log("After:");
//console.log(increaseEnergy(energyLevels));
console.log("Before any steps:");
console.log(energyLevels);

console.log("After step 1:");
energyLevels = increaseEnergy(energyLevels);
energyLevels = foo(energyLevels);
console.log(energyLevels);

console.log("After step 2:");
energyLevels = increaseEnergy(energyLevels);
energyLevels = foo(energyLevels);
console.log(foo(energyLevels));
*/