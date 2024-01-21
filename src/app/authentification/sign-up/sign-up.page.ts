import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { add, person, mail, call, transgender, lockClosed, personCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule ]
})
export class SignUpPage implements OnInit {

  constructor() {
    addIcons({add, person, mail, call, transgender, lockClosed, personCircle})
   }

  name!: string;
  surname!: string;
  phoneNumber!: string;
  email!: string;
  title!: string;
  gender!: string;
  password!: string;
  ConfirmPassword!: string

  ngOnInit() {
  }

  register() {
    // Perform registration logic here
    console.log('Registration data:', {
      name: this.name,
      surname: this.surname,
      phoneNumber: this.phoneNumber,
      email: this.email,
      title: this.title,
      gender: this.gender,
      password: this.password,
    });
  }

}
