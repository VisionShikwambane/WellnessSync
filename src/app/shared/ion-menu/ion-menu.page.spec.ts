import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonMenuPage } from './ion-menu.page';

describe('IonMenuPage', () => {
  let component: IonMenuPage;
  let fixture: ComponentFixture<IonMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IonMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
