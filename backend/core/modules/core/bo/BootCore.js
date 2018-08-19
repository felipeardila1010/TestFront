"use strict";

/**
 * Clase del Core de Boot que captura la data a crear
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class BootCore extends global.app.core.classes.Core {

    /**
     * Constructor de la clase
     * @param {string} filename ruta del archivo que hereda esta clase
     */
    constructor(filename) {
        super(filename);
        global.app.core.classes.BootCore = BootCore;
    }
}

module.exports = BootCore;