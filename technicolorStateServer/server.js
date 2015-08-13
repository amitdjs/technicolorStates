var http = require('http');
/*var req=require('request');*/
var data = {};
http.createServer(function (req, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*'
    });

    if(req.url.indexOf('login') > -1) {
    	console.log(data)
        response.end('yes')
	}
    if(req.url.indexOf('states') > -1) {
        console.log(0)
        response.end("['state1', 'state2', 'state3', 'state4']")
    }

	else {
		response.end();
	}
}).listen(3000);
