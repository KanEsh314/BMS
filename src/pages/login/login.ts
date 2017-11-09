import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
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

  pageElement: any;
  splash = true;

  email = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadCtrl: LoadingController, public authService: AuthProvider){
    this.pageElement = document.querySelector('.tabbar');
  }

  showLoading(){
    this.loadCtrl.create({
    content:'Authenticating...',
    duration: 5000,
    dismissOnPageChange: true
    }).present();
  }

  getHome(){
    //|| this.email == 'Inspector' && this.password == '123456in' || this.email == 'Driver' && this.password == '123456dr'

    let loginData = {
      email: this.email,
      password: this.password
    };

    if(this.email == 'u' && this.password == ''){


      this.loadCtrl.create({
        duration: 5000,
        dismissOnPageChange: true
      }).present();

      this.navCtrl.push(HomePage,loginData);


      /*  this.authService.login(loginData).then((result) => {
            
            console.log(result);
            this.navCtrl.setRoot(HomePage,loginData);
        },(err) => {
            this.showLoading();
            console.log(err);
        });*/
    }
    else if(this.email == 'i' && this.password == ''){

      this.loadCtrl.create({
        duration: 5000,
        dismissOnPageChange: true
      }).present();

      this.navCtrl.push(AboutPage,loginData);
    }
    else if(this.email == 'd' && this.password == ''){

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
    alert.present();
    }
  }

  /*ionViewDidLoad() {
 
        this.authService.checkAuthentication().then((res) => {
            console.log("Already authorized");
            this.navCtrl.setRoot(HomePage);
        }, (err) => {
            console.log("Not already authorized");
        });
 
    }*/

    ionViewDidLoad() {
      //this.pageElement.style.display = 'none';
      setTimeout(() => {
        this.splash = false;
        //this.pageElement.style.display = 'flex';
      },4000);
    }
}
