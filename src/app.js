//en este javascript llamamos a nuestras rutas
//también declaramos nuestros archivos que utilizaremos
//declaramos una constante weather el cual trae el archivo rutas
//con app use creamos una ruta, en la primera parte antes de la coma ingresamos nuestra ruta
//en la segunda parte despues de la coma llamamos a nuestro modulo rutas
//dentro de ruta llamamos a nuestro mensaje a enviar
const express = require('express');
const config = require('./config');

const weather =  require('./modules/weather/rutas')

const app = express();

//configuración
app.set('port', config.app.port)

//rutas
app.use('/api/weather', weather)

module.exports = app;