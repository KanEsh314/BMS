import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadCtrl: LoadingController
    ) {
    
  }

  getHome(){

    if(this.email == 'User' && this.password == '123456us' || this.email == 'Inspector' && this.password == '123456in' || this.email == 'Driver' && this.password == '123456dr'){

      this.loadCtrl.create({
        duration: 5000,
        dismissOnPageChange: true
      }).present();

      this.navCtrl.setRoot(TabsPage,{
        Email: this.email,
        Password: this.password
      })
    }
    else{
      let alert = this.alertCtrl.create({
      title: 'Login Failed',
      message: 'Did you enter the right credentials?',
      buttons: ['Ok'],
      cssClass: 'alertDanger'
    });
    alert.present()
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
