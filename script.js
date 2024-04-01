const countries = {
  USA: ["California", "New York", "Texas"],
  Canada: ["Ontario", "Quebec", "British Columbia"],
  UK: ["England", "Scotland", "Wales"],
  Pakistan: ["Punjab", "Sindh", "Khyber Pakhtunkhwa"],
};

const states = {
  California: ["Los Angeles", "San Francisco", "San Diego"],
  "New York": ["New York City", "Buffalo", "Rochester"],
  Texas: ["Houston", "Dallas", "Austin"],
  Ontario: ["Toronto", "Ottawa", "Hamilton"],
  Quebec: ["Montreal", "Quebec City", "Gatineau"],
  "British Columbia": ["Vancouver", "Victoria", "Kelowna"],
  England: ["London", "Manchester", "Birmingham"],
  Scotland: ["Glasgow", "Edinburgh", "Aberdeen"],
  Wales: ["Cardiff", "Swansea", "Newport"],
  Punjab: ["Lahore", "Faislabad"],
  Sindh: ["Karachi", "Hydrabad"],
  "Khyber Pakhtunkhwa": ["Peshawar", "Naran"],
};

function populateCountries() {
  const optionsOfCountires = Object.keys(countries);
  const selectCountry = document.getElementById("country"); // parent elemnt
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select Country";
  selectCountry.appendChild(defaultOption);

  for (const option of optionsOfCountires) {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    selectCountry.appendChild(optionElement);
  }
}

function populateStates() {
  const selectedCountry = document.getElementById("country").value;
  const optionsOfStates = countries[selectedCountry];
  const selectState = document.getElementById("state"); // parent elemnt
  selectState.innerHTML = "";
  document.getElementById("city").innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select State";
  selectState.appendChild(defaultOption);

  for (const option of optionsOfStates) {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    selectState.appendChild(optionElement);
  }
}

function populateCities() {
  const selectedState = document.getElementById("state").value;
  const optionsOfCities = states[selectedState];
  const selectCity = document.getElementById("city"); // parent elemnt
  selectCity.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select City";
  selectCity.appendChild(defaultOption);

  for (const option of optionsOfCities) {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    selectCity.appendChild(optionElement);
  }
}
