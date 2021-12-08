const fs = require("fs");
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, "/input.txt"), { encoding: "utf8" }).split("\n");

const part1 = input => {
    let output = input.map(line => line.split("| ")[1].split(" ")).flat();
    let count = 0;

    output.forEach(x => x.length == 2 || x.length == 4 || x.length == 3 || x.length == 7 ? count++ : 0);
    return count;
}

const convertToDigits = input => {
    const four = input.split("| ")[0].split(" ").find(x => x.length == 4);
    const one = input.split("| ")[0].split(" ").find(x => x.length == 2);
    const nine = input.split("| ")[0].split(" ").find(x => x.length == 6 && [...four].every(c => x.includes(c)));

    const pattern = input.split("| ")[1].split(" ");

    let result = pattern.map(entry => {
        switch (entry.length) {
            case 2:
                return 1;
            case 4:
                return 4;
            case 3:
                return 7;
            case 7:
                return 8;
            case 6:
                if ([...four].every(c => entry.includes(c))) {
                    return 9;
                } else if ([...one].every(c => entry.includes(c))) {
                    return 0;
                } else {
                    return 6;
                }
            case 5:
                if ([...one].every(c => entry.includes(c))) {
                    return 3;
                } else if ([...entry].every(c => nine.includes(c))) {
                    return 5;
                } else {
                    return 2;
                }
        }
    })
    return result;
}

const part2 = input => {
    let output = input.map(line => convertToDigits(line));
    output = output.map(line => line.join("")).map(n => Number(n)).reduce((p, c) => p + c);  
    return output;
}

console.log(part1(input));
console.log(part2(input));