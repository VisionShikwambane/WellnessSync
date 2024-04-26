import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonMenuPage } from '../shared/ion-menu/ion-menu.page';
import { addIcons } from 'ionicons';
import { homeOutline, radio, library, search, medkitOutline, bandageOutline, personOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonMenuPage]
})
export class DoctorPage implements OnInit {

  constructor() {addIcons({ radio, library, search, medkitOutline, bandageOutline, homeOutline, personOutline, timeOutline}) }

  ngOnInit() {
  }

}
