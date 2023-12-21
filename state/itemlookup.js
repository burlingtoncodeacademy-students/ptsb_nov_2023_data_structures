const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (questionText) =>
  new Promise((resolve, reject) =>
    rl.question(questionText + "\n", (input) =>
      input.length > 0 ? resolve(input) : reject("Provide input")
    )
  );
