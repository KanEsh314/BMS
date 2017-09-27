import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';
import * as moment from 'moment';
/**
 * Generated class for the TripPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trip',
  templateUrl: 'trip.html',
})
export class TripPage {

route = '';
busno = '';
//timeStarts = new Date(Date.now()).toJSON();
timeStarts = moment().format('LTS');
astart = '';
aend = '';
cstart = '';
cend = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripPage');
  }

  getConfirm(){

    let confirmData = {
      Route : this.route,
      Bus : this.busno,
      Time : this.timeStarts,
      AStart : this.astart,
      AEnd : this.aend,
      CStart : this.cstart,
      CEnd : this.cend,
    }


  	this.navCtrl.push(ConfirmPage,confirmData);
  }

  getCancel(){
    this.navCtrl.pop();
  }

}
