import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, MenuController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-ion-menu',
  templateUrl: './ion-menu.page.html',
  styleUrls: ['./ion-menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class IonMenuPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  @ViewChild('menu') menu!: IonMenu;
  closeMenuAndNavigate(route: string) {
    console.log('Close menu and navigate');
    // this.menuCtrl.close(); // Try commenting this out
    this.menu.toggle(); // Toggle the menu directly
    // You can add additional navigation logic if needed
  }

}
