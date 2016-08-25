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

	static request(uri, method = 'GET', format = 'json', data = {}) {
		if(format == 'json'){
			return new Promise((resolve, reject) => {
				let xhr = new XMLHttpRequest();

				xhr.open(
					format,
					format == 'POST' ? uri : Utility.stringFormat(uri, data),
					true,
				);

				xhr.setRequestHeader('Content-type', 'application/json');

				xhr.onreadystatechange = () => {
					if(xhr.readyState != 4){ return; }

					if(xhr.status == 200){
						resolve(data);
					}else if(xhr.status >= 400){
						reject(new Error(xhr.statusText));
					}
				};

				xhr.send(method == 'POST' ? data : undefined);
			});
		}else if(format == 'jsonp'){
			return new Promise((resolve, reject) => {
				let scriptElement = document.createElement('script');

				let timeout = setTimeout(() => reject(new Error('JSONP request timed out')), 30000);

				let callback = 'callback' + (new Date()).getTime().toString();
				window[callback] = (data) => {
					clearTimeout(timeout);

					if(scriptElement && scriptElement.parentNode){
						scriptElement.parentNode.removeChild(scriptElement);
					}

					resolve(data);
				};

				scriptElement.src = Utility.stringFormat(uri, data) + '&callback=' + callback;
				scriptElement.async = true;
				document.getElementsByTagName('head')[0].appendChild(scriptElement);
			});
		}
	}
}
