"use strict";

/**
 * Se cargan librerias necesarias en el sistema
 */
const path = require('path');

/**
 * Clase encargada para cargar los metodos de utileria en el sistema para modulos especificamente
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class UtilModuleService {
    /**
     * Constructor de la clase
     */
    constructor() {
        global.app.utils.module.changePathtoNameClass = this.changePathtoNameClass;
        global.app.utils.module.getNameModule = this.getNameModule;
    }

    /**
     * Función encargada de cambiar la ruta del archivo que se está trabajando al nombre de la clase,
     * para que sea mejor visible a los logs del sistema
     * @param {string} filename - Ruta del archivo
     * @returns {*} Retorna la ruta para mejor vistal usuario separada por puntos
     */
    changePathtoNameClass(filepath){
        if(filepath){
            return filepath.replace(global.app.core.data.PATH_PROJECT,'').split(path.sep).join('.');
        }
    }

    /**
     * Retorna nombre del modulo que se esté trabajando
     * @param {string} filepath - Nombre de la ruta del archivo
     * @return {string} Retorna un string con el nombre del modulo
     */
    getNameModule(filepath){
        if(filepath){
            return filepath.split(path.sep).pop().split('.').shift();
        }
    }
}

module.exports = UtilModuleService;