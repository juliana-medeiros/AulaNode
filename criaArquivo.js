var fs = require('fs');

fs.appendFile('novoArquivo.txt', 'criaArquivo', function (err){
    if (err) throw err;
    console.log('Salvo!');
});