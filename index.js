const form = document.getElementById("weather-form");
const locationInput = document.getElementById("location");
const weatherData = document.getElementById("weather-data");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = locationInput.value;
  const apiKey = "c5276e2f4c27130d4f9a11ada9adab46";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const {
        name,
        main: { temp, humidity },
        weather,
      } = data;
      const weatherObject = {
        name,
        temp,
        humidity,
        description: weather[0].description,
      };
      localStorage.setItem("weather", JSON.stringify(weatherObject));
      weatherData.innerHTML = `
				<h2>${name}</h2>
				<p>Temperature: ${Math.round(temp)}C</p>
				<p>Humidity: ${humidity}%</p>
				<p>Weather: ${weather[0].description}</p>
			`;
    })
    .catch((error) => {
      console.error(error);
      weatherData.textContent = "Error fetching weather data";
    });
});
