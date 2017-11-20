import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';
import { HttpProvider } from '../../providers/http/http';

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
    var count  = acount + ccount;

    let cData = {
      depart_time: this.timeStarts,
      arrival_time: '2017-11-17T12:41:29.505Z',
      passengerCount: count,
      route_id: this.route,
      driver_id: this.driver,
      bus_id: this.busno
    }

    console.log(cData);

    this.httpServices.createTrip(cData).then(data => {
      console.log(data);
      //this.navCtrl.push(ConfirmPage);
    }, (err) => {
      console.log(err);
    });

    let confirmData = {
      Route: this.route,
      Driver: this.driver,
      Bus: this.busno,
      Time: this.timeStarts,
      Adult: acount, 
      Child: ccount,
    }

    //console.log(confirmData)

    this.navCtrl.push(ConfirmPage,confirmData);
  }

  getCancel(){
    this.navCtrl.pop();
  }

}
