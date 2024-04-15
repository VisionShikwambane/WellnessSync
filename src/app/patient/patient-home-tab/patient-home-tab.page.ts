import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {notificationsOutline, bookOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import {Swiper} from 'swiper';
import { register } from 'swiper/element/bundle';


register();

@Component({
  selector: 'app-patient-home-tab',
  templateUrl: './patient-home-tab.page.html',
  styleUrls: ['./patient-home-tab.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PatientHomeTabPage implements OnInit {

  


  swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 10000,
    },
   });

  constructor() { 
    addIcons({ notificationsOutline, bookOutline})
  }

  ngOnInit() {
  }

}
