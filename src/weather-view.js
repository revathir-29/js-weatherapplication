const searchResult = document.getElementById("search-result");
const city = document.getElementById("city");
const feelsLike = document.getElementById("feels-like");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const temperature = document.getElementById("temp");

const displayApiData = (proccesedData) => {
  if (!proccesedData) return;

  searchResult.classList.add("active");

  city.textContent = `${proccesedData.city}`;
  feelsLike.textContent = `Feels like: ${proccesedData.feelsLikeC} °C`;
  temperature.textContent = `Temperature: ${proccesedData.temperatureC} °C`;
  wind.textContent = `Wind: ${proccesedData.wind} km/h`;
  humidity.textContent = `Humidity: ${proccesedData.humidity} %`;
};

const changeToFahrenheit = (proccesedData) => {
  feelsLike.textContent = `Feels like: ${proccesedData.feelsLikeF} °F`;
  temperature.textContent = `Temperature: ${proccesedData.temperatureF} °F`;
};

const toggleTemperatureUnit = (proccesedData) => {
  if (temperature.textContent.includes("°C")) {
    changeToFahrenheit(proccesedData);
  } else {
    displayApiData(proccesedData);
  }
};

export { displayApiData, toggleTemperatureUnit };