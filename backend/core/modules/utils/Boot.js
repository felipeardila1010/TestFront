"use strict";

/**
 * Carga de instancias de las clases a utilizar
 */
const UtilModuleService = require("./services/UtilModuleService");

/**
 * Clase encargada de invocar las clases definiendo un patron de creacional
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class Boot {
    /**
     * Constructor de la clase
     */
    constructor() {
        global.app.utils.module = {};
        this._utilModuleService = new UtilModuleService();
    }

    /**
     * Metodo encargado de preparar la configuración de las clases
     */
    setup() {
        this._utilModuleService.changePathtoNameClass();
    }
}

module.exports = Boot;