"use strict";
/**
 * Clase encargada para exponer los servicios en el RestController del modulo de hoteles
 * @author Andres Felipe Ardila Rivas <felipeardila1010@gmail.com>
 * @copyright Andres Felipe Ardila Rivas 2018
 */

const log = global.app.core.libraries.log4js.getLogger(global.app.utils.module.changePathtoNameClass(__filename));
const HotelsController = require('./HotelsController');

class HotelsRestController extends global.app.core.classes.Controller {
    /**
     * Clase del constructor
     */
    constructor() {
        super(__filename);
        this._hotelsController = new HotelsController();
        this.hotels();
    }

    /**
     * Método: POST
     * Ruta: /hotels
     * Encargado de realizar la consulta y filtrado de los hoteles
     */
    hotels() {
        global.app.router.get('/hotels/:id?', (req, res) => {
            log.info('Recibiendo petición get /hotels');
            log.trace(req.params);

            this._hotelsController.hotels(req.params.id)
                .then((result) => {
                    res.status(200).json(result);
                }, (err) => {
                    res.status(err.status).json(err.message);
                }).catch((error) => {
                log.error(error);
                res.status(500).json(error);
            });
        });
    }
}

module.exports = HotelsRestController;