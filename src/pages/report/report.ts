import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  route = '';
  routes : string[];
  today : '';
  adultCount : '';
  adultPrice : '';
  childCount : '';
  childPrice : '';

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams, public httpServices: HttpProvider, public loadingCtrl: LoadingController) {
  
  }

  ionViewDidLoad() {
     
    let load = this.loadingCtrl.create({
      content:'Please Wait'
    });

    load.present();

    this.httpServices.getRoute().subscribe(data => {
      this.routes = data;
      load.dismiss();
      console.log(this.childPrice);
    }, (err) => {
      console.log(err);
    });

  }

  getTrip(){

    let load = this.loadingCtrl.create({
      content:'Please Wait'
    });



    this.httpServices.getTodayTrip(this.route).subscribe(data => {
      load.present();
      this.today = data;
      load.dismiss();
    }, (err) => {
      console.log(err);
    });


  }

  getBack(){
  	this.navCtrl.pop();
  }

}
