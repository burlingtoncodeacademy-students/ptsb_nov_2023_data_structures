/*
    ? Array Destructuring 
        - Syntax is on the left side of the assignment operator
        - Great for pulling info out of an array and assigning data to it's own variable
*/

const fullName = ["John", "Doe"];

const [fName, lName] = fullName;

// console.log(fullName[0], fullName[1]);
console.log(fName, lName);

//? Spread
/*
    - Denoted by 3 consecutive periods ... 
    - Pulls out all elements of an array and gives them to you as a standalone list of elements
*/

const fullName2 = ["Rocket", "Raccoon"];

console.log(...fullName2);

const myElementsOfArray = [...fullName];

const prices = [10.99, 5.99, 3.99, 6.49];

console.log(Math.min(...prices));

//? Rest

const fullName3 = [
  "Jane",
  "Doe",
  "Mrs.",
  { month: 3, date: 22, year: 1973 },
  "testOne",
  2,
  "test3",
  4,
  true,
  false,
];

const [firstName, lastName, , ...otherInfo] = fullName3;

console.log(firstName, lastName);
console.log(otherInfo);

const [, , , birthday] = fullName3;
console.log(birthday);

let arr1 = [1, 34, 6, 5, 4, 32];
let arr2 = [2, 56, 7, 34, 2, 23];

let combinedArr = [...arr1, ...arr2];

console.log(combinedArr);
