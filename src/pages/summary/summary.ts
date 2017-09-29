import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { AboutPage } from '../about/about';
/**
 * Generated class for the SummaryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , 	public toastCtrl: ToastController) {
  }

  getReport(){
  	this.toastCtrl.create({
      message: 'Your report were successfully submited',
      showCloseButton: true,
      closeButtonText: 'Ok'
    }).present();

  	this.navCtrl.push(AboutPage);
  }

  getCancel(){
  	this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryPage');
  }

}
