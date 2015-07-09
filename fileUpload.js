# NodeJS

var formi = require('formidable'),
	http = require('http'),
	sys = require('sys');

http.createServer(function(req, res){
	if(req.url == '/upload' && req.method.toLowerCase() == 'post'){
		var form = new formi.IncomingForm();
		form.parse(req, function(error, fields, files){
			res.writeHead(200, {'content-type': 'text/plain'});
			res.write('received upload: \n\n');
			res.end(sys.inspect({fields: fields, file: files}));
		
		});
		return;
	}
	
	res.writeHead(200, {'content-type': 'text/html'});
	res.end(
	   '<form action="/upload" enctype="multipart/form-data"'+
	   'method="post">'+
	   '<input type="text" name="title"><br>'+
	   '<input type="file" name="upload" multiple="multiple">'+
	   '<input type="submit" value="upload">'+
	   '</form>'
	);
}).listen(3001);
