import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {MainService} from "./main.service";
import {FilterComponent} from "../../shared/filter/filter.component";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let service: MainService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, FilterComponent],
      imports: [HttpClientModule, FormsModule, CollapseModule.forRoot()],
      providers: [MainService]
    })
      .compileComponents();
    service = TestBed.get(MainService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el modulo main', () => {
    expect(component).toBeTruthy();
  });

  it('Debería ejecutar la funcionalidad del método life cycle ngOnInit', () => {
    expect(fixture.detectChanges).toBeTruthy();
  });

  it('Debería ejecutar el método filterHotel', () => {
    component.hotelsAll = [{
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
    }];

    /** Valida primer if **/
    component.filterHotel('');
    expect(component.hotels).toEqual(component.hotelsAll);
    /** Valida segundo if **/
    component.filterHotel('Ste');
    expect(component.hotels[0]['name']).toEqual('Hotel Stefanos');
  });

  it('Debería ejecutar el método onChangeFilterStarsHotel', () => {
    const hotelsAll = [{
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
    }];
    component.hotelsAll = hotelsAll;
    /** Valida primer if **/
    component.onChangeFilterStarsHotel({'all': true});
    expect(component.hotels).toEqual(hotelsAll);
    /** Valida segundo if **/
    component.onChangeFilterStarsHotel({'all': false, '3': true});
    expect(component.hotels).toEqual(hotelsAll);
  });

  it('Debería ejecutar el método getPathImagesHotels', () => {
    expect(component.getPathImagesHotels('1')).toEqual(`/assets/images/hotels/1`);
  });

  it('Debería ejecutar el método getPathSvgAmenities', () => {
    expect(component.getPathSvgAmenities('1')).toEqual(`/assets/icons/amenities/1.svg`);
  });

  it('Debería ejecutar el método generateArrayStars', () => {
    expect(component.generateArrayStars(3)).toEqual([0, 1, 2]);
  });
});
