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
     * Obtiene los hoteles o el hotel a buscar
     * Encargada de solicitar los datos al repositorio del modulo para
     * retornar los datos
     * @param {String} id - identificador del hotel a filtrar
     * @return {Promise<any>} Promesa del resultado del servicio
     */
    get(id) {
        return new Promise((resolve, reject) => {
            this._hotelsRepository.get(id)
                .then((result) => {
                    resolve(result);
                }, (err) => {
                    reject(err);
                });
        });
    }

    /**
     * Inserta el hotel
     * Encargada de insertar los datos al repositorio del modulo para
     * retornar la respuesta
     * @param {Object} data - Datos del hotel a crear
     * @return {Promise<any>} Promesa del resultado del servicio
     */
    post(data) {
        return new Promise((resolve, reject) => {
            this._hotelsRepository.post(data)
                .then((result) => {
                    resolve(result);
                }, (err) => {
                    reject(err);
                });
        });
    }

    /**
     * Actualiza el hotel
     * Encargada de insertar los datos al repositorio del modulo para
     * retornar la respuesta
     * @param {Object} data - Datos del hotel a actualizar
     * @return {Promise<any>} Promesa del resultado del servicio
     */
    put(data) {
        return new Promise((resolve, reject) => {
            this._hotelsRepository.put(data)
                .then((result) => {
                    resolve(result);
                }, (err) => {
                    reject(err);
                });
        });
    }
}

module.exports = HotelsService;