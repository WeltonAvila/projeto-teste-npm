'use strict';

const http = require('http'),
	port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(filtro(req));
});
server.listen(port,()=>{
  console.log(`Server running`);
});

function filtro(req){
	switch (req.method) {
		case 'GET':
			return get(req.url)
			break;

			case 'PUT':
			return get(req.url)
			break;

			case 'DELETE':
			return get(req.url)
			break;

			case 'POST':
			return del(req.url)
			break;

		default:

	}
	return req.url + " " + req.method
}

function get(url){
	return "A url " + url + " foi chamada GET"
}

function post(url){
	return "A url " + url + " foi chamada POST"

}
