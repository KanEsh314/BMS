import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpProvider } from '../../providers/http/http';

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

  constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController, public httpServices: HttpProvider) {

  }

  getEdit(){
  	this.navCtrl.pop();
  }

  getConfirm(){

    let confirmData = {
      depart_time : this.Time,
      bus_id: this.Bus,
      driver_id: this.Driver,
      route_id: this.Route,
      adult_count: this.Adult,
      children_count: this.Child
    }

    this.httpServices.createTrip(confirmData).then(data => {
      console.log(data)
      this.toastCtrl.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    }).present();

    this.navCtrl.push(HomePage);
    }, (err) => {
      console.log(err);
    });   
  }

  ionViewDidLoad() {
    
  }

}
