export class Utility {
	constructor() {
		throw new Error('Cannot instantiate static class Utility');
	}

	static generateGuid() {
		let four = () => {return (((1+Math.random())*0x10000)|0).toString(16).substring(1);}
		return `${four()}${four()}-${four()}-${four()}-${four()}-${four()}${four()}${four()}`;
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
