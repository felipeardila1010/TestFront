"use strict";
/**
 * Clase que realiza la carga del modulo
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */

/**
 * Grupo de variables globales de la clase
 */
const log = global.app.core.libraries.log4js.getLogger(global.app.utils.module.changePathtoNameClass(__filename));
const HotelsRestController = require('./controller/HotelsRestController');

class Boot extends global.app.core.classes.BootCore {
    /**
     * Constructor de la clase
     */
    constructor() {
        super(__filename);
        try {
            this._hotelsRestController = new HotelsRestController();
        } catch (error) {
            log.error(error);
        }
    }

    /**
     * Función de configuracion del modulo
     */
    setup() {
        log.info("Configurando modulo de Hotels");
        this._hotelsRestController.createRoutes();
    }
}

module.exports = Boot;