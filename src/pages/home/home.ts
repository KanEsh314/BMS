import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StationPage } from '../station/station';
import { TripPage } from '../trip/trip';
import { ReportPage } from '../report/report';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  setStation(){
  	this.navCtrl.push(StationPage);
  }

  createTrip(){
  	this.navCtrl.push(TripPage);
  }

  todayReport(){
  	this.navCtrl.push(ReportPage);
  }
}
