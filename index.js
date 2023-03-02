const form = document.querySelector("form");
const displayData = document.querySelector("#display-data");

const inputData = document.getElementById("inputField");
console.log({ inputData });
const { value } = inputData;
console.log({ value });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const endpoint = `http://www.omdbapi.com/?s=${inputData.value}&apikey=51a3fe4a`;
  console.log({ endpoint });
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      displayData.textContent = JSON.stringify(data);
    })

    .catch((error) => console.error(error));
});
