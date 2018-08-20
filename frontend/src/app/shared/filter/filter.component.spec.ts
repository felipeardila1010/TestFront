import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilterComponent} from './filter.component';
import {CollapseModule} from "ngx-bootstrap/collapse";
import {FormsModule} from "@angular/forms";

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [FormsModule, CollapseModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el componente', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Debería llamar al metodo onSubmitFilterHotel', (done) => {
    component.filterHotel = '1';
    component.onClickFilterHotel.subscribe(response => {
      expect(response).toEqual('1');
      done();
    });

    component.onSubmitFilterHotel();
  });

  it('Debería llamar al metodo changeFilterStarsHotel', (done) => {
    component.filterStarsHotel = {'1': false};
    component.onChangeFilterStarsHotel.subscribe(response => {
      expect(response).toEqual({'1': true});
      done();
    });

    component.changeFilterStarsHotel('1');
  });

  it('Debería llamar al metodo refreshConfigFilterStarsHotel', () => {
    component.refreshConfigFilterStarsHotel();
    expect(component.filterStarsHotel).toEqual({all: true, 1: false, 2: false, 3: false, 4: false, 5: false});
  });
});
