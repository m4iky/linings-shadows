import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasVehiculoComponent } from './ofertas-vehiculo.component';

describe('OfertasVehiculoComponent', () => {
  let component: OfertasVehiculoComponent;
  let fixture: ComponentFixture<OfertasVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
