import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private backend: String = 'http://localhost:37000/testFront/1.0/';

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
