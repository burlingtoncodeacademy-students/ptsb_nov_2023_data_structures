/*
    ? Array
        - Denoted with square brackets []
        - Indices start at zero 0
        - Using a property called "length", we can find the sum of data stored
*/

let list = ["milk", "bread", "chicken", "coffee"];

// console.log(list[1]);
// console.log(list.length);

list[0] = "chocolate milk";
// console.log(list);

let avengers = ["Nick", 2, false, "Steve", "Bruce", ["Tony", 8, true]];

// console.log(typeof avengers); //* logs 'object', everything in JS is an object
// console.log(avengers instanceof Array); //* true

/*
    Using a console.log()
        - Target Bruce
        - Target true
        - Using string interpolation, return "Hello, Nick" and "Hello Tony"
*/

// console.log(avengers[4]);
// console.log(avengers[5][2]);

// console.log(`Hello, ${avengers[0]}. Hello, ${avengers[5][0]}`);

/*
?   Reference
        - Important to note, when an array is created, it is being stored in memory
        - Assigning a new variable to initial array will reference the same array in memory
        - It can be important when working with immutable data, that we do not alter things in which or where they originate
*/

let myPubInfo = ["Amit", 32];

let myPrivateInfo = myPubInfo; // ["Amit", 32]

let socialSec = "555-55-5555";

myPrivateInfo.push(socialSec);

// console.log(myPrivateInfo);

// console.log(myPubInfo); //! Has social sec # in it

//? Array Methods
//* .push(item to add to the end of the array)
let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

food.push("Pizza");
console.log("PUSH:", food);

//* .splice (target position, how many removed, replaced with what)
food.splice(1, 1, "Tacos");
console.log("SPLICE:", food);

food.splice(1, 0, "Steak");
console.log("SPLICE 2:", food);

//* .slice() - Can store a segment of an array
let sliced = food.slice(1, 3);
console.log("SLICE:", sliced);

//* .pop() - Removes the last item in an array
food.pop();
console.log("POP:", food);

//* .shift() - Removes item from the beginning of the array
food.shift();
console.log("SHIFT:", food);

//* .unshift() - Add item/s to the start of our array
food.unshift("Hamburger", "Salad");
console.log("UNSHIFT:", food);

//* .toString();

let rgb = ["red", "green", "blue"];

console.log(rgb.toString());
console.log(typeof rgb);
