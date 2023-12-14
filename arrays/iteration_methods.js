/*
    ? Iteration methods
        - Do not destroy/alter original array
        - Take in a callback function
        - Loop through arrays
        - Must have a return
*/

let fruits = ["apple", "pear", "mango", "orange", "pineapple"];

const filteredFruit = fruits.filter((fruit) => {
  return fruit !== "mango";
});

console.log(filteredFruit);

let fruit1 = "pineapple";

console.log(fruits[4]);
console.log(fruits[4].includes(fruit1));

const filteredFruit2 = fruits.filter((fruit) => !fruit.includes("apple"));
console.log(filteredFruit2);

function removeMango(fruit) {
  let results = fruit != "mango";
  return results;
}

const filteredFruit3 = fruits.filter(removeMango);

console.log("Original:", fruits);
console.log("Filtered:", filteredFruit3);

/*
    Challenge:
        How do you remove 5s from an array
        Store it in a new variable and console log that variable
*/

let myNumArray = [1, 5, 6, 3, 8, 9, 4, 5];

let newNumArray = myNumArray.filter((num) => num != 5);
console.log(newNumArray);

let movies = [
  { name: "Top Gun 2", category: "Action" },
  { name: "Scary Movie 5", category: "Horror" },
];

movies.push({ name: "It", category: "Horror" });
movies.push({ name: "Get Out", category: "Horror" });
movies.push({ name: "Taken", category: "Action" });

let actionMovies = movies.filter((movie) => movie.category === "Action");
console.log(actionMovies);
let horrorMovies = movies.filter((movie) => movie.category === "Horror");
console.log(horrorMovies);

//? forEach()

let newFoodList = ["apple", "pear", "mushroom", "cheese", "peach"];

// for (let i = 0; i < newFoodList.length; i++) {
//   console.log(newFoodList[i]);
// }

newFoodList.forEach((item, index) => {
  console.log("ForEach:", item, "Index:", index);
});

/*
  Create an array containing movie titles
    // - Use a foreach to list out your movies
    // - Add another movie to the end
    // - And replace one of your existing movies with another
*/

let movieList = ["Matrix", "Babe", "Little Mermaid", "The Two Towers"];
movieList.forEach((movie) => console.log(movie));
movieList.push("Aladdin");
console.log(movieList);

movieList.splice(1, 1, "Barbie");
console.log(movieList);

//? .find()
let tmnt = [
  "Mikey",
  "Donnie",
  "Leo",
  "Ralph",
  "Splinter",
  "Shredder",
  "Baxter",
];

let character = "Leo";

console.log(
  "Find:",
  tmnt.find((charName) => charName === character)
); //* Leo

character = "April";

console.log(
  "Find Again:",
  tmnt.find((c) => c === character)
);

//? .at()
// console.log(tmnt[tmnt.length - 1]); // old school way
console.log(tmnt.at(-1));

//? .map()
/*
    - similar to a forEach()
    - takes in a callback fx
*/

let numArray = [];
let fizzBuzzArray = [];

for (let i = 1; i < 101; i++) {
  numArray.push(i);
}

console.log(numArray);

numArray.map((x) => {
  if (x % 15 === 0) {
    fizzBuzzArray.push(x);
  }
});
console.log(fizzBuzzArray);

let newArr = numArray.map((i) => {
  if (i % 15 === 0) {
    return `${i} is divisible by 3 and 5`;
  } else {
    return `${i} is NOT divisible by 3 and 5`;
  }
});

console.log(newArr);

/*
  Using a method, flip the values in an array
    ex [1, 2, 3, 4, 5]
    output: [5, 4, 3, 2, 1]
*/

let arr = [1, 2, 3, 4, 5];

console.log(arr.reverse());
