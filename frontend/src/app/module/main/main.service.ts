/** Sección de componentes de angular **/
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
/**
 * Clase del servicio del modulo de negocio main
 * Realiza las peticiones al servidor del back para capturar los hoteles
 * @class MainService
 * @author Andres Felipe Ardila Rivas - felipeardila1010@gmail.com
 */
export class MainService {

  /** PATH del backend para realizar la solicitud de la data **/
  private backend: String = 'http://localhost:37000/testFront/1.0/';

  /**
   * Constructor de la clase
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Captura los hoteles del backend
   * @param {String} id - id del hotel
   * @returns {Promise<any>}
   */
  getHotels(id: string = null): Promise<any> {
    let url = `${this.backend}hotels`;
    let params = new HttpParams();
    params.append('id', id);

    return this.http.get<Array<Object>>(url, {params: params})
      .toPromise()
      .then(result => {
        return result;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
