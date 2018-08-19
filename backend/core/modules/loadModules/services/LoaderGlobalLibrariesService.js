"use strict";

/**
 * Se cargan y configuran las librerias de logs, fs y path por primera vez en el sistema para que la logica de la clase
 * cargue las funcionalidades y configuren todas las librerias predefinidas.
 */
const fs = require('fs');
const path = require('path');
const log4js = require('log4js');
log4js.configure(require('./../../src/log4js/resources/config'));
const log = log4js.getLogger(global.app.utils.module.changePathtoNameClass(__filename));
const configGeneral = JSON.stringify(require('../../../../resources/config.json'));

/**
 * Clase que realiza la carga de las dependencias globales de la aplicación
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */

class LoaderGlobalLibrariesService {
    /**
     * Constructor de la clase
     * Carga las librerias definidas en el archivo assets de la carpeta resources para guardarlas en las variables globales
     * y posteriormente llamar las configuraciones de cada libreria.
     */
    constructor() {
        this._libraries = this.getLibraries();
        this.PATH_PROJECT = global.app.core.data.PATH_PROJECT;
        this.pathSrcCoreModules = path.resolve(this.PATH_PROJECT, "core/modules/src");
    }

    /**
     * Función que realiza la carga dinamica de librerias definidas
     * en el archivo de configuracion del modulo
     */
    setup() {
        return new Promise((resolve, reject) => {
            log.debug('Iniciando la carga de librerias globales');
            let BootGeneral = {};
            let mainModule = {};

            /**
             * Cargando librerias asignadas por la carpeta resources
             */
            for (let nameCoreModule in this._libraries) {
                try {
                    let nameFolderCoreModule = path.resolve(this.pathSrcCoreModules, nameCoreModule, "Boot.js");
                    if (fs.existsSync(nameFolderCoreModule)) {
                        mainModule = require(nameCoreModule);
                        this.setLibrary(nameCoreModule, mainModule);
                        BootGeneral = require(nameFolderCoreModule);
                        new BootGeneral().setup(configGeneral);
                    }
                } catch (error) {
                    log.error('Error en la carga de las librerias globales');
                    reject();
                }
            }
            resolve();
            log.debug('Finalización de la carga de librerias globales');
        });
    }

    getLibraries() {
        return global.app.core.libraries;
    }

    setLibrary(nameCoreModule, mainModule) {
        global.app.core.libraries[nameCoreModule] = mainModule;
    }
}

module.exports = LoaderGlobalLibrariesService;