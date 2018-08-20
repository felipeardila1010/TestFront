import { TestBed, inject } from '@angular/core/testing';

import { MainService } from './main.service';
import {HttpClientModule} from "@angular/common/http";

describe('MainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MainService]
    });
  });

  it('Debería crear el servicio main', inject([MainService], (service: MainService) => {
    expect(service).toBeTruthy();
  }));

  it('Debería llamar al metodo getHotels', inject([MainService], (service: MainService) => {
    const firstElementResponse = {
      "id": "249942",
      "name": "Hotel Stefanos",
      "stars": 3,
      "price": 994.18,
      "image": "4900059_30_b.jpg",
      "amenities": [
        "safety-box",
        "nightclub",
        "deep-soaking-bathtub",
        "beach",
        "business-center"
      ]
    };

    /** Valida el then del solicitud del servicio **/
    service.getHotels().then(result => {
      expect(result[0]).toEqual(firstElementResponse);
    });

    /** Valida el catch del solicitud del servicio **/
    service.getHotels('STRSD').catch(error => {
      expect(error).toBeTruthy();
    });
  }));

});
