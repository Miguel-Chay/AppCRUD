import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarClientePage } from './mostrar-cliente.page';

describe('MostrarClientePage', () => {
  let component: MostrarClientePage;
  let fixture: ComponentFixture<MostrarClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
