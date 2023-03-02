// const asyncFunc = async () => {
//   const response = await fetch(resource);
//   const data = await response.json();
// };

// const test = asyncFunc();
// console.log(test);

// const sum = (a, b) => console.log(a + b);

// setTimeout(() => {
//   sum(3, 2);
// }, 0);

// console.log(1);
// console.log(2);
// console.log(3);
// sum(4, 2);
// event loop - order of events
//1) sync, 2)async  3) api, 4)  = timeout, interval, events
//sync = clg,
// first microtasks, only then macrotasks

// const promise = new Promise((resolve, reject) => {
//   //   resolve("We did it");
//   reject("something went wrong");
// });
// console.log({ promise });
//panding, fullfill, rejected - promise state
// then = resolved(also can be for rejected), catch = catch error, finally
// alert("Loading...");

// promise
//   .then((response) => alert(`Sucess ${response} !!!!`))
//   .catch((err) => alert(`Oops some error happened ${err}`))
//   .finally(() => alert("Loadind finished !"));

const _endpoint = "https://swapi.dev/api/";
const people = "/people";
const API = {
  PEOPLE: "people",
  PLANETS: "planets",
  STARSHIPS: "starships",
};

// //api call for people
// fetch(_endpoint + API.PEOPLE)
//   .then((response) => {
//     console.log({ response });
//     return response.json();
//   })
//   .then((result) => console.log({ result }));

// const filteredArray = myArray.filter((obj) => obj.height > 150);
// console.log(filteredArray);
// fetch(_endpoint + API.PEOPLE).then((response) =>
//   console.log({ filteredArray })
// );
const camelCase = (str) => {
  return str
    .split("_")
    .map((word, idx) =>
      idx === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("+");
};
console.log(camelCase);

// fetch(_endpoint + API.PEOPLE)
//   .then((response) => response.json())
//   .then((result) => {
//     const filteredArray = result.results
//       .filter(
//         (obj) =>
//           obj.height > 150 &&
//           obj.hair_color !== "n/a" &&
//           obj.hair_color !== "none"
//       )
//       .map((item) => {
//         return Object.keys(item).reduce(
//           (result, key) => ({
//             ...result,
//             [camelCase(key)]: item[key],
//           }),
//           {}
//         );
//       });
//   });
// const getPlante = async () => {
//   const response = await fetch(peopleEndpoint);
//   const result = await response.json();
//   return result[0];
// };

// const getPlanetWithoutAsync = () => {
//   return fetch(peopleEndpoint)
//     .then((response) => response.json())
//     .then((result) => result[0]);
// };

// const apiHandler = async (func) => {
//   const result = await func();
//   return result;
// };
//Promise.all - повертаєм response

const _baseEndpoint = "http://localhost:3000";

const URLS = {
  posts: "/post",
  posts: "/comments",
  posts: "/profile",
};
const fetchData = async (url) => {
  const modifiedURL = _baseEndpoint + url;
  try {
    const response = await fetch(modifiedURL);
    const result = await response.json();
    console.log(response, result);
    return result;
  } catch (error) {
    return error;
  }
};

const saveData = async (url, body, method) => {
  const modifiedUrl = _baseEndpoint + url;

  try {
    await fetch(modifiedUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    return error;
  }
};
const btn = document.getElementById("posts-btn");

btn.addEventListener("click", () =>
  saveData(URLS.products, { id: 2, name: "book", price: 95 })
);

const posts = fetchData(URLS.posts).then((data) => data);
