import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
  }

}
