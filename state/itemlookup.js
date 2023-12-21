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
