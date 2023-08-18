import submitHandler from "../Form logic/formLogic";

const selectLocation = () => {
  const locationDiv = document.createElement("div");

  const locationLabel = document.createElement("label");
  locationLabel.setAttribute("for", "location");
  locationLabel.textContent = "Location: ";

  const locationInput = document.createElement("input");
  locationInput.setAttribute("type", "text");
  locationInput.setAttribute("id", "location");

  const submit = document.createElement("button");
  submit.setAttribute("id", "submit");
  submit.textContent = "Submit";
  submit.addEventListener("click", submitHandler);

  locationDiv.appendChild(locationLabel);
  locationDiv.appendChild(locationInput);

  locationDiv.appendChild(submit);

  return locationDiv;
};

const loadHomePage = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("header");

  const title = document.createElement("h1");

  title.textContent = "Weather App";

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("weather-info");

  content.appendChild(header);
  content.appendChild(infoDiv);

  header.appendChild(title);

  content.appendChild(selectLocation());
};

export default loadHomePage;
