const fs = require("fs");
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, "/example.txt"), { encoding: "utf8" }).split("\n");

console.log(input);