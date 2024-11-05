const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the home page!");
  } else if (req.url === "/about") {
    res.end("You can know more about us on this page.");
  } else {
    res.end(`
            <h1>Oops!</h1>
        <p> We can't seem to find the page that you are looking for now.</p>
        <a href="/">Back home</a>
        `);
  }
});

server.listen(3000);
