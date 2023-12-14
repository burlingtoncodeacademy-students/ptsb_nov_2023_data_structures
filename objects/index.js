//? Objects

let marvelHero = {
  fullName: "Peter Parker",
  codeName: "Spider-Name",
  age: 25,
  active: true,
};

/*
?   Object Literal
        When our values are written within our keys
            - Are HardCoded

?   Structure
    
    keyword objectName = {
        key: value
    }

    * Objects are considered Dictionaries
*/

let theSimpsons = {
  id: 1,
  est: 1989,
  genre: "animated",
  seasons: {
    "season one": [
      {
        episode_title: "Simpsons Roasting on an open fire",
        aired: "1989-12-17",
      },
      {
        episode_title: "Bart the Genius",
        aired: "1990-01-01",
      },
    ],
    "season two": [
      // ....
    ],
    "season three": [
      //
    ],
  },
  currently_running: true,
};
//? Dot notation
// console.log(theSimpsons.genre); // animated
//? Square bracket notation
// console.log(theSimpsons["genre"]); // animated

// console.log(theSimpsons.seasons["season one"]);
// console.log(theSimpsons["seasons"]["season one"][0].episode_title); // "Simpsons Roasting on an open fire"

theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

/*
- Use an array method to add another character to the character array
- console.log just the characters from theSimpsons object
*/
theSimpsons.characters.push("Ned");

// console.log(theSimpsons.characters);

theSimpsons.currently_running = false;

console.log(theSimpsons);

/*
    - Navigate to season one, episode 2, and change the date to reflect a date of '1990-01-14'
*/

let prevDate = theSimpsons.seasons["season one"][1].aired;

theSimpsons.seasons["season one"][1].aired = "1990-01-14";

console.log(theSimpsons.seasons["season one"]);
