import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselpocetnaComponent } from './carouselpocetna.component';

describe('CarouselpocetnaComponent', () => {
  let component: CarouselpocetnaComponent;
  let fixture: ComponentFixture<CarouselpocetnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselpocetnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselpocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
