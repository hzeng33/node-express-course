const { writeFile, readFile } = require("fs").promises;

async function writer() {
  try {
    await writeFile(
      "temp.txt",
      "Line 1: Hello World!\n Line 2: Learning Node.js is good.\n Line 3: Happy coding!\n",
      { flag: "a" }
    );
    console.log("File has been written.");
  } catch (error) {
    console.log("An error occurred: ", error);
  }
}

async function reader() {
  try {
    const data = await readFile("temp.txt", "utf8");
    console.log("The content: \n", data);
  } catch (error) {
    console.log("An error occurred: ", error);
  }
}

async function readWrite() {
  await writer();
  await reader();
}

readWrite();
