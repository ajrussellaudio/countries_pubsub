import Countries from './models/countries';
import AppView from './views/AppView';

window.addEventListener("load", function(){
	new Countries();
	new AppView();
});
