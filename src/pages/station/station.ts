import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams , public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StationPage');
  }

  getConfirm(){

    let stationData = {
      Station : this.station
    }

    this.viewCtrl.dismiss(stationData);
  }
}
