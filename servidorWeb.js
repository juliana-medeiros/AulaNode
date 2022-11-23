//importando uma biblioteca http que já existe
var http = require('http');
var n = require('./primeiromodulo');
var dia = require('./moduloData');

//criando servidor
http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('Aula de Node.js <br>');
    res.write('Aluna: ');
    res.write(n.nome()+ '<br>');

    res.write('Data: ');
    res.write(dia.diaDaSemana()+ '<br>');

    //Finaliza o comando
    res.end('<br> Bom dia!');
}).listen(80);

