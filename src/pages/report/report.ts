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
  adultCount : any;
  adultPrice : any;
  childCount : any;
  childPrice : any;
  sales : any;

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
    }, (err) => {
      console.log(err);
    });

  }

  getTrip(){

    this.httpServices.getRouteById(this.route).subscribe(data => {
      this.adultPrice = data.adult_price;
      this.childPrice = data.children_price;
    },(err) => {
      console.log(err);
    });

    this.httpServices.getTodayTrip(this.route).subscribe(data => {
      this.today = data;
      this.adultCount = data.adult_count;
      this.childCount = data.children_count;
      this.sales = (this.adultCount*this.adultPrice) + (this.childCount*this.childPrice);
      console.log(this.sales);
    }, (err) => {
      console.log(err);
    });

  }

  getBack(){
  	this.navCtrl.pop();
  }

}
