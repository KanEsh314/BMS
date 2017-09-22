import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
//import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact'

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
    //|| this.email == 'Inspector' && this.password == '123456in' || this.email == 'Driver' && this.password == '123456dr'

    let loginData = {
      Email: this.email,
      Password: this.password
    };

    if(this.email == 'User' && this.password == '123456us'){

      this.loadCtrl.create({
        duration: 5000,
        dismissOnPageChange: true
      }).present();

      this.navCtrl.push(HomePage,loginData)
    }
    else if(this.email == 'Inspector' && this.password == '123456in'){

      this.loadCtrl.create({
        duration: 5000,
        dismissOnPageChange: true
      }).present();

      this.navCtrl.push(AboutPage,loginData);
    }
    else if(this.email == 'Driver' && this.password == '123456dr'){

      this.loadCtrl.create({
        duration: 5000,
        dismissOnPageChange: true
      }).present();

      this.navCtrl.push(ContactPage,loginData);
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
