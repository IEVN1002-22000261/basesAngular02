import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistenciaCalComponent } from './resistencia-cal.component';

describe('ResistenciaCalComponent', () => {
  let component: ResistenciaCalComponent;
  let fixture: ComponentFixture<ResistenciaCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResistenciaCalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistenciaCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
