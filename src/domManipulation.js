export default (function domManipulation() {
  const weatherData = document.querySelector(".weather-data");

  function setVisibility() {
    weatherData.classList.add("display-data");
  }

  function hideVisibility() {
    weatherData.classList.remove("display-data");
  }

  function clearError() {
    const errorMessage = document.querySelector(".error-message");
    errorMessage.innerHTML = "";
  }

  const displayData = function (dataToDisplay) {
    // Clear error display if any
    clearError();
    // Access children of weather container
    const name = weatherData.querySelector(".name");
    const country = weatherData.querySelector(".country");
    const temp = weatherData.querySelector(".temp");
    const feelsLike = weatherData.querySelector(".feels-like");
    const humidity = weatherData.querySelector(".humidity");
    const windKph = weatherData.querySelector(".wind-kph");
    const condition = weatherData.querySelector(".condition");

    name.innerHTML = `${dataToDisplay.name}`;
    country.innerHTML = `(${dataToDisplay.country})`;
    condition.innerHTML = dataToDisplay.condition;
    temp.lastChild.innerHTML = `${dataToDisplay.temp_c}&#x2103`;
    feelsLike.lastChild.innerHTML = `${dataToDisplay.feelslike_c}&#x2103`;
    humidity.lastChild.innerHTML = `${dataToDisplay.humidity}%`;
    windKph.lastChild.innerHTML = `${dataToDisplay.wind_kph}km/h`;

    // After setting parameters, show data
    setVisibility();
  };

  function displayError(error) {
    // First hide weather data
    hideVisibility();
    // Then display error message
    const errorMessage = document.querySelector(".error-message");
    errorMessage.innerHTML = error;
  }

  return { displayData, setVisibility, hideVisibility, displayError };
})();
