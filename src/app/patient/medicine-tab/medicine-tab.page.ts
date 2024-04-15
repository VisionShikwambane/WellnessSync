import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonMenuPage } from 'src/app/shared/ion-menu/ion-menu.page';

@Component({
  selector: 'app-medicine-tab',
  templateUrl: './medicine-tab.page.html',
  styleUrls: ['./medicine-tab.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonMenuPage]
})
export class MedicineTabPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
