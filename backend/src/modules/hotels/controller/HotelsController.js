"use strict";

const HotelsService = require('../service/HotelsService');

/**
 * Clase del controlador encargo de capturar y procesar los datos entrantes para
 * enviar el resultado del resultado realizado al servicio
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */

class HotelsController extends global.app.core.classes.Controller {
    /**
     * Constructor de la clase
     */
    constructor() {
        super(__filename);
        this._hotelsService = new HotelsService();
    }

    /**
     * Función del controlador que se de capturar la petición de solicitud
     * @param {String} id - identificador del hotel a filtrar
     * @return {Promise<any>} Promesa del resultado del controlador
     */
    hotels(id) {
        return new Promise((resolve, reject) => {
            this._hotelsService.hotels(id).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        });
    }
}

module.exports = HotelsController;