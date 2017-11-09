import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController, LoadingController} from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the StationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-station',
  templateUrl: 'station.html',
})
export class StationPage {

  station = '';
  stations : string[];

  constructor(public loadingCtrl: LoadingController ,public httpServices: HttpProvider ,public navCtrl: NavController, public navParams: NavParams , public viewCtrl: ViewController) {
  
  }



  ionViewDidLoad() {

    let load = this.loadingCtrl.create({
      content: "Please Wait",
    });

    load.present();

    this.httpServices.getStation().subscribe(data => {
      this.stations =  data;
      console.log(this.stations);
      load.dismiss();
    }, (err) => {
      console.log(err);
      load.dismiss();
    });
  }

  getConfirm(){

    let stationData = {
      Station : this.station
    }

    this.viewCtrl.dismiss(stationData);
  }
}
