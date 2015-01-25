export class Log {
	// http://tools.ietf.org/html/rfc5424

	constructor() {
		throw new Error('Cannot instantiate static class Log');
	}

	static get enabled() {
		return Log.isEnabled;
	}

	static set enabled(isEnabled) {
		Log.isEnabled = isEnabled;
	}

	static debug(data) {
		// 7 Debug: debug-level messages
		return console.log(data);
	}

	static info(data) {
		// 6 Informational: informational messages
		return console.log(data);
	}

	static notice(data) {
		// 5 Notice: normal but significant condition
		return console.log(data);
	}

	static warning(data) {
		// 4 Warning: warning conditions
		return console.log(data);
	}

	static error(data) {
		// 3 Error: error conditions
		return console.log(data);
	}

	static critical(data) {
		// 2 Critical: critical conditions
		return console.log(data);
	}

	static alert(data) {
		// 1 Alert: action must be taken immediately
		return console.log(data);
	}

	static emergency(data) {
		// 0 Emergency: system is unusable
		return console.log(data);
	}
}
