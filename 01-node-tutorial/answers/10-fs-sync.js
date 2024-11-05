const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first);
console.log(second);

const text = "Hey, let's start coding!";
writeFileSync(
  "./temporary/fileA.txt",
  `Here is the result text: ${first}\n ${second}\n ${text}\n`,
  { flag: "a" }
);

const textFromFileA = readFileSync("./temporary/fileA.txt", "utf8");
console.log(`FileA text:\n ${textFromFileA}`);

console.log("end");
