// function getPoemTitle(authorUserSelected) {
//   let poemTitlesByAuthor = {
//     "Robert Frost": "Stopping by Woods on a Snowy Evening",
//     "Shel Silverstein": "Falling Up",
//     "Sylvia Plath": "The Bell Jar",
//   };

//   return poemTitlesByAuthor[authorUserSelected];
// }

// console.log(getPoemTitle("Robert Frost"));

// let states = {
//   green: ["yellow"],
//   yellow: ["red"],
//   red: ["green"],
// };

// let currentState = "green";

// function enterState(newState) {
//   let validTransitions = states[currentState];
//   if (validTransitions.includes(newState)) {
//     currentState = newState;
//     console.log("The state has changed to:", currentState);
//   } else {
//     throw (
//       "Invalid state transition attempted from " +
//       currentState +
//       " to " +
//       newState
//     );
//   }
// }

// // enterState("red"); //! Hits the throw / else block

// enterState("yellow");
// enterState("red");
// // enterState("yellow"); //! Hit the throw / else block
// enterState("green");

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  sleep() {
    return `${this.name} is going to sleep....`;
  }

  describe() {
    return `Hi there, I am ${this.name}, my color is ${this.color}!`;
  }
}

// const monkey = new Animal("monkey", "tan");

// console.log(monkey.sleep());
// console.log(monkey.describe());

class Dog extends Animal {
  constructor(name, color) {
    super(name, color);
  }

  //  .sleep()  //? Method comes from parent class

  // Overwriting the inherited method
  describe() {
    return `A ${this.color} colored dog named ${this.name} says Woof!`;
  }
}

const doggy = new Dog("fido", "brown");
const monkey = new Animal("Curious George", "brown");

console.log(doggy.describe());

console.log(monkey.describe()); //? Calling new method
