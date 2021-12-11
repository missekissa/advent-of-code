const fs = require("fs");
const path = require("path");

const parseEnergyLevels = input => input.map(line => line.match(/\d/g).map(n => Number(n)));

const input = fs.readFileSync(path.join(__dirname, "/input.txt"), { encoding: "utf8" }).split("\n");

const adjacent = (x, y, levels) => {
    let array = levels;

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

const flashes = (levels, count) => { 
    let flash = false, x, y;
   
    levels = levels.map((row, i) => {
        return row.map((column, j) => {
            if (column > 9 && flash == false) {
                flash = true;
                count++;
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

    return flash == true ? flashes(levels, count) : [levels, count]; //recursion
}

const part1 = input => {
    let count = 0;
    let energyLevels = input;
    for (let i = 0; i < 100; i++) {
        energyLevels = increaseEnergy(energyLevels);
        [energyLevels, count] = flashes(energyLevels, count);
    }

    return count;
}

const part2 = input => {
    let count = 0;
    let energyLevels = input;
    let steps = 0;
    let simultaneously = false;

    do {
        energyLevels = increaseEnergy(energyLevels);
        [energyLevels, count] = flashes(energyLevels, count);

        steps++;
        let allzeroes = true;
        energyLevels.forEach(row =>
            row.forEach(column => {
                if (column !== 0)
                    allzeroes = false;
            })
        );

        if (allzeroes == true)
            simultaneously = true;
    } while (simultaneously == false)

    return steps;
}

const initialLevels = parseEnergyLevels(input);

console.log(part1(initialLevels));
console.log(part2(initialLevels));