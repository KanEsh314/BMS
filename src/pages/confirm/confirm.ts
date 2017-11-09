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
    Bus = this.navParams.get('Bus');
    Time = this.navParams.get('Time');
    AStart = this.navParams.get('AStart');
    AEnd = this.navParams.get('AEnd');
    CStart = this.navParams.get('CStart');
    CEnd = this.navParams.get('CEnd');

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
