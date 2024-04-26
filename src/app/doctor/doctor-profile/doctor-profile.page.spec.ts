import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DoctorProfilePage } from './doctor-profile.page';

describe('DoctorProfilePage', () => {
  let component: DoctorProfilePage;
  let fixture: ComponentFixture<DoctorProfilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DoctorProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
