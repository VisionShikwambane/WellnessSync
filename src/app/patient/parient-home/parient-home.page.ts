import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-parient-home',
  templateUrl: './parient-home.page.html',
  styleUrls: ['./parient-home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ParientHomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
