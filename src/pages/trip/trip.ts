import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
//import { ConfirmPage } from '../confirm/confirm';
import { HttpProvider } from '../../providers/http/http';
import { ConfirmPage } from '../confirm/confirm';

@IonicPage()
@Component({
  selector: 'page-trip',
  templateUrl: 'trip.html',
})
export class TripPage {

route = '';
routes : string[];
driver = '';
drivers : string[];
busno = '';
busnos : string[];
date = new Date();
timeStarts : String = new Date(this.date.getTime()-this.date.getTimezoneOffset()*60000).toISOString();
astart : any;
aend : any;
cstart : any;
cend : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpServices: HttpProvider, public loadingCtrl: LoadingController,public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {

    this.loadingCtrl.create({
      content: 'Please Wait',
      duration: 3000
    }).present();

    this.httpServices.getRoute().subscribe(data => {
      this.routes = data;
      //console.log(this.routes);
    }, (err) => {
      console.log(err);
    });

    this.httpServices.getDriver().subscribe(data => {
      this.drivers = data;
      //console.log(this.drivers);
    }, (err) => {
      console.log(err);
    });

    this.httpServices.getBus().subscribe(data => {
      this.busnos = data;
      //console.log(this.busnos);
    }, (err) => {
      console.log(err);
    });
  }

  getConfirm(){

    var acount = this.aend-this.astart;
    var ccount = this.cend-this.cstart;

    let cData = {
      depart: this.timeStarts,
      route: this.route,
      driver: this.driver,
      bus: this.busno,
      adultc: acount,
      childc: ccount
    }

    console.log(cData);

    this.navCtrl.push(ConfirmPage,cData);
  }

  getCancel(){
    this.navCtrl.pop();
  }

}
