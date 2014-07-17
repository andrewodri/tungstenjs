export class ExampleView extends View {
	static template(data) {
		console.log('exampleView.template()');
		
		return `
			<h2>
				<span style="color: #808080;">${data[0].artistName}</span> ${data[0].trackName}
			</h2>
		`;
	}
}
