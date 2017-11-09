import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController, AlertController} from 'ionic-angular';
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

  report = '';

  constructor(public navCtrl: NavController, public navParams: NavParams , 	public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  getReport(){
    this.alertCtrl.create({
      title: 'Are Sure To Send This Report?',
      message: this.report,
      buttons: [
      {
        text: 'Yes',
        handler: () => {

          //http post

          this.toastCtrl.create({
              message: 'Your report were successfully submited',
              showCloseButton: true,
              closeButtonText: 'Ok'
             }).present();

          this.navCtrl.push(AboutPage);
        }
      },
      {
        text: 'No',
        handler: () => {
          console.log('Agr')
        }
      }]
    }).present();
  }

  getCancel(){
  	this.navCtrl.pop();
  }

  ionViewDidLoad() {
    /*this.toastCtrl.create({
      message: 'Your report were successfully submited',
      showCloseButton: true,
      closeButtonText: 'Ok'
    }).present();

    this.navCtrl.push(AboutPage);*/
    
  }

}
