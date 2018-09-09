"use strict";

/**
 * Clase que genera el HotelSchema
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */
class HotelSchema {

    /**
     * Constructor del schema de hotel
     * @param id
     * @param name
     * @param stars
     * @param price
     * @param image
     * @param amenities
     */
    constructor(id = null, name = null, stars = null, price = null, image = null, amenities = null) {
        this._id = id;
        this._name = name;
        this._stars = stars;
        this._price = price;
        this._image = image;
        this._amenities = amenities;
    }

    /**
     * Obtiene un nuevo objeto apartir de los datos insertados en el constructor
     * @return {HotelSchema}
     */
    get() {
        return new HotelSchema(
            this.id,
            this.name,
            this.stars,
            this.price,
            this.image,
            this.amenities
        );
    }

    /**
     * Inserta los nuevos datos enviados en el objeto al schema de la clase
     * @param data
     * @return {HotelSchema}
     */
    set(data) {
        return new HotelSchema(
            data.id,
            data.name,
            data.stars,
            data.price,
            data.image,
            data.amenities
        );
    }

    /**
     * Actualiza el objeto de la data entrante
     * @param {Object} data - Objeto a actualizar
     * @param {Object} dataUpdated - Objeto con la data nueva a actualizar
     * @return {Object}
     */
    update(data, dataUpdated) {
        data.id = dataUpdated.id;
        data.name = dataUpdated.name;
        data.stars = dataUpdated.stars;
        data.price = dataUpdated.price;
        data.image = dataUpdated.image;
        data.amenities = dataUpdated.amenities;

        return data;
    }

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

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get stars() {
        return this._stars;
    }

    set stars(value) {
        this._stars = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get amenities() {
        return this._amenities;
    }

    set amenities(value) {
        this._amenities = value;
    }
}

module.exports = HotelSchema;