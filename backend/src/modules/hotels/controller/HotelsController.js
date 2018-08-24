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
     * Obtiene los hoteles o el hotel a buscar
     * Encargada de solicitar los datos al servicio del modulo para
     * retornar los datos
     * @param {String} id - identificador del hotel a filtrar
     * @return {Promise<any>} Promesa del resultado del controlador
     */
    get(id) {
        return new Promise((resolve, reject) => {
            this._hotelsService.get(id).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        });
    }

    /**
     * Inserta el hotel
     * Encargada de solicitar los datos al servicio del modulo para
     * retornar los datos
     * @param {Object} data - Datos del hotel a crear
     * @return {Promise<any>} Promesa del resultado del controlador
     */
    post(data) {
        return new Promise((resolve, reject) => {
            this._hotelsService.post(data).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        });
    }

    /**
     * Actualiza el hotel
     * Encargada de solicitar los datos al servicio del modulo para
     * retornar los datos
     * @param {Object} data - Datos del hotel a actualizar
     * @return {Promise<any>} Promesa del resultado del controlador
     */
    put(data) {
        return new Promise((resolve, reject) => {
            this._hotelsService.put(data).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        });
    }
}

module.exports = HotelsController;