"use strict";

/**
 * Clase que representa la estructura del logger, permitiendo realizar la
 * carga de las configruaciones realizadas en el archivo assets.json
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class Log4JsService extends global.app.core.classes.Service {
    /**
     * Constructor de la clase
     */
    constructor() {
        super(__filename);
        this.config = require('../resources/config.json');
    }

    /**
     * Función que realiza la configuración del logger
     * @param {object} configGeneral - Objeto con la configuracion general en resources/assets.json
     */
    setup(configGeneral) {
        global.app.core.libraries.log4js.configure(this.config);
        const log = global.app.core.libraries.log4js.getLogger(global.app.utils.module.changePathtoNameClass(__filename));
        log.debug('Cargando configuracion de log4s');
    }
}
module.exports = Log4JsService;