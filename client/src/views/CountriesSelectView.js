class CountriesSelectView {
	constructor(){
		// Grab a reference to the element
		this.element = document.getElementById("countriesSelect");

		// Render the options when we get an array of countries
		document.addEventListener("/countries/all", this.render.bind(this));

		// attach an event listener for when the selected option changes
		this.element.addEventListener("change", this.handleChange.bind(this));
	}

	render(event){
		event.detail.forEach((country, index) => {
			const option = document.createElement('option');
			option.value = index;
			option.innerText = country.name;
			this.element.appendChild(option);
		});
	}

	handleChange(event){
		// When the selected option changes, tell the rest of the app
		const newEvent = new CustomEvent("countriesSelectChanged", {
			detail: event.target.value
		});
		document.dispatchEvent(newEvent);
	}
}

export default CountriesSelectView;
