var { readFile, writeFile, } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  var first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    var second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      { flag: "a" },
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    )
  })
});
console.log("starting next task");