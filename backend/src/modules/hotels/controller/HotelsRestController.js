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
        this._pathRoute = '/hotels';
    }

    createRoutes(){
        log.info(`Registrando recursos Restful del modulo hoteles`);
        this.get();
        this.post();
        this.put();
        // this.delete();
    }

    /**
     * Método de consulta de hoteles
     */
    get() {
        global.app.router.get(`${this._pathRoute}/:id?`, (req, res) => {
            log.trace('Hotels - Recibiendo peticion get');
            this._hotelsController.get(req.params.id)
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

    /**
     * Método de inserta hoteles
     */
    post() {
        global.app.router.post(this._pathRoute, (req, res) => {
            log.trace('Hotels - Recibiendo peticion post');
            this._hotelsController.post(req.body)
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

    /**
     * Método de actualizar hoteles
     */
    put() {
        global.app.router.put(this._pathRoute, (req, res) => {
            log.trace('Hotels - Recibiendo peticion put');
            this._hotelsController.put(req.body)
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