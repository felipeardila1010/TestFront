"use strict";

/**
 * Se cargan y configuran las librerias necesarias para la ejecucion de los modulos
 */
const fs = require('fs');
const path = require('path');
let log = {};

/**
 * Clase que realiza la carga de los modulos globales de la aplicación
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */

class LoaderModulesService {
    /**
     * Constructor de la clase
     */
    constructor() {
        this.PATH_PROJECT = global.app.core.data.PATH_PROJECT;
        this.pathSrcModules = path.resolve(this.PATH_PROJECT, "src/modules");
    }

    /**
     * Función que realiza la carga dinamica de los modulos asignados en el config.json general
     * en el archivo de configuracion del modulo
     */
    setup() {
        let BootGeneral = {};
        let nameFolderCoreModule = "";
        log = global.app.core.libraries.log4js.getLogger(global.app.utils.module.changePathtoNameClass(__filename));
        log.debug('Iniciando la carga de modulos');
        let configGeneral = require(path.resolve(this.PATH_PROJECT, "resources/config.json"));
        log.trace(configGeneral.modules);
        /**
         * Cargando librerias asignadas por la carpeta resources
         */
        for (let nameModule in configGeneral.modules) {
            try {
                nameFolderCoreModule = path.resolve(this.pathSrcModules, nameModule, "Boot.js");
                if (fs.existsSync(nameFolderCoreModule)) {
                    BootGeneral = require(nameFolderCoreModule);
                    new BootGeneral().setup();
                }
            } catch (error) {
                log.error('Error en la carga de los modulos');
                throw (error);
            }
        }
        log.debug('Finalización de la carga de los modulos');
    }
}

module.exports = LoaderModulesService;