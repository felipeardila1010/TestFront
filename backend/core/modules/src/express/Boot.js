"use strict";

/**
 * Instancias de las clases a utilizar
 */
const ExpressService = require("./services/ExpressService");

/**
 * Clase encargada de configurar express
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class Boot extends global.app.core.classes.BootCore {
    /**
     * Constructor de la clase
     */
    constructor() {
        super(__filename);
        this._expressService = new ExpressService();
    }

    /**
     * Función de configuracion del modulo
     */
    setup(configGeneral) {
        configGeneral = JSON.parse(configGeneral);
        this._expressService.setup(configGeneral);
    }
}

module.exports = Boot;