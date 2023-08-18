const url = "https://api.weatherapi.com/v1/current.json?";
const key = "key=f7dd6e89121847cd984212747231708&q=";

const weatherDOM = (weather) => {
  const weatherDiv = document.querySelector(".weather-info");
  while (weatherDiv.childNodes.length > 0) {
    weatherDiv.removeChild(weatherDiv.lastChild);
  }

  const location = document.createElement("h2");
  location.textContent = weather.place;

  const temp = document.createElement("p");
  temp.textContent = `Temp: ${weather.temp}`;

  const feelsLike = document.createElement("p");
  feelsLike.textContent = `Feels Like: ${weather.feelsLike}`;

  const humidity = document.createElement("p");
  humidity.textContent = `Humdity: ${weather.humidity}%`;

  weatherDiv.appendChild(location);
  weatherDiv.appendChild(temp);
  weatherDiv.appendChild(feelsLike);
  weatherDiv.appendChild(humidity);
};

const apiInfo = async (location) => {
  const weatherFetch = await fetch(url + key + location)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => console.log(error));

  const weatherInfo = {
    place: weatherFetch.location.name,
    temp: weatherFetch.current.temp_f,
    feelsLike: weatherFetch.current.feelslike_f,
    humidity: weatherFetch.current.humidity
  };

  weatherDOM(weatherInfo);
  return weatherInfo;
};

export default apiInfo;
