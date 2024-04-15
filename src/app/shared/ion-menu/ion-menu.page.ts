import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ion-menu',
  templateUrl: './ion-menu.page.html',
  styleUrls: ['./ion-menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IonMenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
