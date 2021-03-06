import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacionComponent } from './paginacion.component';

describe('PaginacionComponent', () => {
  let component: PaginacionComponent;
  let fixture: ComponentFixture<PaginacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
