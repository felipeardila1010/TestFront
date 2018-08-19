"use strict";

/**
 * Instancias de las clases a utilizar
 */
const MongoService = require("./services/MongoService");

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
        this._mongoService = new MongoService();
    }

    /**
     * Función de configuracion del modulo
     * @param {object} configGeneral - Objeto con la configuracion general en resources/config.json
     */
    setup(configGeneral) {
        configGeneral = JSON.parse(configGeneral);
        this._mongoService.setup(configGeneral);
    }
}

module.exports = Boot;