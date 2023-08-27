import "./style.css";

import domManipulation from "./domManipulation";
import weatherApi from "./weatherApi";

const searchBtn = document.querySelector(".search");
searchBtn.addEventListener("click", async () => {
  // First fetch data from API
  weatherApi
    .loadData()
    .then(() => {
      // Then before show new data hide already displayed data
      domManipulation.hideVisibility();
      // Get fetched data
      const dataToDisplay = weatherApi.getData();
      // Display data to page
      domManipulation.displayData(dataToDisplay);
      // Now show new data
      domManipulation.setVisibility();
    })
    .catch((error) => {
      domManipulation.displayError(error);
    });
});
