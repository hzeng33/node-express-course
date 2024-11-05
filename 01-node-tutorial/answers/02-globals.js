// Set an environment variable with the command in the command line terminal: export MY_VAR="Hi there!"

console.log(__dirname);

console.log(process.env.MY_VAR);

setInterval(() => {
  console.log("Hello World!");
}, 1000);
