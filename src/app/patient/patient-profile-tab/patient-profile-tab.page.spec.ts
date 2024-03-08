import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientProfileTabPage } from './patient-profile-tab.page';

describe('PatientProfileTabPage', () => {
  let component: PatientProfileTabPage;
  let fixture: ComponentFixture<PatientProfileTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PatientProfileTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
