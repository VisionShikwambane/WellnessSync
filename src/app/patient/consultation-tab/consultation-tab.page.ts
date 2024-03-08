import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-consultation-tab',
  templateUrl: './consultation-tab.page.html',
  styleUrls: ['./consultation-tab.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConsultationTabPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
