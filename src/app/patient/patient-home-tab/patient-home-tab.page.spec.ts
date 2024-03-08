import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientHomeTabPage } from './patient-home-tab.page';

describe('PatientHomeTabPage', () => {
  let component: PatientHomeTabPage;
  let fixture: ComponentFixture<PatientHomeTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PatientHomeTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
