/** Sección de componentes de angular **/
import {Component, OnInit} from '@angular/core';
/** Sección de servicios **/
import {MainService} from "./main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
/**
 * Clase del controlador del modulo de negocio main
 * Realiza la interaccion entre los componentes del filtrado de los hoteles
 * @class MainComponent
 * @author Andres Felipe Ardila Rivas - felipeardila1010@gmail.com
 */
export class MainComponent implements OnInit {

  /** Contiene la lista de hoteles que se interactua con el DOM **/
  public hotels: Array<Object> = [];
  /** Contiene la lista de hoteles que se capturo en el resultado del
   * servicio **/
  public hotelsAll: Array<Object> = [];

  /**
   * Constructor de la clase
   * @param {MainService} mainService
   */
  constructor(private mainService: MainService) {
  }

  /**
   * Lyfe cycle - ngOnInit
   * 1. realiza la solicitud al servicio del back para obtener
   * el listado de los hoteles
   */
  ngOnInit() {
    this.mainService.getHotels().then(result => {
      this.hotelsAll = result;
      this.hotels = result;
    }).catch(error => {
      console.error(error);
    });
  }

  /**
   * Función que filtra los hoteles
   * @param {String} hotelFilter
   */
  public filterHotel(hotelFilter: String) {
    if (hotelFilter === '') {
      this.hotels = this.hotelsAll;
    } else {
      this.hotels = this.hotelsAll.filter(hotel => hotel['name'].toLowerCase().includes(hotelFilter.toLowerCase()));
    }
  }

  /**
   * Filtra los hoteles por las estrellas seleccionadas
   * @param {Object} filterStarsHotel - Objeto con la configuracion
   * de las estrellas habilitadas y inhabilitadas
   */
  public onChangeFilterStarsHotel(filterStarsHotel: Object) {
    if (filterStarsHotel['all']) {
      this.hotels = this.hotelsAll;
    } else {
      this.hotels = this.hotelsAll.filter(hotel => filterStarsHotel[hotel['stars']]);
    }
  }

  /**
   * Genera la ruta para capturar las imagenes de
   * los hoteles
   * @param {string} idImage - id de la imagen a capturar
   * @return {string} - String de la imagen del hotel
   */
  getPathImagesHotels(idImage: string) {
    return `/assets/images/hotels/${idImage}`;
  }

  /**
   * Genera la ruta para capturar las imagenes de
   * los amenities
   * @param {string} idAmenities - id del svg a capturar
   * @return {string} - String del svg del amenities
   */
  getPathSvgAmenities(idAmenities: string) {
    return `/assets/icons/amenities/${idAmenities}.svg`;
  }


  /**
   * Genera un array a partir del tamaño enviado como parametros
   * @param {number} length - tamaño del array a generar
   * @return {Array<number>}
   */
  generateArrayStars(length: number): Array<number> {
    return Array.from({length: length}, (x, i) => i);
  }
}
