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
    swing() {
      // Some other FUNCTIONality -> player attacks a target (would prob pass in a target as a param/arg)
      return `You swing the ${this.name}`;
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

const showInventory = () => {
  console.log("-----------");
  console.log("Inventory:");
  Object.keys(inventory).forEach((item) => {
    console.log(item + ":", inventory[item].name);
  });
  console.log("-----------");
};

const interact = (action, target) => {
  if (inventory[action]) {
    console.log("Available Actions:");
    Object.keys(inventory[action]).forEach((prop) => {
      if (typeof inventory[action][prop] === "function") {
        console.log(prop);
      }
    });
    return;
  }

  if (validInvCommands.includes(action)) {
    showInventory();
    return;
  }

  const validItem = inventory[target];
  // const validAction = inventory[target][action]; //! Error on invalid items, - cannot read properties of undefined
  const validAction = inventory[target]?.[action];
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

const start = async () => {
  try {
    let response;
    while (response !== "exit") {
      response = await ask("What do you want to do?");

      let splitResponse = response.split(" ");
      // let action = splitResponse[0];
      // let target = splitResponse[1];

      // console.log(interact(action,target))

      //? OR

      let [action, target] = splitResponse;

      if (action && target) {
        // User provided 2 word input
        interact(action, target);
      } else if (action) {
        // handle single input
        interact(action, "");
      } else {
        console.log("Yeah, idk what that is...");
      }
    }
    process.exit();
  } catch (err) {
    console.log(err);
    await start();
  }
};

start();
