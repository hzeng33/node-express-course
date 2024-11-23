const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "This is the beginning of another new line.\n")
  .then(() => {
    console.log("First line written.");
    return writeFile(
      "temp.txt",
      "Writing the new line 2: Learning async/await is fantastic!\n",
      { flag: "a" }
    );
  })
  .then(() => {
    console.log("Second line written.");
    return writeFile(
      "temp.txt",
      "Writing the new line 3: Keep learning new things everyday.\n",
      { flag: "a" }
    );
  })
  .then(() => {
    console.log("Third line written.");
    return readFile("temp.txt", "utf8");
  })
  .then((data) => {
    console.log("The content in the file: \n", data);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });
