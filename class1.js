// const _endpoint = "https://swapi.dev/api/";
// const people = "/people";
// const API = {
//   PEOPLE: "people",
//   PLANETS: "planets",
//   STARSHIPS: "starships",
// };
const products = fetchData(URLS.posts).then((data) =>
  localStorage.setItem("products", data)
);
