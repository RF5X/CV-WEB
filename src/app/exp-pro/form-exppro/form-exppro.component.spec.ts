import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExpproComponent } from './form-exppro.component';

describe('FormExpproComponent', () => {
  let component: FormExpproComponent;
  let fixture: ComponentFixture<FormExpproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExpproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExpproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
