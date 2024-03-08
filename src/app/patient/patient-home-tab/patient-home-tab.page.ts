import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {notificationsOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-patient-home-tab',
  templateUrl: './patient-home-tab.page.html',
  styleUrls: ['./patient-home-tab.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PatientHomeTabPage implements OnInit {

  constructor() { 
    addIcons({ notificationsOutline})
  }

  ngOnInit() {
  }

}
