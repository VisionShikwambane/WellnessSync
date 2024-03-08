import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-patient-profile-tab',
  templateUrl: './patient-profile-tab.page.html',
  styleUrls: ['./patient-profile-tab.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PatientProfileTabPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
