import {Model} from '../src/model';

export class ExampleModel extends Model {
	static get services() {
		return {
			create : { method : 'POST', uri : 'https://itunes.apple.com/search?term=${term}', format : 'jsonp' },
			find : { method : 'GET', uri : 'https://itunes.apple.com/search?term=${term}', format : 'jsonp' },
			update : { method : 'PUT', uri : 'https://itunes.apple.com/search?term=${term}', format : 'jsonp' },
			delete : { method : 'DELETE', uri : 'https://itunes.apple.com/search?term=${term}', format : 'jsonp' },
		};
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
