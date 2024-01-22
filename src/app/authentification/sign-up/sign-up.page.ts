import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { add, person, mail, call, transgender, lockClosed, personCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Registration } from 'src/app/models/register-model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ReactiveFormsModule]
})
export class SignUpPage implements OnInit {

  name!: string;
  surname!: string;
  phoneNumber!: string;
  email!: string;
  title!: string;
  password!: string;
  ConfirmPassword!: string
  registerForm!: FormGroup;

 
  constructor(private fb: FormBuilder, private alertService: AlertService, private httpService: HttpServiceService ) {

    addIcons({add, person, mail, call, transgender, lockClosed, personCircle}),
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      title: ['', Validators.required],
      password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
    });

   }

   newUserInfo: any = {};
  


  
  ngOnInit() {
  }

  register() {
   
       if(this.registerForm.valid){

        if(this.registerForm.value.password != this.registerForm.value.ConfirmPassword){
          this.alertService.presentAlert("Alert", "", "Password do not match");
        }
         else{

          this.newUserInfo = {
            name: this.registerForm.value.name,
            surname: this.registerForm.value.surname,
            phoneNumber: this.registerForm.value.phoneNumber,
            email: this.registerForm.value.email,
            title: this.registerForm.value.title,
            password: this.registerForm.value.password,
          
          };
          
          console.log(this.newUserInfo)
          this.httpService.Register(this.newUserInfo).subscribe(
            (response) => {
              console.log('Registration successful', response);
            },
            (error) => {
              console.error(error.error, "Error");
            }
          );
           
         }

       }

       else{
        this.alertService.presentAlert("Alert", "", "Please fill in all required fields");
       }
  }
  

}
