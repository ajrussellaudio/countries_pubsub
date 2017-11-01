class CountriesSelectView {
	constructor(){
		this.element = document.getElementById("countriesSelect");

		addEventListener("countriesDataReceived", this.render.bind(this));
	}

	render(event){
		event.detail.forEach((country, index) => {
			var option = document.createElement('option');
			option.value = index;
			option.innerText = country.name;
			this.element.appendChild(option);
		});
	}
}

export default CountriesSelectView;
