import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;
  username: string = '';
  password: string = '';
  public alertButtons = ['Request OTP'];
  public alertInputs = [{placeholder: 'Email',}];


  constructor(private fb: FormBuilder, private alertService: AlertService) {
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
  




  //Loggin in method
  login() {
    if (this.loginForm.valid) {
      console.log('Username:', this.loginForm.value.username);
      console.log('Password:', this.loginForm.value.password);
    } else {
      this.alertService.presentAlert("Alert", "", "Please fill in all the login details");
    }
  }

  async presentAlert(){
    this.alertService.presentInputAlert('Enter Email', 'Submit', 'Email', (enteredData) => {
      console.log('Entered Email:', enteredData[0]);
    });

  }

  googleSignin(){

  }


  

 

  



}
