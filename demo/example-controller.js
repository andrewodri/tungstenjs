import {Controller} from '../src/controller';

import {ExampleModel} from './example-model';
import {ExampleView} from './example-view';

export class ExampleController extends Controller {
	get defaults() { return {
		selectors : {
			displayElement : '.display'
			,searchField : '.search-field'
			,searchButton : '.search-button'
		}
	};}

	get listeners() { return [
		{ selector : '{selectors.searchButton} click', handler : this.displayArtist }
		,{ selector : 'click', handler : this.example }
	];}

	initialize(element) {
		console.log('exampleController.initialize()');
	}

	displayArtist(event, element) {
		console.log('exampleController.displayArtist()');

		ExampleView.render(
			ExampleModel.find({
				term : document.querySelector(this.selectors.searchField).value
			}),
			this.selectors.displayElement
		);
	}

	example(event) {
		console.log('exampleController.example()');

		event.stopPropagation();
	}
}
