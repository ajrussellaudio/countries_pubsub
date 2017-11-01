class CountriesDetailView {
	constructor(){
		this.element = document.getElementById("countriesDetail");

		document.addEventListener('selectedCountryChanged', this.render.bind(this));
	}

	render(event){
		const country = event.detail;
		this.element.innerHTML = '';

		const heading = document.createElement('h2');
		heading.innerText = country.name;
		this.element.appendChild(heading);
	}
}

export default CountriesDetailView;
