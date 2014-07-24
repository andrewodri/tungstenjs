export class ExampleController extends Controller {
	get defaults() {
		return Utility.merge(super.defaults, {
			selectors : {
				displayElement : '.display'
				,searchField : '.search-field'
				,searchButton : '.search-button'
			}
		});
	}

	get listeners() {
		return Utility.merge(super.listeners, [
			{ selector : '{selectors.searchButton} click', handler : this.displayArtist }
			,{ selector : 'click', handler : this.example }
		]);
	}

	initialize(element) {
		console.log('exampleController.initialize()');
	}

	displayArtist(event, element) {
		console.log('exampleController.displayArtist()');
		
		$(this.selectors.displayElement).view(
			ExampleView.render(
				ExampleModel.find({
					term : $(this.selectors.searchField).val()
				})
			)
		);
	}

	example(event) {
		console.log('exampleController.example()');
		
		event.stopPropagation();
	}
}
