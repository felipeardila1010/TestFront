"use strict";

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
        const Core = require("./bo/Core");
        new Core();
        const BootCore = require("./bo/BootCore");
        new BootCore();
        const Controller = require("./bo/Controller");
        new Controller();
        const Service = require("./bo/Service");
        new Service();
        const Repository = require("./bo/Repository");
        new Repository();
    }

    /**
     * Metodo encargado de preparar la configuración de las clases
     */
    setup() {
    }
}

module.exports = Boot;