export class Utility {
	constructor() {
		throw new Error('Cannot instantiate static class Utility');
	}

	static stringFormat(template, data) {
		return template.replace(/\$\{([^\{\}]+)\}/g, (match, key) => data[key]);
	}
}