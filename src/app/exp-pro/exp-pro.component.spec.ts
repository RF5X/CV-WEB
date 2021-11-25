import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpProComponent } from './exp-pro.component';

describe('ExpProComponent', () => {
  let component: ExpProComponent;
  let fixture: ComponentFixture<ExpProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
