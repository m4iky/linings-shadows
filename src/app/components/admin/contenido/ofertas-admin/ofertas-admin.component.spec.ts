import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasAdminComponent } from './ofertas-admin.component';

describe('OfertasAdminComponent', () => {
  let component: OfertasAdminComponent;
  let fixture: ComponentFixture<OfertasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
