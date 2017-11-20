import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ConfirmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {

    Route = this.navParams.get('Route');
    Driver = this.navParams.get('Driver');
    Bus = this.navParams.get('Bus');
    Time = this.navParams.get('Time');
    Adult = this.navParams.get('Adult');
    Child = this.navParams.get('Child');

  constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController) {

  }

  getEdit(){
  	this.navCtrl.pop();
  }

  getConfirm(){
    this.toastCtrl.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    }).present();

  	this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    
  }

}
