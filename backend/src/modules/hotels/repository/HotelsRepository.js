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
        this._mockHotels = require('../resources/hotels.json');
    }

    /**
     * Encargado de capturar el mock de hotels para obtener o filtrar el resultado
     * @param {String} id - identificador del hotel a filtrar
     * @return {Promise<any>} Promesa del resultado
     */
    hotels(id) {
        return new Promise((resolve, reject) => {
            log.info('antes');
            let HotelModel = global.app.core.libraries.mongoose.model('Hotel', HotelSchema.build());

            let example = new HotelModel({
                "id": "249942",
                "name": "Hotel Stefanos",
                "stars": 3,
                "price": 994.18,
                "image": "4900059_30_b.jpg",
                "amenities": [
                    "safety-box",
                    "nightclub",
                    "deep-soaking-bathtub",
                    "beach",
                    "business-center"
                ]
            });

            example.save();

            // example.save().then((response) => {
            //    console.log(response);
            // });

            resolve();
            // if (id != null) {
            //     log.info(`Retornando datos del hotel con id ${id}`);
            //     for (let hotel of this._mockHotels) {
            //         if (hotel.id == id) {
            //             resolve(hotel);
            //         }
            //     }
            //
            //     reject({status: 204, message: undefined});
            // } else {
            //     log.info('Retornando el listado de hoteles');
            //     resolve(this._mockHotels);
            // }
        });
    }

}

module.exports = HotelsRepository;