import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetPersComponent } from './compet-pers.component';

describe('CompetPersComponent', () => {
  let component: CompetPersComponent;
  let fixture: ComponentFixture<CompetPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetPersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
