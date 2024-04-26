import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SlotPagePage } from './slot-page.page';

describe('SlotPagePage', () => {
  let component: SlotPagePage;
  let fixture: ComponentFixture<SlotPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SlotPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
