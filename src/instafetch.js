const http = require('https');

let promise_url = (url) => {
		return new Promise((resolve, reject) => {
		const request = http.get(url, response => {
			if (response.statusCode < 200 || response.statusCode > 299) {
		       reject(new Error('Failed to load page, status code: ' + response.statusCode));
			}
		  const body = [];

		  response.on('data', (chunk) => body.push(chunk));
		  response.on('end', () => resolve(body.join('')));
		});
		request.on('error', (err) => reject(err))
	})
}

exports.user = (name) => {
	const url = `https://www.instagram.com/${name}/?__a=1`;
	return promise_url(url); 
}

exports.users = (keyword) => {
	const url =  `https://www.instagram.com/web/search/topsearch/?query=${keyword}`;
	return promise_url(url);
}

