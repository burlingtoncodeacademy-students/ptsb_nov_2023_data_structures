const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (questionText) =>
  new Promise((resolve, reject) =>
    rl.question(questionText + "\n", (input) =>
      input.length > 0 ? resolve(input.toLowerCase()) : reject("Provide input")
    )
  );

let validInvCommands = ["i", "inventory", "items", "inv"];

let inventory = {
  sword: {
    name: "Excalibur",
    description: "A sword pulled from stone",
    look() {
      console.log(`${this.name} ⚔️:`);
      return this.description;
    },
  },
  axe: {
    name: "Mighty Battle Axe Of Doom!",
    description: "Great Battle Axe of Doom!",
    look() {
      // Show other item info... origin... obtained
      console.log(`${this.name} 🪓:`);
      return this.description;
    },
    swing() {
      // Some other FUNCTIONality -> player attacks a target (would prob pass in a target as a param/arg)
      return `You swing the ${this.name}`;
    },
  },
  hp_potion: {
    name: "Hp Potion",
    description: "Potion to restore hp",
    drink() {
      // Some other FUNCTIONality -> player restores hp
      return `You drink the ${this.name}`;
    },
  },
};

const interact = (action, target) => {
  const validItem = inventory[target];
  const validAction = inventory[target][action];
  //   console.log({ validAction });
  if (validAction && typeof validAction === "function") {
    console.log("Action can be done 👍");
    if (validItem) {
      console.log("Item was found 👍");
      console.log(inventory[target][action]());
    } else {
      console.log("Item not found :(");
    }
  } else {
    console.log(`Are you crazy?! You cannot ${action} a ${target}`);
  }
};

// interact("drink", "hp_potion");

const start = async () => {
  try {
    let response;
    while (response !== "exit") {
      response = await ask("What do you want to do?");
    }
    process.exit();
  } catch (err) {
    console.log(err);
    await start();
  }
};

start();
