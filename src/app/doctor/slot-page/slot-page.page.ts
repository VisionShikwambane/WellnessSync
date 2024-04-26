import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {addCircleOutline} from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-slot-page',
  templateUrl: './slot-page.page.html',
  styleUrls: ['./slot-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SlotPagePage implements OnInit {

  constructor()  {addIcons({addCircleOutline}) }

  isCalModalOpen = false;
  @ViewChild('modal') modal: any;

  setCalModelOpen(isOpen: boolean) {
    this.isCalModalOpen = isOpen;
  }

  ngOnInit() {
  }

  saveSlot(){
    console.log("Saved")
  }

  isFutureDate = (dateString: string) => {
    const currentDate = new Date(); 
    const date = new Date(dateString);
    return date.getTime() > currentDate.getTime();
};

onDateTimeChange(event: CustomEvent) {
  const selectedDateTime = event.detail.value;
  const dateTime = new Date(selectedDateTime);
  console.log('Selected Date:', dateTime);
 }

 patient = {
  firstName: 'John',
  lastName: 'Doe',
  condition: 'Cardiologist',
  about: 'Dr. John Doe is a skilled cardiologist with over 10 years of experience...',
  cellphone: '0781971812',
  slot: '25 April 2024 14:45'
  // Add more fields as needed
};



}
