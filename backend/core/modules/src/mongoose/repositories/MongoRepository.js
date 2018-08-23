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

        /** Se captura usuario y contraseña para definir estructura de conexión **/
        let password = (dataConfigMongo.password != null) ? dataConfigMongo.password : '';
        let userPassword = (dataConfigMongo.user != null) ? `${dataConfigMongo.user}:${password}@` : '';

        try {
            global.app.core.libraries.mongoose.connect(
                `mongodb://${userPassword}${dataConfigMongo.host}:${dataConfigMongo.port}/${dataConfigMongo.db}`,
                {useNewUrlParser: true});

            global.app.core.libraries.mongoose.connection.on('error', console.error.bind(console, 'Error: En la conexión de MongoDB'));

            global.app.core.libraries.mongoose.connection.once('open', () => {
                log.info(`Conexión exitosa a la base de datos ${dataConfigMongo.database} en MongoDB`);
            });
        } catch (error) {
            log.error(`Error: En la conexión a la base de datos de Mongo.`);
            log.error(error);
        }
    }
}

module.exports = MongoRepository;