/**
** Servidor en NodeJs para la Aplicacion como alternativa para ejecutarlo con Asp .Net
**/
var static = require('node-static');

var fileServer = new static.Server('./IntranetIush');

var puerto = normalizePort(process.env.PORT || '3000');

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(puerto).on('listening', function(){
	console.log("Intranet de IUSH corriendo en el puerto: " + puerto);
});