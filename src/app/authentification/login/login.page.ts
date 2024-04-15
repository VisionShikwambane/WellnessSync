import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from '../auth-services/auth.service';
import { JwtService } from '../auth-services/jwt.service';
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
  public alertInputs = [{ placeholder: 'Email', }];


  constructor(private fb: FormBuilder, private alertService: AlertService, private authservice: AuthService, private serviceJwt: JwtService, private route: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    const token = localStorage.getItem('token');
    if (token) {

      var role = this.serviceJwt.decodeUserRoleFromToken(token)
      if (role === "Patient") {
        this.route.navigate(['/patient']);
      }
      else if (role === "Doctor") {
        this.route.navigate(['/doctor']);
      }
      else if (role === "Admin") {
        this.route.navigate(['/admin']);
      }
    }
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
      const loginInfo = { email: this.loginForm.value.username, password: this.loginForm.value.password };
      this.authservice.login(loginInfo).subscribe(
        response => {
          const token = (response as any).result as string;
          //console.log(token)
          this.serviceJwt.setToken(token);
          var role = this.serviceJwt.decodeUserRoleFromToken(token)
          if (role === "Patient") {
            this.route.navigate(['/patient']);
          }
          else if (role === "Doctor") {
            this.route.navigate(['/doctor']);
          }
          else if (role === "Admin") {
            this.route.navigate(['/admin']);
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

  async presentAlert() {
    this.alertService.presentInputAlert('Enter Email', 'Request OTP', 'Email', (enteredData) => {
      if (!enteredData[0]) {
        this.alertService.presentErrorToast("bottom", "Could not send OTP, write email", 1500)
      }
      console.log('Entered Email:', enteredData[0]);
    });

  }

  googleSignin() {

  }






}
