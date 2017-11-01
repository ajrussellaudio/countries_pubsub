class Countries {
	constructor(){
		this.url = "https://restcountries.eu/rest/v2/all";
		this.countries = [];
		this.fetchData();
	}

	fetchData(){
		const xhr = new XMLHttpRequest();
		xhr.open("GET", this.url);
		xhr.addEventListener("load", () => {
			this.countries = JSON.parse(xhr.responseText);
			this.emit();
		});
		xhr.send();
	}

	emit(response){
		const event = new CustomEvent("countriesDataReceived", {
			detail: this.countries
		});
		window.dispatchEvent(event);
	}
}
export default Countries;
