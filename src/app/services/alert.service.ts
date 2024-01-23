import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { add, person, mail, call, transgender, lockClosed, personCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';


@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alertController: AlertController, private toastController: ToastController) 
  {
    addIcons({add, person, mail, call, transgender, lockClosed, personCircle})
  }

  async presentAlert(header: string, subHeader: string, message: string, ) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }




  async presentInputAlert(header1: string, button: string, placeholder: string, onClick: (data: any) => void) {
    const alert = await this.alertController.create({
      header: header1,
      buttons: [
        {
          text: button,
          handler: (data) => {
            onClick(data);
          }
        }
      ],
      inputs: [ 
        { placeholder: placeholder }],
    });
  
    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg: string, pst: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: pst,
      position: position,
      icon: ""
      
      
    });

    await toast.present();
  }


  


}






