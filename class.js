//деструктуризація

const male = {
  name: "Yurii",
  lastName: "Stap",
  age: 29,
};
const female = {
  name: "Olya",
  lastName: "Pi",
  age: 29,
};
const { lastName: lastNameOfMale } = male;
const { lastName: lastNameOfFemale } = female;

console.log(`Hello ${male.name} ${lastNameOfMale}`);
console.log(`Hello ${female.name} ${lastNameOfFemale}`);

//practice

const studies = { school: "bologne", univercities: "milan" };

const degrees = {
  bachelor: { year: 2008, degreenName: "bachelor" },
  master: { year: 2015, degreenName: "master" },
};

const hobbies = { active: "football", passive: "chess" };

const user = {
  name: "Stephania",
  age: 27,
  city: "Ivano-Frankivsk",
  phone: 755755755,
  email: "stephania@gmail.com",
  studies,
  degrees,
  hobbies,
};
console.log(user);

const { univercities } = user.studies;
const { passive } = user.hobbies;
const { year } = user.degrees.master;
const {
  studies: { univercities: univercitiesOfTheUser },
  hobbies: { passive: passiveHobbies },
  degrees: {
    master: { year: yearOfMaster },
  },
} = user;
console.log(
  `user info: ${univercitiesOfTheUser} ${passiveHobbies} ${yearOfMaster}`
);

// const {
//   univercities: universitiesOfUser,
//   passive: passiveHobbies,
//   master: masterDegree,
// } = user;

console.log(`user info: ${univercities} ${passive} ${year}`);

const newStudy = { phd: { year: 2010, degreeName: "doctor of physics" } };

user.degrees = {
  phd: { year: 2010, degreeName: "doctor of physics" },
};
user.degrees = { ...user.degrees, phd: newStudy.phd };
console.log(user);
const { phd } = newStudy;

//destructure hobbies

const {
  hobbies: { passive: chess },
} = user;

console.log(chess);

//create 2 users

const userChriss = JSON.parse(JSON.stringify(user));
console.log(userChriss);

//id, class, tag - most used

const input = document.getElementById("test-input");
const inputQuery = document.querySelector("#test-input");
const inputQueryName = document.querySelector('input[name="test-input-name"]');
console.log({ input, inputQuery, inputQueryName });

let menu = document.getElementById("menu");
console.log(menu.innerHTML);
