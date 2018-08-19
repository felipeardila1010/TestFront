"use strict";
/**
 * Instancias de las clases a utilizar
 */
const MongoRepository = require("../repositories/MongoRepository");

/**
 * Clase que representa la logica del servicio de mongodb para
 * establecer la conexion a la base de datos definida en el resources principal
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
const path = require('path');
const log = global.app.core.libraries.log4js.getLogger(global.app.utils.module.changePathtoNameClass(__filename));

class MongoService extends global.app.core.classes.Service {
    /**
     * Constructor de la clase
     */
    constructor() {
        super(__filename);
        this._mongoRepository = new MongoRepository();
    }

    /**
     * Función que realiza la configuración de mongodb
     * @param {object} configGeneral - Objeto con la configuracion general en resources/assets.json
     */
    setup(configGeneral) {
        this._mongoRepository.connect(configGeneral);
    }
}
module.exports = MongoService;