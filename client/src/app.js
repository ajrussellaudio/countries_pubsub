import Countries from './models/countries.js';

window.addEventListener("load", function(){
	var countriesModel = new Countries();

	window.addEventListener("countriesDataReceived", function(event){
		console.log(event);
	});
});
