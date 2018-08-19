"use strict";

/**
 * Se cargan librerias necesarias en el sistema
 */
const path = require('path');

/**
 * Grupo de constantes del sistema
 */

/**
 * Clase que realiza la configuracion de los modulos transversales al sistema, se incluir la configuracion
 * general de los servicios
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */

class LoaderConfigurationService {
    /**
     * Constructor de la clase
     */
    constructor() {
        this.buildConfigLibraries();
    }

    /**
     * Metodo encargado de asignar las librerias cargadas en el archivo definido como
     * default en el sistema, asignado en la carpeta resources del app
     */
    buildConfigLibraries() {
        let pathConfigGeneral = path.resolve(global.app.core.data.PATH_PROJECT, "resources/config.json");
        let configGeneral = require(pathConfigGeneral);
        global.app.core.libraries = configGeneral.core.libraries;
    }
}

module.exports = LoaderConfigurationService;