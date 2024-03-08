import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultationTabPage } from './consultation-tab.page';

describe('ConsultationTabPage', () => {
  let component: ConsultationTabPage;
  let fixture: ComponentFixture<ConsultationTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultationTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
