import { Component } from '@angular/core';
import { NavController , ToastController , NavParams} from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  email = this.navParams.get('email');

  constructor(public navCtrl: NavController , public toastCtrl: ToastController , public navParams: NavParams) {

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  Authentication(){
    this.navCtrl.setRoot(LoginPage);
  }

  getStart(){
    this.toastCtrl.create({
      message:'The Trip Started...',
      duration: 1000
    }).present();
    //this.navCtrl.setRoot(LoginPage);
  }

  getEnd(){
    this.toastCtrl.create({
      message:'The Trip Ended...',
      duration: 1000
    }).present();
    //this.navCtrl.setRoot(LoginPage);
  }
}
