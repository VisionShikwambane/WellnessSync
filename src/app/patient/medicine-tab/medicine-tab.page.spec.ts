import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicineTabPage } from './medicine-tab.page';

describe('MedicineTabPage', () => {
  let component: MedicineTabPage;
  let fixture: ComponentFixture<MedicineTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MedicineTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
