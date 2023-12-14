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
  characters: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
  currently_running: true,
};

let { characters, seasons } = theSimpsons;

characters.push("Moe");

// console.log(theSimpsons);

let { currently_running: on_air } = theSimpsons;

// console.log(on_air); // on_air is a representation of the value that exists within the currently_running key

// let on_air2 = theSimpsons.currently_running;

// console.log(on_air2);

//? Spread With Objects

let simpsonsCharacters = {
  simpsonHouse: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
  moesTavern: ["Moe", "Barney"],
};

let generalLocations = {
  park: "statue",
  beach: "dock",
  lake: "3 eyed fish",
};

let locations = {
  ...simpsonsCharacters,
  dmv: ["Patty", "Selma"],
  ...generalLocations,
};

console.log(locations);

console.log(locations.simpsonHouse);

theSimpsons = {
  ...theSimpsons,
  locations: { ...locations },
};

console.log(theSimpsons);
