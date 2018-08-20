import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public isCollapsedFilterHotel: Boolean = false;
  public isCollapsedFilterStar: Boolean = false;
  public filterHotel: String = '';
  public filterStarsHotel: Object = null;

  @Output() onClickFilterHotel = new EventEmitter();
  @Output() onChangeFilterStarsHotel = new EventEmitter();

  constructor() {
  }

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
