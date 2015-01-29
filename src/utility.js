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
}
