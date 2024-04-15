import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { homeOutline, radio, library, search, medkitOutline, bandageOutline, personOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import {chevronForwardOutline} from 'ionicons/icons';
import { IonMenuPage } from 'src/app/shared/ion-menu/ion-menu.page';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonMenuPage]
})
export class PatientPage implements OnInit {

  constructor() {
     addIcons({ radio, library, search, medkitOutline, bandageOutline, homeOutline, personOutline, chevronForwardOutline})
   }

  ngOnInit() {
  }

}
