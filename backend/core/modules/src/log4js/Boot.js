"use strict";

/**
 * Instancias de las clases a utilizar
 */
const Log4jsService = require("./services/Log4jsService");

/**
 * Clase encargada de configurar el log4js
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class Boot extends global.app.core.classes.BootCore {
    /**
     * Constructor de la clase
     */
    constructor() {
        super(__filename);
        this._log4JsService = new Log4jsService();
    }

    /**
     * Función de configuracion del modulo
     * @param {object} configGeneral - Objeto con la configuracion general en resources/config.json
     */
    setup(configGeneral) {
        this._log4JsService.setup();
    }
}

module.exports = Boot;