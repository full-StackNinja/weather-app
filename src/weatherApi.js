export default (function weatherApi() {
  const weatherAPIKey = process.env.WEATHER_API_KEY;
  const locationData = {};
  // Fetch data from API
  async function loadData() {
    const searchField = document.querySelector("#location-field");
    const location = searchField.value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${location}`;
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      locationData.location = data.location;
      locationData.current = data.current;
    } else {
      throw new Error('Requested Location Not Found')
    }
  }

  const getData = function () {
    const dataToDisplay = {};
    dataToDisplay.name = locationData.location.name;
    dataToDisplay.country = locationData.location.country;
    dataToDisplay.temp_c = locationData.current.temp_c;
    dataToDisplay.feelslike_c = locationData.current.feelslike_c;
    dataToDisplay.condition = locationData.current.condition.text;
    dataToDisplay.wind_kph = locationData.current.wind_kph;
    dataToDisplay.humidity = locationData.current.humidity;

    return dataToDisplay;
  };
  return {
    loadData,
    getData,
  };
})();
