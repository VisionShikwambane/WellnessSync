import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParientHomePage } from './parient-home.page';

describe('ParientHomePage', () => {
  let component: ParientHomePage;
  let fixture: ComponentFixture<ParientHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParientHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
