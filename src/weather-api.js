const apiKey = "b067ed5c72424299acc131107230311";
const url = "https://api.weatherapi.com/v1";
const apiMethod = "/current.json";

const processResponse = (weatherData) => {
  const {
    location: { name: city },
    current: {
      temp_c: temperatureC,
      temp_f: temperatureF,
      feelslike_c: feelsLikeC,
      feelslike_f: feelsLikeF,
      humidity,
      wind_kph: wind,
    },
  } = weatherData;

  return {
    city,
    temperatureC,
    temperatureF,
    feelsLikeC,
    feelsLikeF,
    humidity,
    wind,
  };
};

async function callWeatherApi(parameter) {
  try {
    const response = await fetch(
      `${url}${apiMethod}?key=${apiKey}&q=${parameter}`,
      { mode: "cors" },
    );

    const responseData = processResponse(await response.json());
    return responseData;
  } catch (error) {
    return error;
  }
}

export default callWeatherApi;