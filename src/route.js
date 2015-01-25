export class Route {
	constructor() {
		throw new Error('Cannot instantiate static class Log');
	}

	static register(route, callback) {
		return this;
	}

	static register(route, conditions, callback) {
		// Condiotoins could be fitlers, names, class based callbacks 'before', 'as', 'uses', 'protocol'
		// Parameters can be options
		return this;
	}

	static pattern(parameter, pattern) {
		return this;
	}

	static filter(name, callback) {
		// Callback may be a clsure or an object with the controller callback
		// ResourceController should extend Controller and have an additional filter function
		return this;
	}

	static input() {
		return this;
	}

	static group(filters, callback) {
		// In addtion to standard/named filters, subdomains with wildcards can be passed 'domain'
		// Prefixes should be definable in the filters 'prefix'
		return this;
	}

	static where() {
		// Allows for the definition of multiple constraints {param: regexp}
		return this;
	}

	static when(pattern, name) {
		return this;
	}

	static model(name, model) {
		// When the name is matched as a parameter, lookup the whole model instance associated with the id and pass it along
		return this;
	}
}
