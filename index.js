const farmAnimals = 'cow horse sheep pig chicken';
let [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')
console.log(moo, neigh, baa, oink, cluck);

let [bessie, , dolly, babe, little] = farmAnimals.split(' ');
console.log(bessie, dolly, babe, little);

let [blackAndWhite, , black, pink, ] = farmAnimals.split(' ');
console.log(blackAndWhite, black, pink)


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let [red, orange, yellow, green, blue, indigo, violet] = colors;
// console.log(red);

let [r, o, y, g, b, , v] = colors;

let[ , , , , , indg, ] = colors;
console.log(indg)


const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
let {muppetName, color, song, job, partner} = muppet;
// color;
job;
partner;

// let {job, partner} = muppet;
// job;
// partner;


const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
let {nestedName, nestedColor, album, nestedJob, nestedPartner} = nestedMuppet;
console.log(album);

let {song2, song4} = nestedMuppet.album.theMuppetMovie;
song2;
song4;



// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner


//> Use Destructuring Assignment to Assign Data to Variables

/* const doggie = {
  name: 'Buzz',
  breed: 'Great Pryenees',
  furColor: 'black and white',
  activityLevel: 'sloth-like',
  favoriteFood: 'hot dogs'
};
// const name = doggie.name;
// const breed = doggie.breed;
// name;
// breed;

// const { name, breed} = doggie;
// name;
// breed;
 */

/* const doggie = {
  name: 'Buzz',
  breed: 'Great Pryenees',
  furColor: 'black and white',
  activityLevel: 'sloth-like',
  favoriteFoods: {
    meats:{
      ham: 'smoked',
      hotDog: 'Oscar Meyer',
    },
    chesses:{
      anmerican: 'kraft'
    }
  }
};

// const { ham, hotDog} = doggie.favoriteFoods.meats
// ham;
// hotDog;
 */

//> Uisng Destructuring Assignments with Arrays

/* const dogs = ['Great Pryenees', 'Pug', 'Bull Mastiff'];

// const [medium, small, giant] = dogs;
// console.log(medium, small, giant);

// const [, small, giant] = dogs;
// console.log(small, giant);
 */

//> Using Destructuring Assignment with Strings

/* const dogsName = 'Sir Woody BarksAlot';

// const [title, firstName, lastName] = dogsName.split(' ');
// console.log(title, firstName, lastName);

// const [title, , lastName] = dogsName.split(' ');
// console.log(title, lastName);
 */
