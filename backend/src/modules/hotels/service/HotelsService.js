"use strict";

const HotelsRepository = require('../repository/HotelsRepository');

/**
 * Clase del servicio encargada de realizar la logica de negocio del modulo
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class HotelsService extends global.app.core.classes.Service {
    /**
     * Constructor de la clase
     */
    constructor() {
        super(__filename);
        this._hotelsRepository = new HotelsRepository();
    }

    /**
     * Encargada de solicitar los datos al repositorio del modulo para
     * retornar los datos
     * @param {String} id - identificador del hotel a filtrar
     * @return {Promise<any>} Promesa del resultado del servicio
     */
    hotels(id) {
        return new Promise((resolve, reject) => {
            this._hotelsRepository.hotels(id)
                .then((result) => {
                    resolve(result);
                }, (err) => {
                    reject(err);
                });
        });
    }
}

module.exports = HotelsService;