"use strict";

/**
 * Clase que representa la logica del repositorio con la conexion con la base de datos
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
const log = global.app.core.libraries.log4js.getLogger(global.app.utils.module.changePathtoNameClass(__filename));

class MongoRepository extends global.app.core.classes.Repository {
    /**
     * Constructor de la clase
     */
    constructor() {
        super(__filename);
    }

    /**
     * Función que realiza la configuración de mongodb
     * @param {object} configGeneral - Objeto con la configuracion general en resources/assets.json
     */
    connect(configGeneral) {
        let dataConfigMongo = configGeneral.core.libraries.mongoose;
        log.debug('Cargando configuracion de mongo');
        global.app.core.libraries.mongoose.connect(
            `mongodb://${dataConfigMongo.host}:${dataConfigMongo.port}/${dataConfigMongo.db}`);

        global.app.core.libraries.mongoose.connection.on('error', console.error.bind(console, 'Error: En la conexión de MongoDB'));
    }
}

module.exports = MongoRepository;