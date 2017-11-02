import Countries from './models/CountriesModel';
import AppView from './views/AppView';

window.addEventListener("load", function(){
	// Load the views
	new AppView();

	// Load the model
	new Countries("https://restcountries.eu/rest/v2/all");
});
