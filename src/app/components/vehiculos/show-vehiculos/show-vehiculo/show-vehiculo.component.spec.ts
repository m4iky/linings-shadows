import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVehiculoComponent } from './show-vehiculo.component';

describe('ShowVehiculoComponent', () => {
  let component: ShowVehiculoComponent;
  let fixture: ComponentFixture<ShowVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
