import "./style.css";

import domManipulation from "./domManipulation";
import weatherApi from "./weatherApi";

const searchBtn = document.querySelector(".search")
searchBtn.addEventListener("click", async () => {
  await weatherApi.loadData()
  const dataToDisplay = await weatherApi.getData()

  domManipulation.displayData(dataToDisplay)

  

})

