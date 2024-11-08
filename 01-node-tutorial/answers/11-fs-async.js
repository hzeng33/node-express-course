const { readFile, writeFile } = require("fs");
/**
 readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("There is an error: ", err);
    return;
  }
  console.log(result);
});
 */

console.log("at start");
writeFile("./temporary/fileB.txt", "This is line 1.\n", (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
    return;
  }
  console.log(result);
  writeFile(
    "./temporary/fileB.txt",
    "This is line 2.\n",
    { flag: "a" },
    (err, result) => {
      console.log("at point 2");
      if (err) {
        console.log("This error happened: ", err);
        return;
      }
      console.log(result);
      writeFile(
        "./temporary/fileB.txt",
        "This is line 3.\n",
        { flag: "a" },
        (err, result) => {
          console.log("at point 3");
          if (err) {
            console.log("This error happened: ", err);
            return;
          }

          console.log("All 3 lines written successfully!");
        }
      );
    }
  );
});
console.log("at end");
