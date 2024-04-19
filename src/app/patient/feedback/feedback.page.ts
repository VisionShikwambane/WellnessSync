import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonMenuPage } from 'src/app/shared/ion-menu/ion-menu.page';
import { addIcons } from 'ionicons';
import {starOutline, star} from 'ionicons/icons';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonMenuPage]
})
export class FeedbackPage implements OnInit {

  constructor() {
    addIcons({starOutline, star});
   }

  ngOnInit() {
  }

  selectedStars: number = 0;
  comment: string = '';


  selectStar(star: number) {
    this.selectedStars = star;
  }

  submitFeedback() {
    // Here you can handle the submission of feedback, such as sending it to a server
    console.log('Selected stars:', this.selectedStars);
    console.log('Comment:', this.comment);
    // You can reset the values after submission if needed
    this.selectedStars = 0;
    this.comment = '';
  }



}
