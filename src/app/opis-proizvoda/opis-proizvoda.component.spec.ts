import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpisProizvodaComponent } from './opis-proizvoda.component';

describe('OpisProizvodaComponent', () => {
  let component: OpisProizvodaComponent;
  let fixture: ComponentFixture<OpisProizvodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpisProizvodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpisProizvodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
