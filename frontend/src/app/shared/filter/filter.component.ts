/** Sección de componentes de angular **/
import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
/**
 * Clase del controlador del componente filtros para los hoteles
 * Este componente dispone de dos filtros para los hoteles
 * (nombre o estrellas) para ser utilizado mediante los Outputs del
 * componente
 * @class FilterComponent
 * @author Andres Felipe Ardila Rivas - felipeardila1010@gmail.com
 */
export class FilterComponent implements OnInit {

  /** Variable que contrala si los campos del filtro nombre están
   * habilitados o no **/
  public isCollapsedFilterHotel: Boolean = false;
  /** Variable que contrala si los campos del filtro estrellas están
   * habilitados o no **/
  public isCollapsedFilterStar: Boolean = false;
  /** Variable que captura lo dijitado en el input del filtro nombre **/
  public filterHotel: String = '';
  /** Variable que captura el estado del filtro estrellas **/
  public filterStarsHotel: Object = null;

  /**
   * Sección de Outputs del componente
   */

  /** Emite lo dijitado en el input cuando se accione el boton Aceptar **/
  @Output() onClickFilterHotel = new EventEmitter();
  /** Emite el estado de las estrellas cuando se realiza un cambio inmediatamente **/
  @Output() onChangeFilterStarsHotel = new EventEmitter();

  /**
   * Constructor de la clase
   */
  constructor() {
  }

  /**
   * Lyfe cycle - ngOnInit
   * 1. Inicializa el objeto de los filtros de estrellas
   */
  ngOnInit() {
    this.refreshConfigFilterStarsHotel();
  }

  /**
   * Función que emite el valor a filtrar en los hoteles
   */
  public onSubmitFilterHotel() {
    this.refreshConfigFilterStarsHotel();
    this.onClickFilterHotel.emit(this.filterHotel);
  }

  /**
   * Emite si ocurre un cambio en el filtro de las
   * estrellas de los hoteles
   * @param {string} idFilterStar - id del filterStar a cambiar y emitir cambio
   */
  public changeFilterStarsHotel(idFilterStar: string) {
    this.filterStarsHotel[idFilterStar] = !this.filterStarsHotel[idFilterStar];
    this.onChangeFilterStarsHotel.emit(this.filterStarsHotel);
  }

  /**
   * Refresca la configuración inicial del fitro por estrellas
   * para los hoteles
   */
  refreshConfigFilterStarsHotel() {
    this.filterStarsHotel = {all: true, 1: false, 2: false, 3: false, 4: false, 5: false};
  }
}
