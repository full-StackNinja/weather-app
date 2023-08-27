export default (function domManipulation() {
  const displayData = function (dataToDisplay) {
    console.log("dataToDisplay", dataToDisplay);
    const weatherData = document.querySelector(".weather-data");
    // Access children of weather container
    const name = weatherData.querySelector(".name");
    const temp = weatherData.querySelector(".temp");
    const feelsLike = weatherData.querySelector(".feels-like");
    const humidity = weatherData.querySelector(".humidity");
    const windKph = weatherData.querySelector(".wind-kph");
    const condition = weatherData.querySelector(".condition");

    name.innerHTML = dataToDisplay.name;
    condition.innerHTML = 'slightly over cloudy with intermitten showers';
    temp.lastChild.innerHTML = `${dataToDisplay.temp_c}&#x2103`;
    feelsLike.lastChild.innerHTML = `${dataToDisplay.feelslike_c}&#x2103`;
    humidity.lastChild.innerHTML = `${dataToDisplay.humidity}%`;
    windKph.lastChild.innerHTML = `${dataToDisplay.wind_kph}km/h`;

    weatherData.classList.add("display-data");
  };

  return { displayData };
})();
