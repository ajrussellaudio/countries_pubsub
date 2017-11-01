class CountriesSelectView {
	constructor(){
		this.element = document.getElementById("countriesSelect");
		this.element.addEventListener("change", this.handleChange.bind(this));

		document.addEventListener("/countries/all", this.render.bind(this));
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
		const newEvent = new CustomEvent("countriesSelectChanged", {
			detail: event.target.value
		});
		document.dispatchEvent(newEvent);
	}
}

export default CountriesSelectView;
