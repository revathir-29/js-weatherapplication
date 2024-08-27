import "./style.css";
import callWeatherApi from "./weather-api";
import { displayApiData, toggleTemperatureUnit } from "./weather-view";

let proccesedData = "";
const toggleUnitButton = document.getElementById("toggle-unit-button");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

async function apiCall() {
  if (searchInput.value === "") return;

  try {
    proccesedData = await callWeatherApi(searchInput.value);
    displayApiData(proccesedData);
  } catch (error) {
    alert(`${error.message}`);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchButton.addEventListener("click", apiCall);

toggleUnitButton.addEventListener("click", () => {
  toggleTemperatureUnit(proccesedData);
});