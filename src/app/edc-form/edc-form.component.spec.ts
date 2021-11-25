import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdcFormComponent } from './edc-form.component';

describe('EdcFormComponent', () => {
  let component: EdcFormComponent;
  let fixture: ComponentFixture<EdcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdcFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
