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

/*
?   Object.keys() 
        - Returns back an array of keys
*/

// console.log(Object.keys(theSimpsons));

let listKeys = Object.keys(theSimpsons);

/*
?   Object.values() 
        - Returns back an array of values
*/

// console.log(Object.values(theSimpsons.seasons));

/*
?   Object.assign()
        - Copies all enumerable properties from one or more sources
*/

let obj1 = { name: "Bob", age: 50 };
let obj2 = { work: "Manager" };

let newObject = Object.assign(obj1, obj2);

// console.log(newObject);

let copyOfSimpsons = Object.assign(theSimpsons);

// console.log(copyOfSimpsons);

//? delete object.key

delete theSimpsons.currently_running;

console.log(theSimpsons);

/*
?    Object.freeze()
*/

Object.freeze(theSimpsons); // Freezing the object in it's place

theSimpsons.id = 2; //! Will not work since obj is 'frozen'
theSimpsons.est = 459875937894; //! Will not work since obj is 'frozen'

console.log(theSimpsons); // Obj remains the same as it was
