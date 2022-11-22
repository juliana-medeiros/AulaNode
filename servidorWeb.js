//importando uma biblioteca http que já existe
var http = require('http');

//criando servidor
http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.end('<center><h2>Boa tarde!</h2></center>');
}).listen(80);

