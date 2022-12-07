var http = require('http');
var fs = require('fs');
http.createServer(function (req, res){
    // err = erro
    fs.readFile('index.html', function(err, data){
        // para não travar o site e mostrar o erro
        res.writeHead(200, {'Content-Type': 'text/html'});
        //mostrar o site
        res.write(data);
        return res.end();
    });
}).listen(80);