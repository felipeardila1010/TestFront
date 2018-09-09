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
                if (id !== null) {
                    resolve(this.HotelModel.findOne({id: id}));
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
            hotelNew.save().then(response => {
                log.info('Hotel guardado con éxito');
                resolve(response);
            }).catch(error => {
                log.error(error);
                reject({status: 204, message: error});
            });
        });
    }

    /**
     * Actualiza el hotel
     * @param {Object} data - Datos del hotel a actualizar
     * @returns {Promise<any>}
     */
    put(data) {
        return new Promise((resolve, reject) => {
            let hotelNew = new this.HotelModel(data);
            this.get(hotelNew.id).then(responseGet => {
                if (responseGet.length > 0) {
                    responseGet = responseGet[0];
                    hotelNew = new HotelSchema().update(responseGet, hotelNew);
                    hotelNew.save().then(response => {
                        log.info('Hotel actualizado con éxito');
                        resolve(response);
                    }).catch(error => {
                        log.error(error);
                        reject({status: 204, message: error});
                    });
                } else {
                    log.info('No existe el id a actualizar');
                    reject({status: 409, message: ''})
                }
            }).catch(error => {
                log.error(error);
                reject({status: 204, message: error});
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this.get(id).then(responseGet => {
                if (responseGet.length > 0) {
                    this.HotelModel.deleteOne({id: responseGet[0].id}).then(response => {
                        log.info('Hotel eliminado con éxito');
                        resolve(response);
                    }).catch(error => {
                        log.error(error);
                        reject({status: 204, message: error});
                    });
                } else {
                    log.info('No existe el id a eliminar');
                    reject({status: 409, message: ''})
                }
            }).catch(error => {
                log.error(error);
                reject({status: 204, message: error});
            });
        });
    }
}

module.exports = HotelsRepository;