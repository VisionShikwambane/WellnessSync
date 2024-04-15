import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {pencilOutline} from 'ionicons/icons';
import { HttpServiceService } from 'src/app/services/http-service.service';


@Component({
  selector: 'app-patient-profile-tab',
  templateUrl: './patient-profile-tab.page.html',
  styleUrls: ['./patient-profile-tab.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PatientProfileTabPage implements OnInit {

  constructor(private httpService: HttpServiceService) {
    addIcons({pencilOutline});
   }

  ngOnInit() {
    this.loadPatientProfile();
  }

 editForm: any;
 isPicModalOpen = false;
 isUpdateModalOpen = false
 patientProfile: any


 openPicModal(isOpen: boolean){
  this.isPicModalOpen = isOpen;
 }

 openUpdateModal(isOpen: boolean){
  this.isUpdateModalOpen = isOpen
 }


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


  loadPatientProfile() {
    this.httpService.GetPatientProfile().subscribe({
      next: (data) => {
        this.patientProfile = data;
        console.log('Patient profile loaded', data);
      },
      error: (error) => {
        console.error('Error fetching patient profile', error);
      }
    });
  }



  



  
 
}
