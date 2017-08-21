import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusivosComponent } from './exclusivos.component';

describe('ExclusivosComponent', () => {
  let component: ExclusivosComponent;
  let fixture: ComponentFixture<ExclusivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
