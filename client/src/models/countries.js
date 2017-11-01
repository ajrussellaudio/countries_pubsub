class Countries {
	constructor(){
		// Instance variables to hold the API URL...
		this.url = "https://restcountries.eu/rest/v2/all";

		// ...and the array of countries that should come back...
		this.countries = [];

		// Fetch the countries data from the API
		this.fetchData();

		// Listen for the select list change event,
		document.addEventListener("countriesSelectChanged", this.dispatchSelectedCountry.bind(this));
	}

	fetchData(){
		const xhr = new XMLHttpRequest();
		xhr.open("GET", this.url);
		xhr.addEventListener("load", () => {
			this.countries = JSON.parse(xhr.responseText);
			this.dispatchAllCountries();
		});
		xhr.send();
	}

	dispatchAllCountries(response){
		// create & dispatch a new custom event, containing all country info
		const event = new CustomEvent("countriesDataReceived", {
			detail: this.countries
		});
		document.dispatchEvent(event);
	}

	dispatchSelectedCountry(event){
		// create & dispatch a new custom event, containing the selected country
		const index = event.detail;
		const newEvent = new CustomEvent("selectedCountryChanged", {
			detail: this.countries[index]
		});
		document.dispatchEvent(newEvent);
	}
}

export default Countries;
