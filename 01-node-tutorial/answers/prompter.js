const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let targetNum = Math.floor(Math.random() * 100) + 1;
let prompt = "Please enter a number between 1 and 100.";
let guessCount = 0;
const maxGuess = 5;

// Function to reset the game
const resetGame = () => {
  targetNum = Math.floor(Math.random() * 100) + 1;
  prompt = "Please enter a number between 1 and 100.";
  guessCount = 0;
};

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <p>${prompt}</p>
  <p>Number of guesses left: ${Math.max(0, maxGuess - guessCount)} </p>
  <form method="POST">
  <input name="guess" type="number" required></input>
  <button type="submit">Submit Guess</button>
  </form>
  <form method="POST">
      <button name="restart" type="submit">Restart</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic

      // Check if the restart button was clicked
      if (body["restart"] !== undefined) {
        resetGame();
      } else {
        // Increment the guess count if it's a guess submission
        guessCount += 1;
        const guess = parseInt(body["guess"], 10);

        if (guessCount >= maxGuess && guess !== targetNum) {
          prompt = `You've used all ${maxGuess} guesses. The correct number was ${targetNum}. Click "Restart Game" to try again.`;
        } else if (!isNaN(guess)) {
          if (guess < targetNum) {
            prompt = "Your guess is too low. Try again!";
          } else if (guess > targetNum) {
            prompt = "Your guess is too high. Try again!";
          } else {
            prompt = `Congratulations! You guessed the number ${targetNum} correctly! Click "Restart Game" to play again.`;
            guessCount = maxGuess; // Set guess count to max to end the game
          }
        } else {
          prompt = "Please enter a valid number.";
        }
      }

      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on("request", (req) => {
  console.log("event received: ", req.method, req.url);
});

server.listen(3000);
console.log("The server is listening on port 3000.");
//The server is running
