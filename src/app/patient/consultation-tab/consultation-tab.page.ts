import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,  ModalController} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {chevronForwardOutline} from 'ionicons/icons';
import { NavController } from '@ionic/angular'; 



@Component({
  selector: 'app-consultation-tab',
  templateUrl: './consultation-tab.page.html',
  styleUrls: ['./consultation-tab.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConsultationTabPage implements OnInit {



  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { 
    addIcons({chevronForwardOutline});
    this.filteredConsulations = this.consulations;
  }


  consulations: string[] = ['Pokémon 1', 'Naruto', 'One Peace', 'Dragon Ball Z'];
  filteredConsulations: string[] = [];
 


  filterItems(event: any){
    const searchTerm = event.target.value.toLowerCase();
    this.filteredConsulations = this.consulations.filter(c=>c.toLowerCase().includes(searchTerm))
  }

  ngOnInit() {
  }

  navigateToBookConsultation() {
    this.navCtrl.navigateForward(['patient/book-consultation']);
  }

  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
