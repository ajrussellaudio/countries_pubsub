import CountriesSelectView from './CountriesSelectView';
import CountriesDetailView from './CountriesDetailView';

class AppView {
	constructor(){
		this.render();
	}

	render(){
		new CountriesSelectView();
		new CountriesDetailView();
	}
}

export default AppView;
