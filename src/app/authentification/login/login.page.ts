import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ReactiveFormsModule ]
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;
  username: string = '';
  password: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

   }
  

  ngOnInit() {
  }

  

  get usernameControl() {
    return this.loginForm.get('username');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }
  

  login() {
    if (this.loginForm.valid) {
      // Perform authentication logic here
      console.log('Username:', this.loginForm.value.username);
      console.log('Password:', this.loginForm.value.password);
    } else {
      // Handle invalid form submission
      console.log('Invalid form submission');
    }
  }

  googleSignin(){

  }

}
