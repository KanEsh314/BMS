import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpProvider } from '../../providers/http/http';
import { Storage } from '@ionic/storage';

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

    Route = this.navParams.get('route');
    Driver = this.navParams.get('driver');
    Bus = this.navParams.get('bus');
    Time = this.navParams.get('depart');
    Adult = this.navParams.get('adultc');
    Child = this.navParams.get('childc');

  constructor(public storage: Storage, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController, public httpServices: HttpProvider) {

  }

  getEdit(){
  	this.navCtrl.pop();
  }

  getConfirm(){

    let confirmData = {
      depart_time : this.Time,
      bus_id: this.Bus.id,
      driver_id: this.Driver.id,
      route_id: this.Route.id,
      adult_count: this.Adult,
      children_count: this.Child
    }

    this.httpServices.createTrip(confirmData).then(data => {
      console.log(data)
      this.storage.set('data',data);
      this.toastCtrl.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    }).present();

    this.navCtrl.push(HomePage);
    }, (err) => {
      console.log(err);
      this.alertCtrl.create({
        title: 'Check Internet Connection',
        subTitle: 'Please Connect The Device To Nearest Wifi',
        buttons: ['OK']
      }).present();
    });   
  }

  ionViewDidLoad() {
    
  }

}
