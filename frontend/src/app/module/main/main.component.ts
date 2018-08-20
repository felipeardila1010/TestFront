import {Component, OnInit} from '@angular/core';
import {MainService} from "./main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public hotels: Array<Object> = [];
  public hotelsAll: Array<Object> = [];

  constructor(private mainService: MainService) {
  }

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
