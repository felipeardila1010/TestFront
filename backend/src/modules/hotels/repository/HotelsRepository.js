"use strict";

const log = global.app.core.libraries.log4js.getLogger(global.app.utils.module.changePathtoNameClass(__filename));
const HotelSchema = require('./schema/HotelSchema');

/**
 * Clase del repositorio del modulo que realiza la logica para repositorios externos
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class HotelsRepository extends global.app.core.classes.Repository {

    /**
     * Constructor de la clase
     */
    constructor() {
        super(__filename);
        this.HotelModel = global.app.core.libraries.mongoose.model('Hotel', HotelSchema.build());
    }


    /**
     * Encargado de capturar el mock de hotels para obtener o filtrar el resultado
     * @param {String} id - identificador del hotel a filtrar
     * @return {Promise<any>} Promesa del resultado
     */
    get(id) {
        return new Promise((resolve, reject) => {
            try {
                if (id != null) {
                    resolve(this.HotelModel.find({id: id}));
                } else {
                    resolve(this.HotelModel.find());
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Inserta el hotel
     * @param {Object} data - Datos del hotel a crear
     * @returns {Promise<any>}
     */
    post(data) {
        return new Promise((resolve, reject) => {
            const hotelNew = new this.HotelModel(data);

            hotelNew.save((error) => {
                if (error) {
                    log.error(handleError(error));
                    reject(handleError(error));
                }
                log.info('Hotel guardado con éxito');
            });

            resolve(hotelNew.find());
        });
    }

    /**
     * Actualiza el hotel
     * @param {Object} data - Datos del hotel a actualizar
     * @returns {Promise<any>}
     */
    put(data) {
        return new Promise((resolve, reject) => {
            console.log(data);
            const hotelNew = new this.HotelModel(data);
            console.log(hotelNew.id);
            hotelNew.update({id: hotelNew.id},{ '$set': { name: 'jason bourne' }},{ multi: true },(error) => {
                if (error) {
                    log.error(handleError(error));
                    reject(handleError(error));
                }
                log.info('Hotel actualizado con éxito');
            });

            resolve(hotelNew.find());
        });
    }
}

module.exports = HotelsRepository;