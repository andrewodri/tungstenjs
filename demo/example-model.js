export class ExampleModel extends Model {
	static get services() {
		return super.services.merge({
			create : { verb : 'POST', uri : 'https://itunes.apple.com/search?term=${term}', format : 'jsonp' }
			,find : { verb : 'GET', uri : 'https://itunes.apple.com/search?term=${term}', format : 'jsonp' }
			,update : { verb : 'PUT', uri : 'https://itunes.apple.com/search?term=${term}', format : 'jsonp' }
			,delete : { verb : 'DELETE', uri : 'https://itunes.apple.com/search?term=${term}', format : 'jsonp' }
		});
	}

	static filter(data) {
		console.log('ExampleModel.filter()');
		
		if(data.results instanceof Array){
			return data.results;
		}else{
			throw new Error('Could not filter results of non-array in class ExampleModel');
		}
	}
}
