/**
** Servidor en NodeJs para la Aplicacion como alternativa para ejecutarlo con Asp .Net
**/
var static = require('node-static');

var fileServer = new static.Server('./IntranetIush');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(3000);