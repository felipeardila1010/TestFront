"use strict";

/**
 * Clase que genera el HotelSchema
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class HotelSchema {

    /**
     * Encargado de generar el schema de hoteles
     * @returns {Schema}
     */
    static build() {
        const Schema = global.app.core.libraries.mongoose.Schema;
        return new Schema({
            id: String,
            name: String,
            stars: {type: Number, min: 1, max: 5},
            price: Schema.Types.Decimal128,
            image: String,
            amenities: []
        });
    }
}

module.exports = HotelSchema;