import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from '../auth-services/auth.service';
import { JwtService } from '../auth-services/jwt.service';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';




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


  constructor(private fb: FormBuilder, private alertService: AlertService, private authservice: AuthService, private serviceJwt: JwtService, private route: Router) {
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

      const loginInfo = {
        email: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      
      this.authservice.login(loginInfo).subscribe(
        response => {
          const token = (response as any).result as string;
          console.log(token)
          this.serviceJwt.setToken(token);
          var role = this.serviceJwt.decodeUserRoleFromToken(token)
          if(role === "Patient"){
            this.route.navigate(['/employee-home']);
          }
          else if (role === "Doctor"){
            this.route.navigate(['']);
          }
          else if (role === "Admin"){
            this.route.navigate(['']);
          }
          else{
            this.route.navigate(['']);
          }
        },
        async error => {
          await this.alertService.presentErrorToast("bottom", error.error, 1500)
        } 
      );

    } 
    else {

      this.alertService.presentAlert("Alert", "", "Please fill in all the login details");
      
    }
  }

  async presentAlert(){
    this.alertService.presentInputAlert('Enter Email', 'Request OTP', 'Email', (enteredData) => {
      if(!enteredData[0]){
        this.alertService.presentErrorToast("bottom", "Could not send OTP, write email", 1500)
      }
      console.log('Entered Email:', enteredData[0]);
    });

  }

  googleSignin(){

  }


  

 async presentToast(){
  this.alertService.presentErrorToast("bottom", "thr", 1500)
 }

  
 async presentToast2(){
  this.alertService.presentSuccessToast("bottom", "thr")
 }




}
