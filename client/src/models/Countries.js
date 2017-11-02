class Countries {
	constructor(url){
		// ...and the array of countries that should come back...
		this.countries = [];

		// Fetch the countries data from the API
		this.fetchData(url);

		// Listen for the select list change event,
		document.addEventListener("countriesSelectChanged", this.dispatchSelectedCountry.bind(this));
	}

	fetchData(url){
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url);
		xhr.addEventListener("load", () => {
			this.countries = JSON.parse(xhr.responseText);
			this.dispatchAllCountries();
		});
		xhr.send();
	}

	dispatchAllCountries(response){
		// create & dispatch a new custom event, containing all country info
		const event = new CustomEvent("/countries/all", {
			detail: this.countries
		});
		document.dispatchEvent(event);
	}

	dispatchSelectedCountry(event){
		// create & dispatch a new custom event, containing the selected country
		const index = event.detail;
		const newEvent = new CustomEvent("/countries/selected", {
			detail: this.countries[index]
		});
		document.dispatchEvent(newEvent);
	}
}

export default Countries;
