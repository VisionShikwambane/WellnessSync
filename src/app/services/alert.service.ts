import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { text } from 'ionicons/icons';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alertController: AlertController) {}

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

  


}






