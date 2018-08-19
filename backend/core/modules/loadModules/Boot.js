"use strict";

/**
 *Sección de importación de dependencias
 */
const LoaderConfigurationService = require('./services/LoaderConfigurationService');
const LoaderModuleLibraryService = require('./services/LoaderGlobalLibrariesService');
const LoaderModulesService = require('./services/LoaderModulesService');

/**
 * Clase que realiza la carga de las librerias necesarias para el proyecto inyectandolas como variables para su uso en
 * el contexto del proyecto, adicionalmente realiza la carga inicial los modulos del proyecto
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class Boot {
    /**
     * Constructor de la clase
     */
    constructor() {
        this._loaderConfigurationService = new LoaderConfigurationService();
        this._loaderModuleLibraryService = new LoaderModuleLibraryService();
        this._loaderModulesService = new LoaderModulesService();

    }

    /**
     * Función que realiza el flujo de trabajo de ejecucion y de definicion
     * de todas las dependencias principales y preconfiguradas del proyecto
     */
    setup() {
        this._loaderModuleLibraryService.setup().then((result)=>{
            this._loaderModulesService.setup();
        },(err)=>{
            console.error('Error: En la carga de los modulos transversales');
        });
    }
}

module.exports = Boot;