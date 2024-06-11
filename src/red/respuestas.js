//este codigo se encarga de darle una estructura a nuestros archivos json
//cada export es el tipo de respuesta enviada en el archivo json
exports.success = function (req, res, mensaje, status) {
    const statusCode = status || 200;
    const  mensajeOk =  mensaje || '';
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: mensajeOk
    });
}

exports.error = function (req, res, mensaje, status) {
    const statusCode = status || 500;
    const  mensajeError =  mensaje || 'Error  interno';    
    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: mensajeError
    });
}

exports.clima = function (req, res, mensaje, status) {
    const statusCode = status || 'fuera';
    const  mensajeC =  mensaje || 'sin datos';    
    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: mensajeC
    });
}