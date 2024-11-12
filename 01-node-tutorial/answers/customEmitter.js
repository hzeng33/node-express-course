const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("response", (name, id) => {
  console.log(`Data received from user ${name} with id: ${id}.`);
});
emitter.emit("response", "David", 11);

setInterval(() => {
  emitter.emit("timer", "Hello from a timer event");
}, 1000);
emitter.on("timer", (msg) => console.log(msg));

//Print right triangle event.
const printTriangle = (rows) => {
  let triangle = "";
  for (let i = 0; i <= rows; i++) {
    triangle += "*".repeat(i) + "\n";
  }
  console.log(triangle);
};
emitter.on("triangle", (rows) => {
  console.log("Print a right triangle: \n");
  printTriangle(rows);
});
setTimeout(() => {
  emitter.emit("triangle", 5);
}, 0);
