"use strict";

/**
 * Definiendo variables
 */
const log = global.app.core.libraries.log4js.getLogger(global.app.utils.module.changePathtoNameClass(__filename));
const path = require('path');
const http = require('http');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

/**
 * Clase que representa la estructura del express, para disponer los servicios
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class ExpressService extends global.app.core.classes.Service {
    /**
     * Constructor de la clase
     */
    constructor() {
        super(__filename);
    }

    /**
     * Función que realiza la configuración de express
     * @param {object} configGeneral - Objeto con la configuracion general en resources/assets.json
     */
    setup(configGeneral) {
        // todas las variables de entorno
        log.debug('Cargando configuracion de express');
        global.app.core.libraries.express = global.app.core.libraries.express;
        global.app.routerApp = global.app.core.libraries.express();
        global.app.router = global.app.core.libraries.express.Router();
        global.app.routerApp.set('port', configGeneral.core.libraries.express.port);
        //console.log(configGeneral.core.libraries.express.prefix);
        global.app.routerApp.use(logger('dev'));
        global.app.routerApp.use(methodOverride());
        global.app.routerApp.use(session({
            resave: true,
            saveUninitialized: true,
            secret: 'uwotm8'
        }));
        global.app.routerApp.use(bodyParser.json());
        global.app.routerApp.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization, Content-Length, X-Requested-With');
            if (req.method === 'OPTIONS') {
                res.send(200);
            } else {
                next();
            }
        });

        // Si genera error al cargar las rutas
        if ('development' === global.app.routerApp.get('env')) {
            global.app.routerApp.use(errorHandler());
        }

        global.app.routerApp.use(configGeneral.core.libraries.express.prefix, global.app.router);

        let server = http.createServer(global.app.routerApp);
        server.listen(global.app.routerApp.get('port'), function () {
            console.log('Escuchando Express server por el puerto ' + global.app.routerApp.get('port'));
        });
    }
}

module.exports = ExpressService;