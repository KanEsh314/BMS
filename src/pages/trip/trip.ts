import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
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
busno = '';
busnos : string[];
date = new Date();
timeStarts : String = new Date(this.date.getTime()-this.date.getTimezoneOffset()*60000).toISOString();
astart = '';
aend = '';
cstart = '';
cend = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpServices: HttpProvider, public loadingCtrl: LoadingController,public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {

    let load = this.loadingCtrl.create({
      content: 'Please Wait',
      duration: 5000
    }).present();

    this.httpServices.getRoute().subscribe(data => {
      this.routes = data;
      console.log(data);
    }, (err) => {
      console.log(err);
    });

    this.httpServices.getBus().subscribe(data => {
      this.busnos = data;
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

  getConfirm(){

    let confirmData = {
      Route : this.route,
      Bus : this.busno,
      Time : this.timeStarts,
      AStart : this.astart,
      AEnd : this.aend,
      CStart : this.cstart,
      CEnd : this.cend
    }


  	this.navCtrl.push(ConfirmPage,confirmData);
  }

  getCancel(){
    this.navCtrl.pop();
  }

}
