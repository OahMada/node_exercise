var {readFileSync, writeFileSync, } = require("fs");
console.log("start");
var first = readFileSync("./content/first.txt", "utf8");
var second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  {flag: "a"}
);
console.log("done with the task");
console.log("starting the next one");