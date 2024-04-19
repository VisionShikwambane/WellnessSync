import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonMenuPage } from 'src/app/shared/ion-menu/ion-menu.page';

@Component({
  selector: 'app-medicine-tab',
  templateUrl: './medicine-tab.page.html',
  styleUrls: ['./medicine-tab.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonMenuPage]
})
export class MedicineTabPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  isMedicineCollectionModalOpen = false;
  isDiseasePreventionModalOpen = false;
  isAbortionSevicesModalUp = false;
  isPregnancyModaUp = false;
  isOtherServiceModalUp = false;

  medicines = [
    { name: 'Medicine 1', quantity: 10 },
    { name: 'Medicine 2', quantity: 5 },
    { name: 'Medicine 3', quantity: 8 },
    { name: 'Medicine 4', quantity: 34 },
    { name: 'Medicine 5', quantity: 13 },

  ];


  setOpen(isOpen: boolean, modalType: string) {
    switch (modalType) {
      case 'medicineCollection':
        this.isMedicineCollectionModalOpen = isOpen;
        break;
      case 'diseasePrevention':
        this.isDiseasePreventionModalOpen = isOpen;
        break;
      case 'abortionServices':
        this.isAbortionSevicesModalUp= isOpen;
        break;
      case 'pregnancy':
        this.isPregnancyModaUp = isOpen;
        break;
      case 'otherServices':
        this.isOtherServiceModalUp = isOpen;
        break;
      default:
        break;
    }
  }


}
