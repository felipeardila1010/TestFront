"use strict";

/**
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class Core {

    /**
     * Constructor de la clase
     */
    constructor(filename) {
        global.app.core.classes.Core = Core;
        this._module = global.app.utils.module.getNameModule(filename);
    }
}

module.exports = Core;