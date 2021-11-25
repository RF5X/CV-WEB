import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfPerComponent } from './inf-per.component';

describe('InfPerComponent', () => {
  let component: InfPerComponent;
  let fixture: ComponentFixture<InfPerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfPerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
