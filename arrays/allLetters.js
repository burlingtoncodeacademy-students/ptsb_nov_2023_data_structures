/*
  ! Challenge 🟢
  ?   .forEach() - Apply a task multiple times
        // Given the list of learners...
        //   - Use the forEach loop to iterate through the array
        //   - Inside of the loop, log to the output window an interpolated string which prints out: "{learner}'s name is {X} letters long."
        //     - Substituting {X} for the actual length of the learner's name
  !       [SPICY MODE]:🌶️🌶️🌶️
        //   - Create a variable to store your own name.
          - Within the loop, when it reaches your name print "Hey, I'm {learner} 🙌😄! And my name is {X} letters long!"
          - For all the other learners, keep the format the same as what it was above
*/
//? Method 1
// learners.forEach(nameLength);
// function nameLength(itemInArray) {
//   console.log(`${itemInArray}'s name is ${index.length} letters long.`);
// }
//? Method 2
// let myName = "Amit";
// learners.forEach((itemInArray) => {
//   if (itemInArray === myName) {
//     console.log(
//       `Hey, I'm ${itemInArray}  🙌😄! And my name is ${itemInArray.length} letters long!`
//     );
//   } else {
//     console.log(`${itemInArray}'s name is ${itemInArray.length} letters long.`);
//   }
// });
/*
  ! Challenge 🟡
  ?   .filter() - Apply conditional check to store values in a new array.
        Given the list of learners...
        //   - Create a traditional function that will take in an array as an argument, and a letter.
        //   - Inside the function, use .filter to traverse through the array that was received.
        //   - The return should be a filtered array that has each learner whose name begins with the letter that was passed in.
            // ex.) the letter "T" as input should return an array that contains all of the learners whose name begins with the letter "T":
            //   ["Tiffany","Tim","Tom"]
        //   - Call the function. Be sure to log the invocation, so the desired result can be seen in the output window.
*/
//? Method 1
// function filterFunc1(array, letter) {
//   let filteredArray = array.filter((itemInArray) => {
//     if (itemInArray[0] === letter) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   console.log(filteredArray);
// }
// //? Method 2
// function filterFunc2(array, letter) {
//   let filteredArray = array.filter((itemInArray) => itemInArray[0] === letter);
//   return filteredArray;
// }
// console.log(filterFunc2(learners, "A"));
/*
  ! Challenge 🔴
  ?   .map() - Apply action to store modified values in a new array
        Given the list of learners...
          - Create an arrow function that will take in the array of learners, and a message. ex) " is awesome! 😀"
          - Inside the function use the .map method on the array of learners to return back a new array.
            - Using the .map method, the returned array should store the value "{learner} ${message}" on each iteration`.
              ex) Final Output:
                [
                  "Amit is awesome! 😀",
                  "John is awesome! 😀",
                  "Ben is awesome! 😀",
                ]
          - Call the function. Be sure to log the invocation, so the desired result/return can be seen in the output window.
*/
// const mapper = (learnersArr, message) => {
//   let mappedArray = learnersArr.map((itemInArray) => {
//     return `${itemInArray} ${message}`;
//   });
//   console.log(mappedArray);
// };
// mapper(learners, "is awesome! 😀");
/*
  ! Challenge 🌶️🥵🔥
  ?   .reduce()  - Apply action for each value, resulting in a single valued outcome
        Given the list of learners...
        //   - Create an arrow function called allLetters that will take in the array of learners.
          - Using the reduce method within the function, gather the sum of the all letters from each learner's name.
          - Have the allLetters function return the value
          - Log the output, "Total letters: X letters" , where X represents the sum of all the letters from each learners name.
  */
const allLetters = (learnersArr) => {
  let sumOfLetters = learnersArr.reduce((letter, item) => {
    // console.log(item.length);
    letter += item.length;
    // return acc;
  }, 0);

  return sumOfLetters;
};
