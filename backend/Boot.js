"use strict";

/**
 * Se cargan librerias necesarias en el sistema
 */
const path = require('path');

/**
 * Clase Boot encargada de definir la estructura de los archivos en el global y llamar la carga de
 * modulos necesario para el sistema
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class Boot {
    /**
     * Constructor de la clase
     * Carga las librerias definidas en el archivo assets de la carpeta resources para guardarlas en las variables globales
     * y posteriormente llamar las configuraciones de cada libreria.
     */
    constructor() {
        this.setupGlobal();
    }

    /**
     * Definición de las variables en la aplicación
     */
    setupGlobal() {
        global.app = {
            configuration: {
                modules: {}
            },
            core: {
                data: {
                    PATH_PROJECT: path.join(__dirname + path.sep)
                },
                classes: {},
                libraries: {}
            },
            exception: {},
            modules: {},
            utils: {},
            router: {},
            routerApp: {}
        };
    }

    /**
     * Función encargada de cargar los elementos del sistema en su orden especifico
     */
    setup() {
        const UtilsBoot = require('./core/modules/utils/Boot');
        new UtilsBoot().setup();
        const CoreBoot = require('./core/modules/core/Boot');
        new CoreBoot().setup();
        const LoaderModuleBoot = require('./core/modules/loadModules/Boot');
        new LoaderModuleBoot().setup();
    }
}

module.exports = Boot;