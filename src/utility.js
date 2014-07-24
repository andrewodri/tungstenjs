export class Utility {
	constructor() {
		throw new Error('Cannot instantiate static class Utility');
	}

	static stringFormat(template, data) {
		return template.replace(/\$\{([^\{\}]+)\}/g, (match, key) => data[key]);
	}

	static merge(first, second) {
		if(first instanceof Object && second instanceof Object){
			return Object.assign(first, second);
		}else if(first instanceof Array && second instanceof Array){
			return first.concat(second);
		}else{
			throw new Error('Cannot merge incompatible types in class Utility');
		}
	}
}
