import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFormComponent } from './comp-form.component';

describe('CompFormComponent', () => {
  let component: CompFormComponent;
  let fixture: ComponentFixture<CompFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
