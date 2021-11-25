import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraConfiguracionComponent } from './barra-configuracion.component';

describe('BarraConfiguracionComponent', () => {
  let component: BarraConfiguracionComponent;
  let fixture: ComponentFixture<BarraConfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraConfiguracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
