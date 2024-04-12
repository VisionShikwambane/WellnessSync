import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {pencilOutline} from 'ionicons/icons';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-patient-profile-tab',
  templateUrl: './patient-profile-tab.page.html',
  styleUrls: ['./patient-profile-tab.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PatientProfileTabPage implements OnInit {

  constructor() {
    addIcons({pencilOutline});
   }

  ngOnInit() {
  }

 editForm: any;

  avatorString: string = "https://ionicframework.com/docs/img/demos/avatar.svg";

  openFileInput() {
    alert("Mmao")
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const avatarImg = document.querySelector('.avatar img');
        if (avatarImg) {
          (avatarImg as HTMLImageElement).src = e.target.result; 
        }
      };
      reader.readAsDataURL(file);
    }
  }

  
 
}
