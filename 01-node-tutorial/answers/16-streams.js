const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
  highWaterMark: 200,
  encoding: "utf8",
});

let count = 0;

stream.on("data", (result) => {
  count++;
  console.log(`Chunk count at  ${count}: `, result);
});

stream.on("end", () => {
  console.log(`The stream ended. The total chunks received: ${count}. `);
});

stream.on("error", (error) => {
  console.log("An error occurred: ", error);
});
